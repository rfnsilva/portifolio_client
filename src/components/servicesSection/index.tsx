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
    <Container id="servicesSection">
      <ServicesH1>Serviços</ServicesH1>
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
          <ServicesH2>Desenvolvedor de Aplicativos</ServicesH2>
          <ServicesP>
            Desenvolvimento de Aplicativos para Celulares Android e iOS
            (iPhone).
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
          <ServicesH2>Criação de Sites</ServicesH2>
          <ServicesP>
            Desenvolvedor de Sites, HotSites, especialista em HTML, CSS,
            JavaScript, typescript, MongoDb, nodeJs.
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
          <ServicesH2>Loja Virtual / Ecommerce</ServicesH2>
          <ServicesP>
            Criação de Loja Online, venda produtos ou receba pagamentos através
            da da Internet.
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
          <ServicesH2>Desenvolvedor Front-End</ServicesH2>
          <ServicesP>
            Especialista em HTML5, JavaScript, CSS, jQuery, BootStrap, Angular
            2+, react, react-native...
          </ServicesP>
        </Card>
      </Wrapper>
    </Container>
  )
}

export default servicesSection
