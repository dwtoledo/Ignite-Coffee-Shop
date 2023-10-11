import { MapPin, ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { z } from 'zod'
import { v4 as uuid } from 'uuid'

import coffeeDeliveryLogo from '../../assets/icons/logo.svg'

import { useContext } from 'react'

import {
  HeaderContainer,
  LocationButton,
  LogoWithText,
  CartButton,
  ButtonsWrapper,
  PopoverLocationForm,
} from './style'
import { Link } from 'react-router-dom'
import { LocationContext } from '../../contexts/location'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { GenericInput } from '../NewOrderForm/style'
import { getCitiesByProvinceAbbr } from '../../lib/cities'
import { getProvinceByAbbr } from '../../lib/provinces'

const locationFormSchema = z.object({
  provinceAbbr: z.string(),
  cityName: z.string(),
})

type locationFormData = z.infer<typeof locationFormSchema>

export function Header() {
  const {
    cities,
    setCities,
    provinces,
    selectedCity,
    selectedProvince,
    setSelectedCity,
    setSelectedProvince,
  } = useContext(LocationContext)

  const { register, watch } = useForm<locationFormData>({
    resolver: zodResolver(locationFormSchema),
    defaultValues: {
      provinceAbbr: selectedProvince.abbreviation,
      cityName: selectedCity.name,
    },
  })

  watch((data, { name }) => {
    if (data.provinceAbbr && name === 'provinceAbbr') {
      const province = getProvinceByAbbr(data.provinceAbbr)
      const citiesByProvince = getCitiesByProvinceAbbr(data.provinceAbbr)
      setSelectedProvince(province)
      setSelectedCity({ name: '', provinceAbbr: data.provinceAbbr })
      setCities(citiesByProvince)
    }

    if (data.provinceAbbr && data.cityName && name === 'cityName') {
      setSelectedCity({
        name: data.cityName,
        provinceAbbr: data.provinceAbbr,
      })
    }
  })

  return (
    <HeaderContainer>
      <Link to={'/'}>
        <LogoWithText title="Home page">
          <img
            src={coffeeDeliveryLogo}
            alt="Coffee cup with lid, a simple and monochrome purple logo"
          />
          <div>
            <span>Coffee</span>
            <br />
            <span>Delivery</span>
          </div>
        </LogoWithText>
      </Link>
      <ButtonsWrapper>
        <Popover>
          <PopoverTrigger asChild>
            <LocationButton title="Change location">
              <MapPin size={22} weight="fill" color={defaultTheme.purple} />
              <span>
                {selectedCity.name && selectedProvince.abbreviation
                  ? `${selectedCity.name}, ${selectedProvince.abbreviation}`
                  : 'Select a location'}
              </span>
            </LocationButton>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverLocationForm>
              <GenericInput>
                <label htmlFor="provinceAbbr">Province/Territory:</label>
                <select
                  id="provinceAbbr"
                  {...register('provinceAbbr')}
                  value={selectedProvince.abbreviation}
                >
                  {provinces.map((province) => {
                    return (
                      <option key={uuid()} value={province.abbreviation}>
                        {province.name}
                      </option>
                    )
                  })}
                </select>
              </GenericInput>
              <GenericInput>
                <label htmlFor="provinceAbbr">City:</label>
                <select
                  id="cityName"
                  {...register('cityName')}
                  value={selectedCity.name}
                >
                  <option value={''}>Select a city</option>
                  {cities.map((city) => {
                    return (
                      <option key={uuid()} value={city.name}>
                        {city.name}
                      </option>
                    )
                  })}
                </select>
              </GenericInput>
            </PopoverLocationForm>
          </PopoverContent>
        </Popover>

        <Link to={'/checkout'}>
          <CartButton title="Proceed to checkout">
            <ShoppingCart size={22} weight="fill" color={defaultTheme.yellow} />
            <span>3</span>
          </CartButton>
        </Link>
      </ButtonsWrapper>
    </HeaderContainer>
  )
}
