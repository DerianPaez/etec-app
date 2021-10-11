import styled from 'styled-components'
import ChooseUsElement from '../../components/Common/ChooseUsElement'

const ChooseUsStyled = styled.section`
  .choose-us-container {
    display: grid;
    gap: 20px;
  }

  @media (min-width: 768px) {
    .choose-us-container {
      grid-template-columns: repeat(3, 1fr);
      gap: 5%;
    }
  }
`
const ChooseUs = () => {
  return (
    <ChooseUsStyled>
      <div className="wrapper">
        <h2>¿Por qué elegirnos?</h2>
        <div className="choose-us-container">
          <ChooseUsElement title="Entrega rapida" text="Somos una empresa de servicios estratégicos comerciales dedicada a optimizar la calidad de vida de nuestros clientes. "/>
          <ChooseUsElement title="Entrega rapida" text="Somos una empresa de servicios estratégicos comerciales dedicada a optimizar la calidad de vida de nuestros clientes. "/>
          <ChooseUsElement title="Entrega rapida" text="Somos una empresa de servicios estratégicos comerciales dedicada a optimizar la calidad de vida de nuestros clientes. "/>
        </div>
      </div>
    </ChooseUsStyled>
  )
}

export default ChooseUs
