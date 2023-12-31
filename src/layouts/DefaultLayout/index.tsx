import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { DefaultLayoutContainer } from './style'
import { LocationContext } from '../../contexts/location'
import { useState } from 'react'
import { City, getCitiesByProvinceAbbr } from '../../lib/cities'
import { Province, provinces } from '../../lib/provinces'
import { CartContext, CartItem } from '../../contexts/cart'
import { newOrderFormData } from '../../components/NewOrderForm'
import { OrderContextModel } from '../../contexts/order'

export function DefaultLayout() {
  const [selectedCity, setSelectedCity] = useState<City>({
    name: 'TORONTO',
    provinceAbbr: 'ON',
  })
  const [selectedProvince, setSelectedProvince] = useState<Province>({
    name: 'ONTARIO',
    abbreviation: 'ON',
  })
  const [cities, setCities] = useState<Array<City>>(
    getCitiesByProvinceAbbr(selectedCity.provinceAbbr),
  )
  const [items, setItems] = useState<Array<CartItem>>([])
  const [order, setOrder] = useState<newOrderFormData>({} as newOrderFormData)

  return (
    <DefaultLayoutContainer>
      <CartContext.Provider value={{ items, setItems }}>
        <LocationContext.Provider
          value={{
            cities,
            provinces,
            selectedCity,
            selectedProvince,
            setSelectedCity,
            setSelectedProvince,
            setCities,
          }}
        >
          <Header />
          <Outlet context={{ order, setOrder } satisfies OrderContextModel} />
        </LocationContext.Provider>
      </CartContext.Provider>
    </DefaultLayoutContainer>
  )
}
