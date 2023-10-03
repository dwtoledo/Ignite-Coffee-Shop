import CashIcon from '../../assets/icons/cash.svg'
import LocationIcon from '../../assets/icons/location.svg'
import TimerIcon from '../../assets/icons/timer.svg'
import OrderConfirmationImage from '../../assets/images/order-confirmation.svg'
import { OrderConfirmationContainer } from './style'

export function OrderConfirmation() {
  return (
    <OrderConfirmationContainer>
      <div className="confirmation-message">
        <span className="confirmation-message__line1">
          Uhull! Order confirmed
        </span>
        <span className="confirmation-message__line2">
          Now just wait for the coffee soon to come to you
        </span>
      </div>

      <div className="confirmation-content">
        <div className="confirmation-data">
          <div className="address-confirmation">
            <img
              src={LocationIcon}
              alt="White location pin icon with rounded purple background"
            />
            <span>
              Delivery at{' '}
              <strong>
                Rua João Daniel Martinelli, 102, Farrapos - Porto Alegre, RS
              </strong>
            </span>
          </div>

          <div className="delivery-time-confirmation">
            <img
              src={TimerIcon}
              alt="White watch timer icon with rounded yellow background"
            />
            <div>
              <p>Delivery estimation</p>
              <strong>20 min - 30 min</strong>
            </div>
          </div>

          <div className="payment-confirmation">
            <img
              src={CashIcon}
              alt="White dollar signal icon with rounded dark yellow background"
            />
            <div>
              <p>
                Payment on delivery using <strong>Credit Card</strong>
              </p>
              <p>
                <strong>Additional info:</strong> Here it&apos;s the additional
                info you&apos;ve added on cart
              </p>
            </div>
          </div>
        </div>

        <img
          src={OrderConfirmationImage}
          alt=""
          className="confirmation-image"
        />
      </div>
    </OrderConfirmationContainer>
  )
}
