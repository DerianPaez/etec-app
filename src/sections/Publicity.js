import styled from 'styled-components'

const PublicityStyled = styled.div`
  /*  */
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
