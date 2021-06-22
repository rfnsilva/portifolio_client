import styled from 'styled-components'

interface Props {
  size: number
}

export const Container = styled.div`
  color: #fff;
  background: ${props => props.theme.colors.background};

  @media (max-width: 768px) {
    padding: 100px 0;
  }
`

export const Wrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
  }
`

export const Text = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;

  @media (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
`

export const Col1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Col2 = styled.div<Props>`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  canvas {
    width: ${props =>
      props.size > 421 && props.size > 880 ? '400px' : '500px'};
    @media (max-width: 420px) {
      width: 100% !important;
    }
  }
`
