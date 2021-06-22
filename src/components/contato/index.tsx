import React from 'react'

import {
  Container,
  ContatoH1,
  ContatoP,
  ContatoH2,
  ContatoH3,
  Wrapper
} from './styles'

const contato: React.FC = () => {
  return (
    <Container id="contatoSection">
      <ContatoH1>Contato</ContatoH1>
      <ContatoP>
        Se você quiser conversar, entre em contato, estou quase sempre online :)
      </ContatoP>
      <ContatoH2>Envie uma mensagem</ContatoH2>
      <ContatoH3>
        <strong style={{ color: '#4ea50e' }}>WhatsApp</strong>: (77) 98105-0508
      </ContatoH3>
      <ContatoH3>
        <strong style={{ color: '#bd0e0e' }}>Instagram</strong>: ricardo__neves_
      </ContatoH3>
      <ContatoH3>
        <strong style={{ color: '#bd0e0e' }}>Email</strong>:
        ricardotcu10@gmail.com
      </ContatoH3>
      <Wrapper></Wrapper>
    </Container>
  )
}

export default contato
