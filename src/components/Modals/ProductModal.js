import React, { useRef } from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import ButtonWhatsApp from '../Common/ButtonWhatsApp'

const ProductModalStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  .modal-container {
    position: relative;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 25px;
    cursor: default;
    overflow-y: scroll;
    /*  */
    width: 90%;
    height: 80%;
    max-width: 800px;
    max-height: 600px;
    .modal-icon-close {
      position: absolute;
      top: 15px;
      right: 15px;
    }
    .modal-product-image {
        border: 1px solid var(--gray-light-color);
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    .modal-product-content {
      display: grid;
      width: 100%;
      grid-gap: 20px;
      .modal-product-main {
        display: grid;
        grid-gap: 5px;
        h4 {
          font-weight: 800;
        }
        .product-price {
          font-size: 1.1em;
          font-weight: 800;
        }
      }
      .product-data {
        display: grid;
        grid-gap: 5px;
        font-size: 12.5px;
        color: #808080;
        .product-id span{
          font-size: 12px;
        }
        .product-category {
          text-transform: capitalize;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .modal-icon-close {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .modal-icon-close {
      display: block;
      cursor: pointer;
    }
    .modal-container {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 100%;
      overflow-y: visible;
    }
  }
  @media (min-width: 1024px) {
    .modal-container {
      padding: 40px;
    }
  }
`

const modalIconClose = (
  <svg width="25" height="25" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L26.8751 27M2.1249 27L27 2" stroke="black" strokeWidth="4" strokeLinecap="round"/>
  </svg>

)

const ModalContainer = document.getElementById('modal')

const ProductModal = ({ product, isModalOpen, closeModal }) => {
  const modalbackground = useRef(null)
  const handleModal = (e) => {
    if (modalbackground.current === e.target) {
      closeModal()
    }
  }
  if (isModalOpen) {
    return ReactDOM.createPortal(
      <ProductModalStyled ref={modalbackground} onClick={handleModal}>
        <div className="modal-container">
          <figure onClick={() => closeModal()} className="modal-icon-close">
            {modalIconClose}
          </figure>
          <figure className="modal-product-image">
            <img src={product && product.image} alt="Imagen" />
          </figure>

          <div className="modal-product-content">
            <div className="modal-product-main">
              <h4>{product && product.name}</h4>
              <div className="modal-product-price-container">
                <p className="product-price">$ {product && product.price}</p>
                {product && product.discount && <p className="product-discount">$ {product.discount}</p>}
              </div>
            </div>

            <div className="product-data">
              <p className="product-id">Codigo: <span>{product && product.id}</span></p>
              <p className="product-category">Categoría:  {product && product.category}</p>
              <p className="product-brand">Marca: {product && product.brand}</p>
              <p className="product-stock">Stock: {product && product.stock ? "✔" : "❌"}</p>
            </div>

            <ButtonWhatsApp product={product}/>
          </div>
        </div>
      </ProductModalStyled>,
      ModalContainer
    )
  }
  return null
}

export default ProductModal
