import styled from 'styled-components'
import Value from '../../components/Common/Value'

const ValuesStyled = styled.section`
  .values-container {
    display: grid;
    gap: 30px;
  }

  @media (min-width: 768px) {
    .values-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1024px) {
    .values-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
const Values = () => {
  return (
    <ValuesStyled>
      <div className="wrapper">
        <h2>Valores</h2>
        <div className="values-container">
          <Value title="Responsabilidad" text="Somos una empresa de servicios estratégicos comerciales dedicada a optimizar la calidad de vida de nuestros clientes."/>
          <Value title="Responsabilidad" text="Somos una empresa de servicios estratégicos comerciales dedicada a optimizar la calidad de vida de nuestros clientes."/>
          <Value title="Responsabilidad" text="Somos una empresa de servicios estratégicos comerciales dedicada a optimizar la calidad de vida de nuestros clientes."/>
          <Value title="Responsabilidad" text="Somos una empresa de servicios estratégicos comerciales dedicada a optimizar la calidad de vida de nuestros clientes."/>
          <Value title="Responsabilidad" text="Somos una empresa de servicios estratégicos comerciales dedicada a optimizar la calidad de vida de nuestros clientes."/>
          <Value title="Responsabilidad" text="Somos una empresa de servicios estratégicos comerciales dedicada a optimizar la calidad de vida de nuestros clientes."/>
        </div>
      </div>
    </ValuesStyled>
  )
}

export default Values
