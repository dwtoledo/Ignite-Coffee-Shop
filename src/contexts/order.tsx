import { Dispatch, SetStateAction } from 'react'
import { newOrderFormData } from '../components/NewOrderForm'

export interface OrderContextModel {
  order: newOrderFormData
  setOrder: Dispatch<SetStateAction<newOrderFormData>>
}
