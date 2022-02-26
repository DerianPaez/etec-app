import React from 'react'
import styled from 'styled-components'
import Value from '../../components/Common/Value'

const ValuesStyled = styled.section`
  h2 {
    margin-bottom: 15px;
    text-align: center;
  }
  .values-text-container p {
    margin-bottom: 30px;
  }
  .values-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 40px;
  }
  @media (min-width: 1024px){
    .values-text-container {
      width: 60%;
      margin: 0 auto;
    }
    .values-text-container p {
      margin-bottom: 60px;
      text-align: center;
    }
  }
`
const Values = () => {
  return (
    <ValuesStyled>
      <div className="wrapper">
        <h2>Nuestor Valores</h2>
        <div className="values-text-container">
          <p>Somos una empresa de servicios estratégicos comerciales dedicada a optimizar la calidad de vida de nuestros.</p>
        </div>
        <div className="values-container">
          <Value
            title="Transparencia"
            text="Somos una empresa de servicios estratégicos comerciales dedicada a optimizar la calidad de vida de nuestros clientes."
          />
          <Value
            title="Responsabilidad"
            text="Somos una empresa de servicios estratégicos comerciales dedicada a optimizar la calidad de vida de nuestros clientes."
          />
          <Value
            title="Responsabilidad"
            text="Somos una empresa de servicios estratégicos comerciales dedicada a optimizar la calidad de vida de nuestros clientes."
          />
        </div>
      </div>
    </ValuesStyled>
  )
}

export default Values
