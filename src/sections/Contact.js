import styled from 'styled-components'
import Button from '../components/Common/Button'

const ContactStyled = styled.section`
  padding-top: 60px;
  input, textarea {
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
    width: 100%;
    padding: 10px 5px;
    resize: none;
    outline: none;
    /* border-radius: 5px; */
  }

  .form {
    display: grid;
    gap: 20px;
  }

  .name-cell-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .form-btn {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
`
const Contact = () => {
  return (
    <ContactStyled id="contacto-id">
      <div className="wrapper">
        <div className="contact-content">
          <h2>Contáctanos</h2>
            <form className="form">
              <div className="name-cell-container">
                <input type="text" name="Nombre" placeholder="Nombre"required/>
                <input type="tel" name="Celular" placeholder="Celular" required/>
              </div>
              <input className="botton-1" type="email" name="Email" placeholder="Email"/>
              <textarea className="bottom-2" rows="3" name="Mensaje" placeholder="Mensaje" required></textarea>
              <div className="form-btn">
                <Button>Enviar</Button>
                <Button className="btn-reset">Reset</Button>
              </div>
            </form>
        </div>
      </div>
    </ContactStyled>
  )
}

export default Contact
