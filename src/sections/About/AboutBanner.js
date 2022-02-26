import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/Common/Banner'
import Button from '../../components/Common/Button'
import aboutBanner from '../../assets/images/aboutBanner.png'
import { theme } from '../../theme'
import { useNavigate } from 'react-router-dom'

const AboutBannerStyled = styled.div`
  .banner-content {
    display: grid;
    gap: 10px;
    text-align: center;
    h1 {
      text-transform: capitalize;
      color: ${theme.colors.secundary};
    }
    p {
      margin-bottom: 10px;
      color: ${theme.colors.secundary};
    }
    @media (min-width: 768px) {
      h1 {
        font-size: 2.4em;
      }
    }
  }

  .banner-content-button {
    justify-self: center;
  }
`

const AboutBanner = () => {
  const navigate = useNavigate()
  return (
    <AboutBannerStyled>
      <Banner image={aboutBanner}>
        <div className="wrapper">
          <div className="banner-content">
            <h1>ecuentralo todo ecuador</h1>
            <p>Estamos ofreciendo un 20% de descuento</p>
            <Button onClick={() => navigate("/contacto")} className="banner-content-button">Contactar</Button>
          </div>
        </div>
      </Banner>
    </AboutBannerStyled>
  )
}

export default AboutBanner
