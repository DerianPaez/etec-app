import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Link from './Link'
import { theme } from '../../theme'
import { menu } from '../../data/menu.data'
import ContactInfoItem from './ContactInfoItem'

const FooterStyled = styled.footer`
  border-top: 1px solid ${theme.colors.stroke};

  .footer-content {
    display: grid;
    grid-template-areas:
      "logo"
      "left"
      "right";
    justify-content: center;
    align-items: center;
    padding: 15px 0;

    .footer-logo {
      justify-self: center;
      grid-area: logo;
    }

    .left-info {
      grid-area: left;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .left-info, .right-info {
      display: grid;
      gap: 10px;
    }

    .right-info {
      grid-area: right;
      display: grid;
      gap: 10px;
    }

    @media (min-width: 768px) {
      grid-template-areas:
        "logo logo logo"
        "left . right";
      justify-content: initial;
      .item-right {
        flex-direction: row-reverse;
      }
    }

    @media (min-width: 1024px) {
      grid-template-areas:
        "left logo right";
    }
  }

  .footer-links {
    display: grid;
    grid-template-areas:
        "menu"
        "rights"
        "legal";
    justify-content: center;
    background-color: ${theme.colors.accent};
    padding: 25px 0;

    .menu {
      display: grid;
      justify-content: center;
      align-items: center;
      gap: 15px;
      text-align: center;
      margin-bottom: 25px;
      grid-area: menu;

      li a {
        font-size: .9em;
        font-weight: 1000;
        text-transform: uppercase;
        color: ${theme.colors.secundary};
        letter-spacing: 0.05em;
      }

      @media (min-width: 768px) {
        grid-auto-flow: column;
        gap: 20px;
        margin-bottom: 10px;
      }

      @media (min-width: 1240px) {
        margin-bottom: 0;
      }
    }

    .rights {
      align-self: center;
      text-align: center;
      color: ${theme.colors.secundary};
      font-size: 0.7em;
      grid-area: rights;

      @media (min-width: 1024px) {
        br {
          display: none;
        }
      }
    }

    .legal {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;
      color: ${theme.colors.secundary};
      gap: 5px;
      text-align: center;
      grid-area: legal;

      p {
        font-size: 0.7em;
      }
      a {
        font-size: 0.7em;
        width: 100%;
      }

      @media (min-width: 375px) {
        grid-template-columns: repeat(3, max-content);
      }
    }

    @media (min-width: 1240px) {
      padding: 25px 5%;
      grid-template-columns: max-content 1fr max-content;
      grid-template-areas:
        "rights menu legal";
      justify-content: space-between;
    }
  }
`

const Footer = () => {
  return (
    <FooterStyled>
      <div className="wrapper">
        <div className="footer-content">
          <Logo className="footer-logo"/>
          <div className="left-info">
            <ContactInfoItem className="item-left" icon="location" text="Urdenor 2, Mz 225, Sl 13"/>
            <ContactInfoItem className="item-left" icon="phone" text="+593 99 9999 999"/>
          </div>
          <div className="right-info">
            <ContactInfoItem className="item-right" icon="mail" text="etecstore@hotmail.com"/>
            <ContactInfoItem className="item-right" icon="clock" text="Atención desde 09:00 - 18:00"/>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <ul className="menu">
          {menu.map(i => {
            return (
              <li key={i.id}><Link to={i.path}>{i.title}</Link></li>
            )
          })}
        </ul>
        <p className="rights">© 2022 ETEC <br /> Todos los derechos reservados</p>
        <div className="legal">
          <Link to="/terminos">Términos y condiciones</Link>
          <p>|</p>
          <Link to="/politica">Políticas de privacidad</Link>
        </div>
      </div>
    </FooterStyled>
  )
}

export default Footer
