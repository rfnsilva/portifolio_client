import React from 'react'
import Image from 'next/image'

import {
  Container,
  ServicesH1,
  Wrapper,
  Card,
  Icon,
  ServicesH2,
  ServicesP
} from './styles'

const servicesSection: React.FC = () => {
  return (
    <Container>
      <ServicesH1>Outros Serviços</ServicesH1>
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
          <ServicesH2>reduce expenses</ServicesH2>
          <ServicesP>
            We help reduce your fess and increase your overall revenue.
          </ServicesP>
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
          <ServicesH2>reduce expenses</ServicesH2>
          <ServicesP>
            We help reduce your fess and increase your overall revenue.
          </ServicesP>
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
          <ServicesH2>reduce expenses</ServicesH2>
          <ServicesP>
            We help reduce your fess and increase your overall revenue.
          </ServicesP>
        </Card>
      </Wrapper>
    </Container>
  )
}

export default servicesSection
