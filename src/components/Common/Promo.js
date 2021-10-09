/* eslint-disable no-template-curly-in-string */
import styled from 'styled-components'

const PromoStyled = styled.div`
  height: 130px;
  background-image: ${({ background }) => (background && `url(${background})`)};
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  border-radius: 2px;
  color: #ffffff;
  @media (min-width: 768px) {
    height: 160px;
  }
  @media (min-width: 1024px) {
    height: 180px;
  }
`
const Promo = ({ background, title, text }) => {
  return (
    <PromoStyled background={background}>
      <h3>{title}</h3>
      <p>{text}</p>
    </PromoStyled>
  )
}

export default Promo
