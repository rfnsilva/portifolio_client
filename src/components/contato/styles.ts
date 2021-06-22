import styled from 'styled-components'

export const Container = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.background_white};

  @media (max-width: 768px) {
    height: 500px;
  }

  @media (max-width: 480px) {
    height: 500px;
  }

  @media (max-width: 1000px) and (min-width: 769px) {
    height: 500px;
  }
`

export const Wrapper = styled.div`
  /*max-width: 1000px;*/
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ContatoH1 = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.color_black};
  margin-bottom: 64px;
`

export const ContatoP = styled.p`
  color: ${props => props.theme.colors.color_black};
  margin-bottom: 64px;
  padding: 0 50px;
`

export const ContatoH2 = styled.h2`
  color: ${props => props.theme.colors.color_black};
  margin-bottom: 25px;
`

export const ContatoH3 = styled.h3`
  color: ${props => props.theme.colors.color_black};
  margin-bottom: 17px;
`
