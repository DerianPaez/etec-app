import styled from 'styled-components'
import Promo from '../../components/Common/Promo'
import Product from '../../components/Common/Product'
import champu from '../../static/images/champu.jpg'

const HomeStyled = styled.div`
  /*  */
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
            <Promo title="Nuevos productos" text="35% de descuento en dishes"/>
            <Promo title="Mira nuestra colección" text="Obten hasta un 50% de descuento"/>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <div className="wrapper">
        <h3>Productos Destacados</h3>
          <Product image={champu} title="Pulidora de uñas Mercedes" price="29,99"/>
          <Product image={champu} title="Bandas de resistencia" price="22,99"/>
          <Product image={champu} title="Dopler fetal" price="37,99"/>
          <Product image={champu} title="Kit de sutura" price="24,99"/>
          <Product image={champu} title="Masajeadores corporales" price="34,99"/>
        </div>
      </section>

      <section className="advertising">
        <div className="wrapper">
          <div className="advertisingContent">
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
