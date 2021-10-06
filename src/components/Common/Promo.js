import styled from 'styled-components'

const PromoStyled = styled.div`
  
`
const Promo = ({ title, text }) => {
  return (
    <PromoStyled>
      <h2>{title}</h2>
      <p>{text}</p>
    </PromoStyled>
  )
}

export default Promo
