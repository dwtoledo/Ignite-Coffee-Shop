import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
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
  background: ${(props) => props.theme.baseButton};
  border: none;

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.baseHover};
  }

  span {
    color: ${(props) => props.theme.purpleDark};
    font-size: 0.875rem;
  }
`
