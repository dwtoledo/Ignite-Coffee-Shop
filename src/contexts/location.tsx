import { Dispatch, SetStateAction, createContext } from 'react'
import { Province } from '../lib/provinces'
import { City } from '../lib/cities'

interface LocationContextModel {
  cities: Array<City>
  provinces: Array<Province>
  selectedCity: City
  selectedProvince: Province
  setCities: Dispatch<SetStateAction<Array<City>>>
  setSelectedCity: Dispatch<SetStateAction<City>>
  setSelectedProvince: Dispatch<SetStateAction<Province>>
}

export const LocationContext = createContext({} as LocationContextModel)
