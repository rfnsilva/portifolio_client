import styled from 'styled-components'

export const Container = styled.div`
  height: 870px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.background};

  @media (max-width: 768px) {
    height: 2271px;
  }

  @media (max-width: 480px) {
    height: 2282px;
  }

  @media (max-width: 1000px) and (min-width: 769px) {
    height: 1200px;
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

export const Card = styled.div`
  height: 100%;
  background: ${props => props.theme.colors.color_white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const Icon = styled.div`
  height: 260px;
  width: 260px;
  margin-bottom: 10px;
`

export const PortifolioH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`
