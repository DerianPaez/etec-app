import { useState } from 'react'
import styled from 'styled-components'
import Link from '../../components/Common/Link'
import open from '../../static/icons/menu-point.svg'
import close from '../../static/icons/close.svg'

const MenuCategoryStyled = styled.div`
  width: min-content;
  .menu-category-open {
    display: grid;
    justify-content: center;
    align-items: center;
    width: min-content;
    cursor: pointer;
    img {
      width: 22px;
      height: 22px;
    }
  }
  .menu-category {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    background: var(--main-color);
    position: fixed;
    width: 280px;
    top: 52px;
    left: 0;
    bottom: 0;
    padding: 15px;
    color: var(--secundary-color);
    .menu-category-header {
      display: grid;
      grid-template-columns: repeat(2, min-content);
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      .menu-category-title {
        font-size: 1.2em;
      }
      .menu-category-close {
        display: grid;
        justify-content: center;
        align-items: center;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
    hr {
      margin-bottom: 15px;
    }
    ul {
      display: grid;
      grid-gap: 5px;
    }
  }

  @media (min-width: 800px) {
    .menu-category-open {
      display: none;
    }
    .menu-category {
      display: block;
      border: 1px solid var(--gray-light-color);
      position: sticky;
      top: 72px;
      bottom: 0;
      background: var(--secundary-color);
      color: var(--main-color);
    }
  }
`
const MenuCategory = ({ className }) => {
  const [isOpen, setIsOpen] = useState()
  const handleMenuOpen = () => {
    setIsOpen(!isOpen)
  }
  const handleMenuClose = () => {
    setIsOpen(false)
  }
  return (
    <MenuCategoryStyled isOpen={isOpen} className={className}>
      <figure onClick={handleMenuOpen} className="menu-category-open">
        <img src={open} alt="Menu Icon Open" />
      </figure>
      <div className="menu-category">
        <div className="menu-category-header">
          <p className="menu-category-title">Categorias</p>
          <figure onClick={handleMenuClose} className="menu-category-close">
            <img src={close} alt="Menu Icon Close" />
          </figure>
        </div>
        <hr />
        <ul>
          <li>
            <Link to="">Electrodomesticos</Link>
          </li>
          <li>
            <Link to="">Juguetes</Link>
          </li>
          <li>
            <Link to="">Construcción</Link>
          </li>
          <li>
            <Link to="">Tecnología</Link>
          </li>
          <li>
            <Link to="">Automotriz</Link>
          </li>
          <li>
            <Link to="">Herramientas</Link>
          </li>
        </ul>
      </div>
    </MenuCategoryStyled>
  )
}

export default MenuCategory
