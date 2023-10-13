import { Dispatch, SetStateAction, createContext } from 'react'
import { Product } from '../lib/products'

export interface CartItem {
  id: string
  quantity: number
  product: Product
}

interface CartContextModel {
  items: Array<CartItem>
  setItems: Dispatch<SetStateAction<Array<CartItem>>>
}

export const CartContext = createContext({} as CartContextModel)
