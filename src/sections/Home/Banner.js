import styled from 'styled-components'
import Button from '../../components/Common/Button'
import banner from '../static/images/banner.jpg'

const BannerStyled = styled.section`
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 80vh;
  display: grid;
  align-items: center;
  .banner-content {
    p {
      margin-bottom: 10px;
    }
    @media (min-width: 768px) {
      h1 {
        font-size: 2.4em;
      }
    }
  }

`
const Banner = () => {
  return (
    <BannerStyled>
      <div className="wrapper">
        <div className="banner-content">
          <h1>Descubre nuestra colección</h1>
          <p>Estamos ofreciendo un 20% de descuento</p>
          <Button>Contácto</Button>
        </div>
      </div>
    </BannerStyled>
  )
}

export default Banner
