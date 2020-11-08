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

export interface Props {
  primary?: boolean
  dark?: boolean
}

const HeroSection: React.FC<Props> = ({ primary, dark }) => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <Container>
      <HeroBg>
        <video
          autoPlay
          loop
          muted
          src={require('../../assets/videos/video.mp4')}
        />
      </HeroBg>

      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>

        <HeroP>
          Sign up for a new account today and receive $250 in credit towards
          your next payment
        </HeroP>

        <HeroWrapper>
          <Button
            primary={primary}
            dark={dark}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}{' '}
          </Button>
        </HeroWrapper>
      </HeroContent>
    </Container>
  )
}

export default HeroSection
