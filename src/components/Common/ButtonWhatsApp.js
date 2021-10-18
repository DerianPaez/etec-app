import React from 'react'
import styled from 'styled-components'
import whatsapp from '../../static/icons/whatsapp.svg'

const ButtonWhatsAppStyled = styled.button`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 10px;
  width: min-content;
  background-color: #25D366;
  outline: none;
  border: none;
  cursor: pointer;
  color: #ffffff;
  padding: 8px 20px;
  border-radius: 30px;
  font-weight: 500;
  min-width: 250px;
  text-align: left;
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`
const ButtonWhatsApp = ({ product }) => {
  product.discount = 10
  const message = `Hola, estoy interesado en el siguiente producto
  *${product && product.name}*
  Precio: $ ${product && product.price} ~$ ${product && product.discount}~
  Categoría: ${product && product.category}
  Imagen: ${product && product.image}
  Código: ${product && product.id}`
  const url = `https://wa.me/5930962852852?text=${encodeURI(message)}`
  const handleClick = () => {
    window.open(url, '_blank');
  }
  return (
    <ButtonWhatsAppStyled type="button" onClick={handleClick}>
      <img src={whatsapp} alt="whatsapp icon" /> Reservar por WhatsApp
    </ButtonWhatsAppStyled>
  )
}

export default ButtonWhatsApp
