import {
  CoffeeCardContainer,
  AddToCartButton,
  ItemQuantitySelector,
  CoffeeCardFooter,
  CoffeeCardWrapper,
  ItemTagsContainer,
} from './style'

import CartSimpleIcon from '../../assets/icons/cart-simple.svg'
import { Product } from '../../lib/products'
import { ChangeEvent, useState } from 'react'

interface CoffeeCardProps {
  details: Product
}

export function CoffeeCard({ details }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState<number>(0)

  function handleQuantityIncrease() {
    setQuantity((quantity) => quantity + 1)
  }

  function handleQuantityDecrease() {
    if (!quantity) return
    setQuantity((quantity) => quantity - 1)
  }

  function handleQuantityChange(event: ChangeEvent<HTMLInputElement>) {
    setQuantity(Number(event.target.value))
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
              min="0"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <span onClick={handleQuantityIncrease} title="Increase quantity">
              +
            </span>
          </ItemQuantitySelector>
          <AddToCartButton title="Add to cart">
            <img
              src={CartSimpleIcon}
              alt="White simple cart icon within dark purple button"
            />
          </AddToCartButton>
        </CoffeeCardFooter>
      </CoffeeCardContainer>
    </CoffeeCardWrapper>
  )
}
