import React from 'react'
import styled from 'styled-components'
import Value from '../../components/Common/Value'

const ValuesStyled = styled.section`
  .values-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 40px;
  }
`
const Values = () => {
  return (
    <ValuesStyled>
      <div className="wrapper">
        <h2>Valores</h2>
        <div className="values-container">
          <Value
            title="Responsabilidad"
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
          <Value
            title="Responsabilidad"
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
