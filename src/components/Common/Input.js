import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

const InputStyled = styled.label`
  width: 100%;
  display: grid;
  gap: 4.5px;
  font-weight: 600;
  color: #9C9C9C;

  .inputText {
    width: 100%;
    padding: 10.5px 0;
    border-bottom: 1px solid ${theme.colors.stroke};
  }
  &.labelError {
    color: ${theme.colors.accent};
  }
  .inputError {
    border: 1px solid ${theme.colors.accent};
  }
`

const Input = ({ id, className, label, error, touched, ...rest }) => {
  return (
    <InputStyled
      className={`${className} ${touched && error && 'labelError'}`}
      htmlFor={id}>
      {label} {error && touched && `- ${error}`}
      <input
        id={id}
        className={`inputText ${touched && error && 'inputError'}`}
        {...rest} />
    </InputStyled>
  )
}

export default Input
