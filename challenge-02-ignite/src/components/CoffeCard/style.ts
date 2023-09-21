import styled from 'styled-components'

export const CoffeeCardWrapper = styled.div`
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 0 2.25rem 0 2.25rem;
  min-height: 19.375rem;
  height: max-content;
  width: 16rem;
  position: relative;
`

export const CoffeeCardContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 1.25rem;
  min-height: 19.375rem;
  position: absolute;
  top: -1.25rem;
  width: calc(16rem - 2.5rem);

  span.tag {
    background-color: ${(props) => props.theme.yellowLight};
    border-radius: 6.25rem;
    color: ${(props) => props.theme.yellowDark};
    font-family: 'Bakemono Text Bold';
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
  }
  span.title {
    color: ${(props) => props.theme.baseSubtitle};
    font-family: 'Bakemono Text Bold';
    font-size: 1.25rem;
  }
  span.description {
    color: ${(props) => props.theme.baseLabel};
    font-size: 0.875rem;
    text-align: center;
  }
`

export const ItemTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`

export const CoffeeCardFooter = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  span {
    font-size: 0.875rem;

    strong {
      font-size: 1.5rem;
      font-family: 'Bakemono Text Bold';
    }
  }
`

export const AddToCartButton = styled.button`
  align-items: center;
  background-color: ${(props) => props.theme.purpleDark};
  border: none;
  border-radius: 0.375rem;
  display: flex;
  justify-content: center;
  padding: 0.625rem;

  img {
    height: auto;
    width: 1.125rem;
  }
`

export const ItemQuantitySelector = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.baseButton};
  border-radius: 0.375rem;
  display: flex;
  height: 2.735rem;
  justify-content: space-evenly;
  padding: 0.5rem;
  width: 4.5rem;

  input {
    background-color: transparent;
    border: none;
    font-weight: bold;
    text-align: center;
    width: 2rem;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  span {
    color: ${(props) => props.theme.purple};
    font-size: 2rem;
    font-family: 'Bakemono Text Regular';

    &:hover {
      cursor: pointer;
    }
  }
`
