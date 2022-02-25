import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

const ButtonStyled = styled.button`
  width: min-content;
  background-color: ${theme.colors.primaryRed};
  outline: none;
  border: none;
  cursor: pointer;
  color: #ffffff;
  padding: 8px 20px;
  border-radius: 30px;
  font-weight: 500;
  transition: all .3s ease;

  :hover {
    background-color: #000;
  }
`
const Button = ({ children, type, action }) => {
  const handleClick = () => {
    if (action) {
      action()
    }
  }
  return (
    <ButtonStyled type={type} onClick={handleClick}>
      {children}
    </ButtonStyled>
  )
}

export default Button
