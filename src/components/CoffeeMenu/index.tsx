import { CoffeeCard } from '../CoffeCard'
import { CoffeeMenuContainer, CoffeeCardsContainer } from './style'

import { products } from '../../lib/products'

export function CoffeeMenu() {
  return (
    <CoffeeMenuContainer>
      <h3>Our coffees</h3>

      <CoffeeCardsContainer>
        {products.map((product) => {
          return <CoffeeCard key={product.id} details={product} />
        })}
      </CoffeeCardsContainer>
    </CoffeeMenuContainer>
  )
}
