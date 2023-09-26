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

interface CoffeeCardProps {
  details: Product
}

export function CoffeeCard({ details }: CoffeeCardProps) {
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
            CAD <strong>{details.price}</strong>
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
