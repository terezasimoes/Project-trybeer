import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useOnClickOutside from '../../hooks';
import Burger from '../Burger';
import StyledMenu from './style';
import './index.css';

const Menu = ({ nomeTela }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <header className="header" ref={ node }>
      <Burger open={ open } setOpen={ setOpen } />
      <StyledMenu open={ open } className="nav-bar side-menu-container">
        <Link to="/products" className="nav-link" data-testid="side-menu-item-products">
          Produtos
        </Link>
        <Link to="/orders" className="nav-link" data-testid="side-menu-item-my-orders">
          Meus pedidos
        </Link>
        <Link to="/profile" className="nav-link" data-testid="side-menu-item-my-profile">
          Meu Perfil
        </Link>
        <Link to="/login" className="nav-link" data-testid="side-menu-item-logout">
          Sair
        </Link>
      </StyledMenu>
      <h1 className="top-title" data-testid="top-title">
        { nomeTela }
      </h1>
    </header>
  );
};

Menu.propTypes = {
  nomeTela: PropTypes.string.isRequired,
};

export default Menu;