import styled from 'styled-components'

export const OrderConfirmationContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.75rem;

  .confirmation-message {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &__line1 {
      line-height: 1.3;
      font-size: 2rem;
      font-family: 'Bakemono Text Extrabold';
      color: ${(props) => props.theme.yellowDark};
    }

    &__line2 {
      line-height: 1.3;
      font-size: 1.25rem;
      color: ${(props) => props.theme.baseSubtitle};
    }
  }

  .confirmation-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.75rem;

    @media screen and (min-width: 1200px) {
      display: grid;
      grid-template-columns: 1fr 30.75rem;
      gap: 6.37rem;
    }

    .confirmation-data {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      gap: 1.75rem;
      padding: 1rem;
      position: relative;

      &::before {
        content: '';
        border-radius: 0rem 2.25rem;
        inset: 0;
        padding: 1px;
        position: absolute;
        background: linear-gradient(
          45deg,
          ${(props) => props.theme.yellow},
          ${(props) => props.theme.purple}
        );
        -webkit-mask: linear-gradient(${(props) => props.theme.white} 0 0)
            content-box,
          linear-gradient(${(props) => props.theme.white} 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
      }

      @media screen and (min-width: 1200px) {
        padding: 2.5rem;

        &::before {
          padding: 2px;
        }
      }

      .address-confirmation,
      .delivery-time-confirmation,
      .payment-confirmation {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
    }

    .confirmation-image {
      max-width: 100%;
    }
  }
`
