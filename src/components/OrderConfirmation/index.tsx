import { useOutletContext } from 'react-router-dom'
import { OrderContextModel } from '../../contexts/order'
import { getReadablePayment } from '../../lib/payments'
import { OrderConfirmationContainer } from './style'

import CashIcon from '../../assets/icons/cash.svg'
import LocationIcon from '../../assets/icons/location.svg'
import OrderConfirmationImage from '../../assets/images/order-confirmation.svg'
import TimerIcon from '../../assets/icons/timer.svg'

export function OrderConfirmation() {
  const { order } = useOutletContext<OrderContextModel>()

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
              {order.address ? (
                <strong>{`${order.address.postalCode} - ${order.address.line1} ${order.address.line2}, ${order.address.city}, ${order.address.province}.`}</strong>
              ) : (
                'Address informed on checkout.'
              )}
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
                Payment on delivery using{' '}
                <strong>
                  {getReadablePayment(order.payment?.type || null)}
                </strong>
              </p>

              {order.payment?.additionalInfo ? (
                <p>
                  <strong>Additional info:</strong>{' '}
                  {order.payment.additionalInfo}
                </p>
              ) : null}
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
