import React from 'react'
import styled from 'styled-components'
import aboutPublicityBackground from '../../assets/images/aboutPublicityBackground.png'
import { theme } from '../../theme'
import Publicity from '../../components/Common/Publicity'
import Button from '../../components/Common/Button'

const AboutPublicityStyled = styled.div`
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
  return (
    <AboutPublicityStyled>
      <div className="wrapper">
        <Publicity image={aboutPublicityBackground}>
          <div className="publicity-container">
            <h2>Descubre Nuestros Productos</h2>
            <Button>Productos</Button>
          </div>
        </Publicity>
      </div>
    </AboutPublicityStyled>
  )
}

export default AboutPublicity
