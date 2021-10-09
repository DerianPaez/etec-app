import styled from 'styled-components'
import cream from '../static/images/cream.jpg'

const PublicityStyled = styled.div`
  .publicity-container {
    background-image: url(${cream});
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    padding: 30px 20px;
  }
`
const Publicity = () => {
  return (
    <PublicityStyled>
      <div className="wrapper">
        <div className="publicity-container">
          <h2>Envios a todo el Ecuador</h2>
          <p>35% de descuento las 10 primeras personas</p>
          <button>Comprar</button>
        </div>
      </div>
    </PublicityStyled>
  )
}

export default Publicity
