import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'
import Button from '../../components/Common/Button'
import Publicity from '../../components/Common/Publicity'
import aboutSocialmediaBackground from '../../assets/images/aboutSocialmediaBackground.png'

const AboutSocialMediaStyled = styled.div`
  .social-media-container {
    display: grid;
    gap: 10px;
    h2 {
      margin-bottom: 0;
      color: ${theme.colors.secundary};
    }
    .social-media-button-container {
      display: flex;
      gap: 10px;
    }
  }
`

const AboutSocialMedia = () => {
  return (
    <AboutSocialMediaStyled>
       <div className="wrapper">
        <Publicity image={aboutSocialmediaBackground}>
          <div className="social-media-container">
            <h2>Siguenos en Nuestras Redes Sociales</h2>
            <div className="social-media-button-container">
              <Button>Facebook</Button>
              <Button>Instagram</Button>
            </div>
          </div>
        </Publicity>
      </div>
    </AboutSocialMediaStyled>
  )
}

export default AboutSocialMedia
