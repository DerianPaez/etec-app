import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { theme } from '../../theme'

const FooterStyled = styled.footer`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.textWithBackground};

  .footer-content{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    gap: 20px;
    padding: 50px 0;
    text-align: center;

    h4 {
      margin-bottom: 10px;
    }

    .footer-content-main {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (min-width: 630px) {
      grid-template-columns: repeat(4, 1fr);
    }
    
    .social-media {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 5px;
      figure {
        width: 26px;
        height: 25px;
      }
    }
  }

  .footer-rights {
    background-color: var(--main-color);
    text-align: center;
    border-top: 1px solid #fff;
    padding: 10px 0;
    p {
      font-size: .8em;
    }
  }
`

const Footer = () => {
  return (
    <FooterStyled>
      <div className="wrapper">
        <div className="footer-content">
          <div className="footer-content-main">
            <Logo/>
            <ul className="menu">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/productos">Productos</Link></li>
            </ul>
          </div>
          <div>
            <h4>Horario de atención</h4>
            <p>Atencion al cliente<br/>
              Lunes a Sabados<br/>
              8:00 AM a 6:00 PM</p>
          </div>
          <div className="social-media">
            <h4>Redes sociales</h4>
            <Link to="">Facebook</Link>
            <Link to="">Instragram</Link>
            <Link to="">WhatsApp</Link>
          </div>
          <div className="footer-contact">
            <h4>Contacto</h4>
            <p>soporte-etec@etec.com</p>
            <p>+593 99 1969 410</p>
            <p>+593 99 1969 410</p>
          </div>
        </div>
      </div>
      <div className="footer-rights">
        <p>© 2021 Copyright ETEC All rights reserved</p>
      </div>
    </FooterStyled>
  )
}

export default Footer
