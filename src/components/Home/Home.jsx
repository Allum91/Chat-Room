import React, {useContext } from 'react';
import { UserContext } from '../../App';
import NavBar from '../NavBar/NavBar';
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>


const Home = () => {


  const userContext = useContext(UserContext);

  return (
    <main>
      <NavBar />
      <h1> Welcome {userContext.user}</h1>
      <h3>To Do List</h3>
      {
        <form>
          <label>Add a new todo...</label><br/>
          <input type="text" name="add" />
        </form>
      }
      {
        <ul className='todo'>

        </ul>
      }
    </main>
  )
}

export default Home
