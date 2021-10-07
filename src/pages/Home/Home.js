import styled from 'styled-components'
import Promo from '../../components/Common/Promo'
import Product from '../../components/Common/Product'
import Button from '../../components/Common/Button'
import champu from '../../static/images/champu.jpg'
import banner from '../../static/images/banner.jpg'
import discount from '../../static/images/discount.jpg'
import discount2 from '../../static/images/discount2.jpg'

const HomeStyled = styled.div`
  .banner {
    background-image: url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    height: 80vh;
    display: grid;
    align-items: center;
    z-index: -1;
  }

  .promotion {
    /* position: absolute;
    bottom: 25px; */
    margin-top: -50px;
    width: 100%;
  }
  
  .promo-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    background-color: var(--secundary-color);
    padding: 20px;
    gap: 20px;
    box-shadow: 0px 5px 7px 4px #00000066;
  }
`
const Home = () => {
  return (
    <HomeStyled>
      <section className="banner">
        <div className="wrapper">
          <div className="banner-content">
            <h1>Descubre nuestra colección</h1>
            <p>Estamos ofreciendo un 20% de descuento</p>
            <button>Contácto</button>
          </div>
        </div>
      </section>

      <section className="promotion">
        <div className="wrapper">
          <div className="promo-content">
            <Promo background={discount} title="Nuevos productos" text="35% de descuento en dishes"/>
            <Promo background={discount2} title="Mira nuestra colección" text="Obten hasta un 50% de descuento"/>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <div className="wrapper">
        <div className="featured-products-content">
          <h3>Productos Destacados</h3>
            <Product image={champu} title="Pulidora de uñas Mercedes" price="29,99"/>
            <Product image={champu} title="Bandas de resistencia" price="22,99"/>
            <Product image={champu} title="Dopler fetal" price="37,99"/>
            <Product image={champu} title="Kit de sutura" price="24,99"/>
            <Product image={champu} title="Masajeadores corporales" price="34,99"/>
          </div>
        </div>
      </section>

      <section className="publicity">
        <div className="wrapper">
          <div className="publicity-content">
            <h2>Envios a todo el Ecuador</h2>
            <p>35% de descuento las 10 primeras personas</p>
            <button>Comprar</button>
          </div>
        </div>
      </section>
    </HomeStyled>
  )
}

export default Home
