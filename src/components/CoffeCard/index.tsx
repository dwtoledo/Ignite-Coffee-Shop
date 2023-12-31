import { ChangeEvent, useContext, useState } from 'react'
import { v4 as uuid4 } from 'uuid'
import {
  CoffeeCardContainer,
  ResetProductQuantityButton,
  ItemQuantitySelector,
  CoffeeCardFooter,
  CoffeeCardWrapper,
  ItemTagsContainer,
} from './style'

import { TrashSimple } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'

import { CartContext, CartItem } from '../../contexts/cart'
import { Product } from '../../lib/products'
import { maxItemQuantityOnCart } from '../NewOrderForm'

interface CoffeeCardProps {
  details: Product
}

export function CoffeeCard({ details }: CoffeeCardProps) {
  const { items, setItems } = useContext(CartContext)
  const [quantity, setQuantity] = useState<number>(
    getProductCartItem(details.id)?.quantity || 0,
  )

  function getProductCartItem(productId: string): CartItem | undefined {
    return items.find((item) => item.product.id === productId)
  }

  function addCartItem(quantity: number, product: Product) {
    setItems((items) => [...items, { id: uuid4(), quantity, product }])
  }

  function removeCartItem(id: string) {
    setItems(items.filter((item) => item.id !== id))
  }

  function updateCartItemQuantity(id: string, quantity: number) {
    setItems(
      items.map((item) => {
        if (item.id !== id) return item
        item.quantity = quantity
        return item
      }),
    )
  }

  function updateCartItem(productId: string, quantity: number) {
    const cartItem = getProductCartItem(productId)

    if (!cartItem) {
      addCartItem(quantity, details)
    } else {
      if (quantity < 1) {
        removeCartItem(cartItem.id)
      } else {
        updateCartItemQuantity(cartItem.id, quantity)
      }
    }
  }

  function handleQuantityIncrease() {
    const newQuantity = quantity + 1
    if (newQuantity > maxItemQuantityOnCart) return
    setQuantity(newQuantity)
    updateCartItem(details.id, newQuantity)
  }

  function handleQuantityDecrease() {
    if (!quantity) return
    const newQuantity = quantity - 1
    setQuantity(newQuantity)
    updateCartItem(details.id, newQuantity)
  }

  function handleQuantityChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = Number(event.target.value)
    if (newValue > maxItemQuantityOnCart) return
    setQuantity(newValue)
    updateCartItem(details.id, newValue)
  }

  function handleResetProductQuantity() {
    setQuantity(0)
    updateCartItem(details.id, 0)
  }

  return (
    <CoffeeCardWrapper>
      <CoffeeCardContainer>
        <img src={details.imgUrl} alt={details.imgAltText} />
        <ItemTagsContainer>
          {details.tags.map((tag) => {
            return (
              <span key={`${details.id}-${tag}`} className="tag">
                {tag}
              </span>
            )
          })}
        </ItemTagsContainer>
        <span className="title">{details.name}</span>
        <span className="description">{details.description}</span>

        <CoffeeCardFooter>
          <span>
            CAD <strong>{details.price.toFixed(2)}</strong>
          </span>
          <ItemQuantitySelector>
            <span onClick={handleQuantityDecrease} title="Decrease quantity">
              -
            </span>
            <input
              type="number"
              name="quantity"
              min={0}
              max={maxItemQuantityOnCart}
              value={quantity}
              onChange={handleQuantityChange}
              readOnly
            />
            <span onClick={handleQuantityIncrease} title="Increase quantity">
              +
            </span>
          </ItemQuantitySelector>
          <ResetProductQuantityButton
            type="button"
            title="Reset product quantity."
            disabled={!quantity}
            onClick={handleResetProductQuantity}
          >
            <TrashSimple color={defaultTheme.white} />
          </ResetProductQuantityButton>
        </CoffeeCardFooter>
        {quantity === maxItemQuantityOnCart ? (
          <span className="max-qty-message">Maximum quantity reached.</span>
        ) : null}
      </CoffeeCardContainer>
    </CoffeeCardWrapper>
  )
}
