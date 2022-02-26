import React from 'react'
import { useState } from 'react'
import { theme } from '../../theme'
import styled from 'styled-components'
import SocialMedia from './SocialMedia'
import Logo from './Logo'
import Link from './Link'
import Icon from './Icon'
import headerFigure from '../../assets/images/headerFigure.png'
import { menu } from '../../data/menu.data'
import { NavLink } from 'react-router-dom'

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.secundary};
  width: 100%;
  position: fixed;
  z-index: 1000;
  overflow: hidden;
  box-shadow: 0px 4px 4px 0px #00000040;

  .figure {
    position: absolute;
    width: 90%;
    bottom: 0;
    height: 100%;
    background-image: url(${headerFigure});
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
    z-index: ${theme.position.headerFigure};
  }

  .menu-nav {
    background-color: ${theme.colors.accent};
    position: fixed;
    width: 100%;
    height: 100vh;
    top: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '-100vh')};
    bottom: 0;
    right: 0;
    left: 0;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-rows: 1fr;
    transition: .3s;
    transition-property: top;
    z-index: ${theme.position.menuMobile};
  }

  .menu-close {
    position: absolute;
    top: 15px;
    right: 5%;
    width: min-content;
    height: min-content;
  }

  .menu {
    color: ${theme.colors.secundary};
    display: grid;
    gap: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    a {
      font-weight: 600;
      text-transform: uppercase;
      transition: .3s;
      transition-property: text-shadow;
      :hover {
        text-shadow: 0px 0px 3px #fff;
      }
    }
  }

  .link__active {
    transform: scale(1.5);
  }

  .social-media-nav {
    width: 100%;
    display: flex;
    justify-content: center;
    align-self: center;
    margin-bottom: 10px;
    gap: 5px;
    figure {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      a {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media (min-width: 425px) {
    .figure {
      width: 65%;
    }
  }

  @media (min-width: 768px) {
    gap: 20px;

    .figure {
      width: 45%;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr max-content max-content;
    gap: 70px;

    .social-media-nav {
      justify-content: flex-end;
    }

    .menu-open, .menu-close {
      display: none;
    }

    .menu-nav {
      top: 0;
      position: static;
      height: auto;
      background: none;
      z-index: ${theme.position.menu};
    }

    .menu {
      grid-auto-flow: column;
    }

    .social-media-nav {
      display: none;
    }

    .figure {
      width: 35%;
    }
  }

  @media (min-width: 1240px) {
    gap: 100px;
    .menu {
      gap: 40px;
    }
  }
`

const Header = () => {
  const [state, setState] = useState(false)
  const handleMenuOpen = () => {
    setState(true)
  }
  const handleMenuClose = () => {
    setState(false)
  }

  return (
    <HeaderStyled isMenuOpen={state}>
      <Logo/>

      <div className="figure"></div>

      <button onClick={handleMenuOpen} className="menu-open">
        <Icon icon="menu" width="25" height="25" color="white"/>
      </button>

      <nav className="menu-nav">
        <button onClick={handleMenuClose} className="menu-close">
          <Icon icon="menuClose" width="25" height="25" color="white"/>
        </button>

        <ul className="menu">
          {menu.map((i) => {
            return (
              <li key={i.id}><NavLink to={i.path} onClick={handleMenuClose} className={({ isActive }) => isActive ? "link__active" : ""}>{i.title}</NavLink></li>
            )
          })}
        </ul>

        <div className="social-media-nav">
          <figure>
            <Link to="">
              <Icon icon="facebook" width="20" height="20" color="white"/>
            </Link>
          </figure>
          <figure>
            <Link to="">
              <Icon icon="instagram" width="20" height="20" color="white"/>
            </Link>
          </figure>
          <figure>
            <Link to="">
              <Icon icon="whatsapp" width="20" height="20" color="white"/>
            </Link>
          </figure>
        </div>
      </nav>

      <SocialMedia/>
    </HeaderStyled>
  )
}

export default Header
