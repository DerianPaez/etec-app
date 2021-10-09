import styled from 'styled-components'
import Product from '../Common/Product'
import champu from '../../static/images/champu.jpg'

const FeaturedProductListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: min-content;
  justify-content: stretch;
  gap: 20px;
`
const FeaturedProductList = () => {
  return (
    <FeaturedProductListStyled>
      <Product image={champu} title="Pulidora de uñas Mercedes" price="29,99"/>
      <Product image={champu} title="Bandas de resistencia" price="22,99"/>
      <Product image={champu} title="Dopler fetal" price="37,99"/>
      <Product image={champu} title="Kit de sutura" price="24,99"/>
      <Product image={champu} title="Masajeadores corporales" price="34,99"/>
    </FeaturedProductListStyled>
  )
}

export default FeaturedProductList
