import styled from 'styled-components'

export const NewOrderFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;

  > span {
    color: ${(props) => props.theme.baseSubtitle};
    font-size: 1.125rem;
    font-weight: bold;
  }
`

export const GenericFieldsetContainer = styled.fieldset`
  background-color: ${(props) => props.theme.baseCard};
  padding: 2.5rem;
  border: none;
  border-radius: 0.38rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .fieldset-container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;

    &__wrapper {
      display: flex;
      flex-direction: column;
    }

    &__title {
      color: ${(props) => props.theme.baseSubtitle};
      font-weight: bold;
    }

    &__message {
      font-size: 0.875rem;
      color: ${(props) => props.theme.baseText};
    }
  }
`

export const GenericInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const GenericInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  input,
  select,
  textarea {
    padding: 0.75rem;
    font-size: 0.875rem;
    border-radius: 0.25rem;
    border: 1px solid ${(props) => props.theme.baseButton};
    background: ${(props) => props.theme.baseInput};
  }

  span {
    font-size: 0.85rem;
    color: ${(props) => props.theme.baseError};
  }
`

export const RadioInput = styled.div`
  input {
    display: none;
  }

  label {
    background-color: ${(props) => props.theme.baseButton};
    border: none;
    border-radius: 0.38rem;
    display: flex;
    gap: 0.75rem;
    align-items: center;
    padding: 1rem;
    justify-content: center;

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

export const NewOrderButton = styled.button`
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  border-radius: 0.375rem;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.yellowDark};
    cursor: pointer;
  }
`
