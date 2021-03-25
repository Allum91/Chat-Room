import React, {useContext} from 'react';
import { auth } from '../../firebase';
import { UserContext } from '../../App';
import styles from '../Login/Login.module.scss';
import { useHistory, Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const Login = () => {

  const userContext = useContext(UserContext);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    auth.signInWithEmailAndPassword(email, password).then(response => {
      userContext.setUser(response.user.email);
      alert('Welcome '+ email);
      history.push('/home');
    }).catch(e => {
      alert('Sorry something went wrong');
    });
  }
  const googleSignIn = ('click', e => {
  const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToke;
      var user = result.user;
      history.push('/home');
    })
  });
  
  

  return (
    <section>
      <h1>Welcome to MyToDo!</h1>
      <h3>Please sign in to continue</h3>
      <form onSubmit={handleSubmit}>
        <label> Email: </label>
        <input />
        <label> Password: </label>
        <input /><br />
        <button>Login</button>
      </form>
      <button className={styles.google} onClick={googleSignIn}>Google Sign In</button>
      <h5>New User? Register <Link to='/register'>here!</Link></h5>
    </section>
  )
}

export default Login
