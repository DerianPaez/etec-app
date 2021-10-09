import styled from 'styled-components'

const ButtonStyled = styled.button`
  background-color: var(--main-color);
  border-radius: 25px;
  outline: none;
  border: none;
  padding: 5px 15px;
  cursor: pointer;
  color: #ffffff;
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
