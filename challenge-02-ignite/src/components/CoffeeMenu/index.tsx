import { CoffeeCard } from '../CoffeCard'
import { CoffeeMenuContainer, CoffeeCardsContainer } from './style'

export function CoffeeMenu() {
  return (
    <CoffeeMenuContainer>
      <h3>Our coffees</h3>

      <CoffeeCardsContainer>
        <CoffeeCard />
      </CoffeeCardsContainer>
    </CoffeeMenuContainer>
  )
}
