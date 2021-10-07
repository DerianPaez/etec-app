import styled from 'styled-components'

const ProductStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: min-content;
  justify-content: stretch;
  gap: 20px;

  .product-card {
    width: 100%;
    height: auto;
  }

  .product-image {
    display: block;
    width: 100%;
    height: 100%;
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }  
}
`
const Product = ({ image, title, price }) => {
  return (
    <ProductStyled>
      <div className="product-card">
        <figure className="product-image">
          <img src={image} alt={title}/>
        </figure>
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
    </ProductStyled>
  )
}

export default Product
