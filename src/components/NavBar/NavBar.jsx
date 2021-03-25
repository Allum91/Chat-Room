import React, {useContext} from 'react';
import NavDropdown from '../navDropdown/NavDropdown';
import styles from '../NavBar/NavBar.module.scss';

const NavBar = () => {

  return (
    <nav>
      <h2>MyToDos!</h2>
      <NavDropdown />
    </nav>
  )
}

export default NavBar
