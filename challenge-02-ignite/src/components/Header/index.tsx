import { MapPin } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import coffeeDeliveryLogo from '../../assets/icons/logo.svg'

import { HeaderContainer, LocationButton, LogoWithText } from './style'

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

      <LocationButton>
        <MapPin size={22} weight="fill" color={defaultTheme.purple} />
        <span>Porto Alegre, RS</span>
      </LocationButton>
    </HeaderContainer>
  )
}
