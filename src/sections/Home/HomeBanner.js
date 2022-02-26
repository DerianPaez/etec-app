import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Banner from '../../components/Common/Banner'
import Button from '../../components/Common/Button'

const HomeBannerStyled = styled.div`
  .banner-content {
    display: grid;
    gap: 10px;
    h1 {
      text-transform: capitalize;
    }
    p {
      margin-bottom: 10px;
    }
    @media (min-width: 768px) {
      h1 {
        font-size: 2.4em;
      }
    }
  }
`
const HomeBanner = () => {
  const navigate = useNavigate()
  return (
    <HomeBannerStyled>
      <Banner>
        <div className="wrapper">
          <div className="banner-content">
            <h1>descubre nuestra colección</h1>
            <p>Estamos ofreciendo un 20% de descuento</p>
            <Button onClick={() => navigate("/contacto")}>Contactar</Button>
          </div>
        </div>
      </Banner>
    </HomeBannerStyled>
  )
}

export default HomeBanner
