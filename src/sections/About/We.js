import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Common/Button'
import Link from '../../components/Common/Link'
import imageWe from '../../assets/images/imageWe.png'
import { theme } from '../../theme'

const WeStyled = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  padding-top: 0;
  .we-container {
    display: grid;
    grid-template-areas:
      "content"
      "image";
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    grid-gap: 50px;
    .we-content {
      display: grid;
      grid-area: content;
      h1, p {
        margin-bottom: 10px;
      }
      a {
        width: min-content;
      }
    }

    .we-image {
      width: 100%;
      position: relative;
      .we-background {
        background-color: ${theme.colors.accent};
        width: 90%;
        height: 100%;
        display: block;
        position: absolute;
        top: -20px;
        right: 0;
        z-index: -1;
      }
      img {
        width: 100%;
        padding-right: 20px;
      }
      @media (min-width: 1024px) {
        .we-background {
          top: -40px;
        }
        img{
          padding-right: 40px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .we-container {
      grid-template-areas:
        "content image";
      grid-template-columns: 1fr 1fr;
    }
  }
`
const We = () => {
  return (
    <WeStyled>
      <div className="wrapper">
        <div className="we-container">
          <div className="we-content">
            <h1>Nosotros</h1>
            <p>
              Somos una empresa de servicios estratégicos comerciales dedicada a optimizar la calidad de vida de nuestros clientes ofreciéndoles soluciones especializadas y de forma simple, autenticando altos estándares de calidad en los productos y servicios brindados.
            </p>
            <p>
              Contamos con un grupo de profesionales ágil y eficaz en diferentes áreas, con alto grado de compromiso garantizando respuestas rápidas y eficientes. Atiende a personas naturales y jurídicas proporcionando productos y servicios múltiples a una extensa cartera de clientes.
            </p>
            <Link to={`${window.location.origin}/#contacto-id`}>
              <Button type="button">Contactar</Button>
            </Link>
          </div>
          <figure className="we-image">
            <img src={imageWe} alt="Etec imagen nosotros" />
            <div className="we-background"></div>
          </figure>
        </div>
      </div>
    </WeStyled>
  )
}

export default We
