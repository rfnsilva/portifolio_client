import React, { useState } from 'react'

import {
  Container,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroWrapper,
  Button,
  ArrowForward,
  ArrowRight
} from './styles'

const HeroSection: React.FC = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <Container id="heroSection">
      <HeroBg>
        <video
          autoPlay
          loop
          muted
          src={require('../../assets/videos/video.mp4')}
        />
      </HeroBg>

      <HeroContent>
        <HeroH1>What is Lorem Ipsum</HeroH1>

        <HeroP>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has.
        </HeroP>

        <HeroWrapper>
          <Button onMouseEnter={onHover} onMouseLeave={onHover}>
            Ver Mais {hover ? <ArrowForward /> : <ArrowRight />}{' '}
          </Button>
        </HeroWrapper>
      </HeroContent>
    </Container>
  )
}

export default HeroSection
