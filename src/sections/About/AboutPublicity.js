import React from 'react'
import styled from 'styled-components'
import aboutPublicityBackground from '../../assets/images/aboutPublicityBackground.png'
import { theme } from '../../theme'
import Publicity from '../../components/Common/Publicity'
import Button from '../../components/Common/Button'
import { useNavigate } from 'react-router-dom'

const AboutPublicityStyled = styled.section`
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

const AboutPublicity = () => {
  const navigate = useNavigate()
  return (
    <AboutPublicityStyled>
      <div className="wrapper">
        <Publicity image={aboutPublicityBackground}>
          <div className="publicity-container">
            <h2>Descubre Nuestros Productos</h2>
            <Button onClick={() => navigate("/productos")}>Productos</Button>
          </div>
        </Publicity>
      </div>
    </AboutPublicityStyled>
  )
}

export default AboutPublicity
