import styled from 'styled-components'

const ProductStyled = styled.div`
  display: grid;
  grid-template-rows: 300px 1fr;
  background: var(--box-color);
  overflow: hidden;
  height: 100%;
  cursor: pointer;
  .product-image {
    display: block;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .product-content {
    padding: 10px;
    h4 {
      line-height: 1.4rem;
    }
  }
`
const Product = ({ image, title, price }) => {
  return (
    <ProductStyled>
      <figure className="product-image">
        <img src={image} alt={title}/>
      </figure>
      <div className="product-content">
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
    </ProductStyled>
  )
}

export default Product
