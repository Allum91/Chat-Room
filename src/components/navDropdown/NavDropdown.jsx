import React, { useContext } from 'react';
import { auth } from '../../firebase';
import {useHistory } from 'react-router-dom';


const NavDropdown = () => {
  let history = useHistory();

  const handleClick = ('click', e => {
    e.preventDefault();
    auth.signOut();
    history.push('/');
  })



  return (
    <div>
      <button onClick={handleClick}>Sign Out</button>
    </div>
  )
}

export default NavDropdown
