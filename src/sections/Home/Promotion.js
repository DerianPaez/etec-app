import styled from 'styled-components'
import Promo from '../components/Common/Promo'
import discount from '../static/images/discount.jpg'
import discount2 from '../static/images/discount2.jpg'

const PromotionStyled = styled.section`
  padding: 0;
  margin-top: -50px;
  width: 100%;
  .promo-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    background-color: var(--secundary-color);
    padding: 15px;
    gap: 15px;
    /* box-shadow: 0px 5px 7px 4px #00000066; */
    box-shadow: 0px 3px 20px 2px #00000066;
    @media (min-width: 768px) {
      padding: 20px;
      gap: 20px;
    }
  }
`
const Promotion = () => {
  return (
    <PromotionStyled>
      <div className="wrapper">
        <div className="promo-content">
          <Promo background={discount} title="Nuevos productos" text="35% de descuento en dishes"/>
          <Promo background={discount2} title="Nueva colección" text="Obten hasta un 50% de descuento"/>
        </div>
      </div>
    </PromotionStyled>
  )
}

export default Promotion
