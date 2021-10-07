import styled from 'styled-components'

const PromoStyled = styled.div`
  .promo-container{
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    padding: 30px 10px;
    border-radius: 2px;
  }
`
const Promo = ({ background, title, text }) => {
  return (
    <PromoStyled >
      <div className="promo-container" style={{backgroundImage: `url(${background})`}}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </PromoStyled>
  )
}

export default Promo
