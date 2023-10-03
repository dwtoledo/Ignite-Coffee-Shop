import {
  BannerContainer,
  BulletPoint,
  BulletPointsContainer,
  TextContainer,
  ImageContainer,
} from './style'

import CoffeeCupImage from '../../assets/images/coffee-cup.svg'

import CartIcon from '../../assets/icons/cart.svg'
import TimerIcon from '../../assets/icons/timer.svg'
import PackageIcon from '../../assets/icons/package.svg'
import CoffeeIcon from '../../assets/icons/coffee.svg'

export function Banner() {
  return (
    <BannerContainer>
      <ImageContainer
        src={CoffeeCupImage}
        alt="Coffee delivery icon with coffee beans and a cup of coffee."
      />
      <TextContainer>
        <h2>Find your perfect coffee!</h2>
        <p>
          Superior quality grains of coffee, with a delightful aroma. Enjoy
          wherever you may be, anytime with us!
        </p>
      </TextContainer>

      <BulletPointsContainer>
        <BulletPoint>
          <img
            src={CartIcon}
            alt="White shopping cart icon with rounded dark yellow background"
          />
          <span>Simple and secure purchase.</span>
        </BulletPoint>

        <BulletPoint>
          <img
            src={TimerIcon}
            alt="White watch timer icon with rounded yellow background"
          />
          <span>Fast and tracked delivery.</span>
        </BulletPoint>

        <BulletPoint>
          <img
            src={PackageIcon}
            alt="White package icon with rounded dark gray background"
          />
          <span>Packaging keeps the coffee intact.</span>
        </BulletPoint>

        <BulletPoint>
          <img
            src={CoffeeIcon}
            alt="White coffee cup icon with rounded purple background"
          />
          <span>The coffee arrives fresh to you.</span>
        </BulletPoint>
      </BulletPointsContainer>
    </BannerContainer>
  )
}
