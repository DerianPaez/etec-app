import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Common/Button'
import homePublicityBackground from '../../assets/images/homePublicityBackground.png'
import Publicity from '../../components/Common/Publicity'
import { theme } from '../../theme'
import { useNavigate } from 'react-router-dom'

const HomePublicityStyled = styled.section`
  .publicity-container {
    display: grid;
    gap: 10px;
    h2 {
      margin-bottom: 0;
      color: ${theme.colors.secundary};
    }
    p {
      color: ${theme.colors.secundary};
    }
  }
`
const HomePublicity = () => {
  const navigate = useNavigate()
  return (
    <HomePublicityStyled>
      <div className="wrapper">
        <Publicity image={homePublicityBackground}>
          <div className="publicity-container">
            <h2>Envios a todo el Ecuador</h2>
            <p>35% de descuento las 10 primeras personas</p>
            <Button onClick={() => navigate("/contacto")}>Contactar</Button>
          </div>
        </Publicity>
      </div>
    </HomePublicityStyled>
  )
}

export default HomePublicity
