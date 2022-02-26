/* eslint-disable no-template-curly-in-string */
import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'
import Link from './Link'

const PromoStyled = styled.div`
  height: 180px;
  background-image: ${({ background }) => (background && `url(${background})`)};
  background-size: 40%;
  background-position: right;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  border-radius: 2px;
  color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.accent};

  h3 {
    margin-bottom: 3px;
  }

  p {
    margin-bottom: 15px;
  }

  a {
    border-bottom: 1px solid ${theme.colors.primary};
    :hover {
      color: ${theme.colors.accent};
      border-color: ${theme.colors.accent};
    }
  }

  @media (min-width: 768px) {
    padding: 20px;
    height: 200px;
  }

  @media (min-width: 1024px) {
    height: 220px;
  }
`
const Promo = ({ id, background, title, text, url }) => {
  return (
    <PromoStyled id={id} background={background}>
      <h3>{title}</h3>
      <p>{text}</p>
      <Link to={url}>Ver más</Link>
    </PromoStyled>
  )
}

export default Promo
