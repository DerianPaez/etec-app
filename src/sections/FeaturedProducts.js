import styled from 'styled-components'
import FeaturedProductList from '../components/Lists/FeaturedProductList'

const FeaturedProductsStyled = styled.section`
  /*  */
`
const FeaturedProducts = () => {
  return (
    <FeaturedProductsStyled>
      <div className="wrapper">
        <div className="featured-products-content">
          <h2>Productos Destacados</h2>
          <FeaturedProductList />
        </div>
      </div>
    </FeaturedProductsStyled>
  )
}

export default FeaturedProducts
