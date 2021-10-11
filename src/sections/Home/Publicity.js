import styled from 'styled-components'
import Button from '../components/Common/Button'
import watch from '../static/images/watch.jpg'

const PublicityStyled = styled.section`
  .publicity-container {
    background-image: url(${watch});
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    padding: 60px 20px;
    color: #ffffff;
    p {
      margin-bottom: 5px;
    }
  }
`
const Publicity = () => {
  return (
    <PublicityStyled>
      <div className="wrapper">
        <div className="publicity-container">
          <h2>Envios a todo el Ecuador</h2>
          <p>35% de descuento las 10 primeras personas</p>
          <Button>Comprar</Button>
        </div>
      </div>
    </PublicityStyled>
  )
}

export default Publicity
