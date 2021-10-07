import styled from 'styled-components'

const ButtonStyled = styled.div`
  background-color: var(--main-color);
  border-radius: 5px;
  padding: 5px, 10px;
  cursor: pointer;
  width: 50px;
`
const Button = (btnText) => {
  return (
    <ButtonStyled>
      {btnText}
    </ButtonStyled>
  )
}

export default Button
