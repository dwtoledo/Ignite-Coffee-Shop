import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 600px) {
    column-gap: 2rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'title image'
      'bullets image';
    padding: 5rem 0;
  }
`

export const ImageContainer = styled.img`
  align-self: center;
  grid-area: image;
  height: auto;
  width: 85%;

  @media screen and (min-width: 600px) {
    width: 100%;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-area: title;

  h2 {
    font-family: 'Bakemono Text Bold';
    line-height: 1.4;
    font-size: 3rem;
    color: ${(props) => props.theme.baseTitle};
  }

  p {
    line-height: 1.6;
    font-size: 1.25rem;
    color: ${(props) => props.theme.baseSubtitle};
  }
`

export const BulletPointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-area: bullets;

  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const BulletPoint = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: flex-start;

  img {
    width: 2rem;
    height: 2rem;
  }
`
