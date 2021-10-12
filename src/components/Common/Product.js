import styled from 'styled-components'

const ProductStyled = styled.div`
  display: grid;
  grid-template-rows: 300px 1fr;
  background: var(--box-color);
  overflow: hidden;
  height: 100%;
  cursor: pointer;
  transition: .3s;
  &:hover {
    transform: scale(1.1);
  }
  .product-image {
    border: 1px solid var(--gray-light-color);
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
      font-size: 14px;
      line-height: 1.4rem;
    }
  }
  .discount {
    text-decoration: line-through;
  }
`
const Product = ({ id, image, name, price, stock, category, brand, discount }) => {
  return (
    <ProductStyled>
      <figure className="product-image">
        <img loading="lazy" src={image} alt={name}/>
      </figure>
      <div className="product-content">
        <h4>{name}</h4>
        {discount && <p className="discount">$ {discount}</p>}
        <p>$ {price}</p>
      </div>
    </ProductStyled>
  )
}

export default Product
