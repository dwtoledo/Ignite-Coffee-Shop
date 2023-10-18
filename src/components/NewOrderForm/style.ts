import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 40rem 28rem;
    gap: 2rem;
  }

  .grid-1st-column,
  .grid-2nd-column {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    > span {
      color: ${(props) => props.theme.baseSubtitle};
      font-size: 1.125rem;
      font-weight: bold;
    }
  }

  .input-error__message {
    color: ${(props) => props.theme.redDark};
    font-size: 0.875rem;
  }
`;

export const FormSession = styled.fieldset`
  background-color: ${(props) => props.theme.baseCard};
  border: none;
  border-radius: 0.38rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;

  .session-header {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &__title {
      color: ${(props) => props.theme.baseSubtitle};
      font-family: "Bakemono Text Bold";
    }

    &__message {
      color: ${(props) => props.theme.baseText};
      font-size: 0.875rem;
    }
  }
`;

export const InputsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 1200px) {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const GenericInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  input,
  select,
  textarea {
    background: ${(props) => props.theme.baseInput};
    border: 1px solid ${(props) => props.theme.baseButton};
    border-radius: 0.25rem;
    font-size: 0.875rem;
    padding: 0.75rem;

    &:focus {
      border: 1px solid ${(props) => props.theme.yellowDark};
    }
  }

  label {
    font-size: 0.75rem;
    line-height: 1;
  }
`;

export const PaymentType = styled.div`
  input {
    display: none;
  }

  label {
    align-items: center;
    background-color: ${(props) => props.theme.baseButton};
    border: none;
    border-radius: 0.38rem;
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    padding: 1rem;

    &:hover {
      background-color: ${(props) => props.theme.baseHover};
      color: ${(props) => props.theme.baseSubtitle};
      cursor: pointer;
    }

    &.selected {
      background-color: ${(props) => props.theme.purpleLight};
      border: 1px solid ${(props) => props.theme.purple};
      color: ${(props) => props.theme.baseText};
    }
  }
`;

export const SubmitFormButton = styled.button`
  background-color: ${(props) => props.theme.yellow};
  border: none;
  border-radius: 0.375rem;
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  padding: 0.75rem;

  &:hover {
    background-color: ${(props) => props.theme.yellowDark};
    cursor: pointer;
  }
`;

export const PaymentTypesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.75rem;
  }
`;

export const SelectedProduct = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem 2rem 0.25rem;
  align-items: flex-start;
  gap: 1.25rem;
  border-bottom: 1px solid ${(props) => props.theme.baseButton};

  img {
    width: 4rem;
    height: 4rem;
  }

  .product__info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }

  .product__actions {
    display: flex;
    gap: 0.5rem;
    height: 2rem;
  }

  .product__price {
    flex: 1;
    text-align: end;
    font-size: 1rem;
    font-family: "Bakemono Text Bold";
  }
`;

export const RemoveProductButton = styled.button`
  background-color: ${(props) => props.theme.baseButton};
  border: none;
  border-radius: 0.38rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0rem 0.5rem;

  .trash-icon {
    fill: ${(props) => props.theme.purple};
  }

  span {
    text-transform: uppercase;
    color: ${(props) => props.theme.baseText};
    font-size: 0.75rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.baseHover};
    cursor: pointer;

    .trash-icon {
      fill: ${(props) => props.theme.purpleDark};
    }

    span {
      color: ${(props) => props.theme.baseSubtitle};
    }
  }
`;

export const CartTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .products-total,
  .delivery-total,
  .order-total {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    > span {
      line-height: 1.3;
    }
  }

  .order-total > span {
    font-size: 1.25rem;
    font-family: "Bakemono Text Bold";
    color: ${(props) => props.theme.baseSubtitle};
  }

  .products-total > span,
  .delivery-total > span {
    color: ${(props) => props.theme.baseText};

    &:first-child {
      font-size: 0.875rem;
    }
  }
`;
