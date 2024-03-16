
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';

import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className="container " >
        

        <SearchBar></SearchBar>
        <CartButton></CartButton>
 
  
      </div>
    </header>
  );
};

export default Header;
