import styled from 'styled-components'

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
    color: ${(props) => props.theme.baseError};
    font-size: 0.875rem;
  }
`

export const FormSession = styled.fieldset`
  background-color: ${(props) => props.theme.baseCard};
  border: none;
  border-radius: 0.38rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
      font-family: 'Bakemono Text Bold';
    }

    &__message {
      color: ${(props) => props.theme.baseText};
      font-size: 0.875rem;
    }
  }
`

export const InputsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 1200px) {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`

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
  }
`

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
`

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
`

export const PaymentTypesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.75rem;
  }
`
