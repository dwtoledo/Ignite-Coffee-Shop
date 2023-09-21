import {
  CoffeeCardContainer,
  AddToCartButton,
  ItemQuantitySelector,
  CoffeeCardFooter,
  CoffeeCardWrapper,
  ItemTagsContainer,
} from './style'

import CoffeeImage from '../../assets/images/type-expresso.svg'
import CartSimpleIcon from '../../assets/icons/cart-simple.svg'

export function CoffeeCard() {
  return (
    <CoffeeCardWrapper>
      <CoffeeCardContainer>
        <img src={CoffeeImage} alt="" />
        <ItemTagsContainer>
          <span className="tag">special</span>
          <span className="tag">alcoholic</span>
          <span className="tag">iced</span>
        </ItemTagsContainer>
        <span className="title">Traditional Expresso</span>
        <span className="description">
          Traditional coffee made with hot water and ground beans
        </span>

        <CoffeeCardFooter>
          <span>
            CAD <strong>3.90</strong>
          </span>
          <ItemQuantitySelector>
            <span>-</span>
            <input type="number" name="quantity" id="quantity" min="0" />
            <span>+</span>
          </ItemQuantitySelector>
          <AddToCartButton>
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
