import styled from 'styled-components'
import Button from '../../components/Common/Button'
import Link from '../../components/Common/Link'

import imageWe from '../../static/images/Rectangles.png'

const WeStyled = styled.main`
  display: grid;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  .we-container {
    display: grid;
    grid-template-areas:
      "content"
      "image";
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
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
      grid-area: image;
      width: 100%;
      img {
        width: 100%;
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
          </figure>
        </div>
      </div>
    </WeStyled>
  )
}

export default We
