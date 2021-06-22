import React from 'react'
import Image from 'next/image'

import { Container, PortifolioH1, Wrapper, Card, Icon } from './styles'

const portifolio: React.FC = () => {
  return (
    <Container id="servicesSection">
      <PortifolioH1>Portifolio</PortifolioH1>
      <Wrapper>
        <Card>
          <Icon>
            <Image
              src="/car.svg"
              width="400"
              height="400"
              alt="Profile Picture"
            />
          </Icon>
        </Card>

        <Card>
          <Icon>
            <Image
              src="/car.svg"
              width="400"
              height="400"
              alt="Profile Picture"
            />
          </Icon>
        </Card>

        <Card>
          <Icon>
            <Image
              src="/car.svg"
              width="400"
              height="400"
              alt="Profile Picture"
            />
          </Icon>
        </Card>

        <Card>
          <Icon>
            <Image
              src="/car.svg"
              width="400"
              height="400"
              alt="Profile Picture"
            />
          </Icon>
        </Card>

        <Card>
          <Icon>
            <Image
              src="/car.svg"
              width="400"
              height="400"
              alt="Profile Picture"
            />
          </Icon>
        </Card>

        <Card>
          <Icon>
            <Image
              src="/car.svg"
              width="400"
              height="400"
              alt="Profile Picture"
            />
          </Icon>
        </Card>
      </Wrapper>
    </Container>
  )
}

export default portifolio
