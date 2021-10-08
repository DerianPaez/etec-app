import styled from 'styled-components'
import banner from '../static/images/banner.jpg'

const BannerStyled = styled.section`
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 80vh;
  display: grid;
  align-items: center;
`
const Banner = () => {
  return (
    <BannerStyled>
      <div className="wrapper">
        <div className="banner-content">
          <h1>Descubre nuestra colección</h1>
          <p>Estamos ofreciendo un 20% de descuento</p>
          <button>Contácto</button>
        </div>
      </div>
    </BannerStyled>
  )
}

export default Banner
