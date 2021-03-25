import React from 'react';
import { auth } from '../../firebase';
import styles from '../Register/Register.module.scss';
import { useHistory, Link } from 'react-router-dom';

const Register = () => {
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    auth.createUserWithEmailAndPassword(email, password).then(response => {
      alert('thank you for registering ' + email);
      history.push('/login');
    }).catch(e => {
      alert('Sorry, something went wrong')
    })
  }


  return (
    <div className='register'>
      <h1>New User</h1>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input type='email' placeholder='...'/><br/>
        <label>Password: </label>
        <input placeholder='...'/><br/>
        <button type='submit'>Register</button>
      </form>
      <h4>Click <Link to='/'>Go Back</Link></h4>
    </div>
  )
}

export default Register
