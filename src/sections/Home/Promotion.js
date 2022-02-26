import React from 'react'
import styled from 'styled-components'
import Promo from '../../components/Common/Promo'
import { promo } from '../../data/promo.data'
import { theme } from '../../theme'

const PromotionStyled = styled.section`
  padding: 0;
  margin-top: -100px;
  width: 100%;
  .promo-content {
    display: grid;
    grid-template-columns: 1fr;
    background-color: ${theme.colors.background};
    padding: 15px;
    gap: 15px;
    box-shadow: 0px -11px 24px 0px #0000004D;
    @media (min-width: 768px) {
      padding: 20px;
      gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1024px) {
    }
  }
`
const Promotion = () => {
  return (
    <PromotionStyled>
      <div className="wrapper">
        <div className="promo-content">
          {promo.map(i => {
            return (
              <Promo key={i.id} id={i.id} title={i.title} text={i.text} url={i.url} background={i.background} />
            )
          })}
        </div>
      </div>
    </PromotionStyled>
  )
}

export default Promotion
