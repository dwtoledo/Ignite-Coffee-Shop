import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  flex-wrap: wrap;
  margin: 0 auto;
`

export const LogoWithText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 2.5rem;
    width: auto;
  }

  div > span {
    font-size: 1.5rem;
    line-height: 0.9;
  }

  div > span:first-child {
    font-family: 'Bakemono Text Bold';
  }

  div > span:last-child {
    font-family: 'Bakemono Text Regular';
  }
`

export const LocationButton = styled.button`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background: ${(props) => props.theme.purpleLight};
  border: none;

  span {
    color: ${(props) => props.theme.purple};
    font-size: 0.875rem;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover > svg {
    fill: ${(props) => props.theme.purpleDark};
  }

  &:hover > span {
    color: ${(props) => props.theme.purpleDark};
  }
`

export const CartButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.375rem;
  background: ${(props) => props.theme.yellowLight};
  border: none;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &:hover > svg {
    fill: ${(props) => props.theme.yellowDark};
  }

  &:hover > span {
    background-color: ${(props) => props.theme.yellowDark};
  }

  span {
    align-items: center;
    background-color: ${(props) => props.theme.yellow};
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    display: flex;
    font-family: 'Bakemono Text Extrabold';
    font-size: 0.75rem;
    height: 1.25rem;
    justify-content: center;
    position: absolute;
    top: -0.625rem;
    right: -0.625rem;
    width: 1.25rem;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`
