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
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <LogoWithText title="Home page">
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
      </Link>
      <ButtonsWrapper>
        <LocationButton title="Change location">
          <MapPin size={22} weight="fill" color={defaultTheme.purple} />
          <span>Porto Alegre, RS</span>
        </LocationButton>

        <Link to={'/checkout'}>
          <CartButton title="Proceed to checkout">
            <ShoppingCart size={22} weight="fill" color={defaultTheme.yellow} />
            <span>3</span>
          </CartButton>
        </Link>
      </ButtonsWrapper>
    </HeaderContainer>
  )
}
