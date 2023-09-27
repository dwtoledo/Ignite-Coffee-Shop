import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import { defaultTheme } from '../styles/themes/default'
import { provinces } from '../lib/provinces'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChangeEvent, useState } from 'react'
import { getCitiesByProvinceAbbr } from '../lib/cities'

const canadaPostalCodeValidationRegex: RegExp =
  /([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i

const newOrderFormSchema = z.object({
  address: z.object({
    postalCode: z
      .string()
      .nonempty('Required.')
      .length(6, 'Enter a six-character postal code without space, e.g. K1A0T6')
      .regex(canadaPostalCodeValidationRegex, 'Invalid postal code.')
      .toUpperCase(),
    line1: z.string().nonempty('Required.'),
    line2: z.string(),
    province: z.string().nonempty('Required.'),
    city: z.string().nonempty('Required.'),
  }),
  payment: z.object({
    type: z.coerce.number(),
    additionalInfo: z.string().trim(),
  }),
  products: z
    .array(
      z.object({
        id: z.string().uuid(),
        quantity: z
          .number()
          .min(1, 'Minimum of 1 unit per product.')
          .max(10, 'Maximum of 10 units per product.'),
      }),
    )
    .nonempty('Cart is empty.'),
})

type newOrderFormData = z.infer<typeof newOrderFormSchema>

export function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<newOrderFormData>({
    resolver: zodResolver(newOrderFormSchema),
  })
  const [cities, setCities] = useState<Array<string>>([])

  function placeOrder(data: any) {
    console.log(data)
  }

  function handleProvinceSelection(event: ChangeEvent<HTMLSelectElement>) {
    setCities(getCitiesByProvinceAbbr(event.target.value))
  }

  return (
    <form onSubmit={handleSubmit(placeOrder)}>
      <fieldset>
        <legend>Complete your order</legend>
        <MapPinLine size={22} color={defaultTheme.yellowDark} />
        <span>Your address</span>
        <input
          type="text"
          placeholder="Postal code"
          {...register('address.postalCode')}
        />
        {errors.address?.postalCode && (
          <span>{errors.address.postalCode.message}</span>
        )}
        <input
          type="text"
          placeholder="Address Line 1"
          {...register('address.line1')}
        />
        {errors.address?.line1 && <span>{errors.address.line1.message}</span>}
        <input
          type="text"
          placeholder="Address Line 2"
          {...register('address.line2')}
        />
        <select
          placeholder="Province"
          {...register('address.province')}
          onChange={handleProvinceSelection}
        >
          <option value={''}>Select a province</option>
          {provinces.map((province) => {
            return (
              <option key={province.abbreviation} value={province.abbreviation}>
                {province.name}
              </option>
            )
          })}
        </select>
        {errors.address?.province && (
          <span>{errors.address.province.message}</span>
        )}
        <select
          placeholder="City"
          {...register('address.city')}
          disabled={!cities}
        >
          <option value={''}>Select a city</option>
          {cities.map((city) => {
            return (
              <option key={city} value={city}>
                {city}
              </option>
            )
          })}
        </select>
        {errors.address?.city && <span>{errors.address.city.message}</span>}
      </fieldset>
      <fieldset>
        <CurrencyDollar />
        <span>Payment</span>
        <span>
          Payment is processed at delivery. Choose the way you want to pay:
        </span>
        <input
          id="credit-card"
          type="radio"
          value="0"
          {...register('payment.type')}
        />
        <label htmlFor="credit-card">
          <CreditCard />
          Credit Card
        </label>
        <input
          id="debit-card"
          type="radio"
          value="1"
          {...register('payment.type')}
        />
        <label htmlFor="debit-card">
          <Bank />
          Debit Card
        </label>

        <input id="cash" type="radio" value="2" {...register('payment.type')} />
        <label htmlFor="cash">
          <Money />
          Cash
        </label>

        <label htmlFor="additional-info">Additional info:</label>

        <textarea
          id="additional-info"
          {...register('payment.additionalInfo')}
          placeholder="If needed, add instructions for our delivery or payment."
        />
      </fieldset>
      <fieldset>
        <legend>Selected items</legend>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  )
}
