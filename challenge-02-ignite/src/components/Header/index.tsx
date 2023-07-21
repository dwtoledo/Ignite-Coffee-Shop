import { MapPin, ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import coffeeDeliveryLogo from '../../assets/icons/logo.svg'

import {
  HeaderContainer,
  LocationButton,
  LogoWithText,
  CartButton,
  ButtonsWrapper,
} from './style'

export function Header() {
  return (
    <HeaderContainer>
      <LogoWithText>
        <img
          src={coffeeDeliveryLogo}
          alt="Coffee cup with lid, a simple and monochrome purple logo"
        />
        <div>
          <span>Coffee</span>
          <br />
          <span>Delivery</span>
        </div>
      </LogoWithText>

      <ButtonsWrapper>
        <LocationButton>
          <MapPin size={22} weight="fill" color={defaultTheme.purple} />
          <span>Porto Alegre, RS</span>
        </LocationButton>

        <CartButton>
          <ShoppingCart size={22} weight="fill" color={defaultTheme.yellow} />
          <span>3</span>
        </CartButton>
      </ButtonsWrapper>
    </HeaderContainer>
  )
}
