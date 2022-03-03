import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

const TextareaStyled = styled.div`
  display: grid;
  gap: 4.5px;
  font-weight: 600;
  color: #9C9C9C;

  .textarea {
    resize: none;
    padding: 10.5px 0;
    border: none;
    border-bottom: 1px solid ${theme.colors.stroke};
    outline: none;
    height: 44px;
  }
  &.labelError {
    color: ${theme.colors.accent};
  }
  .textareaError {
    border-bottom: 1px solid ${theme.colors.accent};
  }
`

const Textarea = ({ label, className, error, touched, ...rest }) => {
  return (
    <TextareaStyled
      className={`${className} ${error && touched && 'labelError'}`}
      htmlFor={label}>
      {label} {error && touched && `- ${error}`}
      <textarea
        className={`textarea ${error && touched && 'textareaError'}`}
        {...rest}>
      </textarea>
    </TextareaStyled>
  )
}

export default Textarea
