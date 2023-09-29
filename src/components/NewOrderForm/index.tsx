import { defaultTheme } from '../../styles/themes/default'
import {
  getCitiesByProvinceAbbr,
  postalCodeRegexValidation,
} from '../../lib/cities'
import { PaymentTypes } from '../../lib/payments'
import { provinces } from '../../lib/provinces'
import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'

import {
  NewOrderFormContainer,
  GenericFieldsetContainer,
  GenericInputsContainer,
  GenericInput,
  RadioInput,
  NewOrderButton,
} from './style'

const maxItemQuantityOnCart = 10
const minItemQuantityOnCart = 1

const newOrderFormSchema = z.object({
  address: z.object({
    postalCode: z
      .string()
      .nonempty('Required.')
      .length(
        6,
        'Enter a six-character postal code without spaces, e.g. K1A0T6',
      )
      .regex(
        postalCodeRegexValidation,
        'Enter a valid postal code, e.g. K1A0T6.',
      )
      .toUpperCase(),
    line1: z.string().nonempty('Required.'),
    line2: z.string(),
    province: z.string().nonempty('Required.'),
    city: z.string().nonempty('Required.'),
  }),
  payment: z.object({
    type: z.string().nonempty('Required.'),
    additionalInfo: z.string().trim(),
  }),
  products: z
    .array(
      z.object({
        id: z.string().uuid(),
        quantity: z
          .number()
          .min(
            minItemQuantityOnCart,
            `Minimum of ${minItemQuantityOnCart} unit per product.`,
          )
          .max(
            maxItemQuantityOnCart,
            `Maximum of ${maxItemQuantityOnCart} units per product.`,
          ),
      }),
    )
    .nonempty('Cart is empty.'),
})

type newOrderFormData = z.infer<typeof newOrderFormSchema>

export function NewOrderForm() {
  const [cities, setCities] = useState<Array<string>>([])
  const [paymentType, setPaymentType] = useState<string | undefined>(
    PaymentTypes.CREDIT_CARD,
  )

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<newOrderFormData>({
    resolver: zodResolver(newOrderFormSchema),
    defaultValues: {
      payment: {
        type: PaymentTypes.CREDIT_CARD,
      },
    },
  })

  watch((data, { name }) => {
    if (data.payment?.type && name === 'payment.type') {
      setPaymentType(data.payment.type)
    }
  })

  function placeOrder(data: any) {
    // TODO - Go to Order Status page
    console.log(data)
  }

  function handleProvinceSelection(event: ChangeEvent<HTMLSelectElement>) {
    setCities(getCitiesByProvinceAbbr(event.target.value))
  }

  return (
    <NewOrderFormContainer onSubmit={handleSubmit(placeOrder)}>
      <span>Complete your order</span>

      <GenericFieldsetContainer>
        <div className="fieldset-container">
          <MapPinLine size={22} color={defaultTheme.yellowDark} />
          <span className="fieldset-container__title">Your address</span>
        </div>

        <GenericInputsContainer>
          <GenericInput>
            <input
              type="text"
              placeholder="Postal code"
              {...register('address.postalCode')}
            />
            {errors.address?.postalCode && (
              <span>{errors.address.postalCode.message}</span>
            )}
          </GenericInput>
          <GenericInput>
            <input
              type="text"
              placeholder="Address Line 1"
              {...register('address.line1')}
            />
            {errors.address?.line1 && (
              <span>{errors.address.line1.message}</span>
            )}
          </GenericInput>
          <GenericInput>
            <input
              type="text"
              placeholder="Address Line 2 (Optional)"
              {...register('address.line2')}
            />
          </GenericInput>
          <GenericInput>
            <select
              placeholder="Province"
              {...register('address.province')}
              onChange={handleProvinceSelection}
            >
              <option value={''}>Select a province</option>
              {provinces.map((province) => {
                return (
                  <option
                    key={province.abbreviation}
                    value={province.abbreviation}
                  >
                    {province.name}
                  </option>
                )
              })}
            </select>
            {errors.address?.province && (
              <span>{errors.address.province.message}</span>
            )}
          </GenericInput>
          <GenericInput>
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
          </GenericInput>
        </GenericInputsContainer>
      </GenericFieldsetContainer>
      <GenericFieldsetContainer>
        <div className="fieldset-container">
          <CurrencyDollar size={22} color={defaultTheme.yellowDark} />
          <div className="fieldset-container__wrapper">
            <span className="fieldset-container__title">Payment</span>
            <span className="fieldset-container__message">
              Payment is processed at delivery. Choose the way you want to pay:
            </span>
          </div>
        </div>

        <RadioInput>
          <input
            id="credit-card"
            type="radio"
            value={PaymentTypes.CREDIT_CARD}
            {...register('payment.type')}
          />
          <label
            htmlFor="credit-card"
            className={paymentType === '0' ? 'selected' : ''}
            title="Payment is credit card."
          >
            <CreditCard color={defaultTheme.purple} size={16} />
            Credit Card
          </label>
        </RadioInput>

        <RadioInput>
          <input
            id="debit-card"
            type="radio"
            value={PaymentTypes.DEBIT_CARD}
            {...register('payment.type')}
          />
          <label
            htmlFor="debit-card"
            className={paymentType === '1' ? 'selected' : ''}
            title="Payment is debit card."
          >
            <Bank color={defaultTheme.purple} size={16} />
            Debit Card
          </label>
        </RadioInput>

        <RadioInput>
          <input
            id="cash"
            type="radio"
            value={PaymentTypes.CASH}
            {...register('payment.type')}
          />
          <label
            htmlFor="cash"
            className={paymentType === '2' ? 'selected' : ''}
            title="Payment is cash."
          >
            <Money color={defaultTheme.purple} size={16} />
            Cash
          </label>
        </RadioInput>
        <GenericInput>
          <label htmlFor="additional-info">Additional info:</label>

          <textarea
            id="additional-info"
            {...register('payment.additionalInfo')}
            placeholder="If needed, add instructions for our delivery or payment."
          />
        </GenericInput>
      </GenericFieldsetContainer>

      <span>Selected items</span>
      <GenericFieldsetContainer></GenericFieldsetContainer>
      <NewOrderButton type="submit">Place your order</NewOrderButton>
    </NewOrderFormContainer>
  )
}
