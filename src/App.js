import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div className='index'>
      <h1>Welcome to the User Screen</h1>
      <Router>
         <Link to='/signup'><button type="button">SignUp</button></Link>
         <Link to='/'><button type="button">Login</button></Link>
         <Routes>
            <Route exact path='/'element={<Login/>}></Route>
            <Route exact path='/signup'element={<Signup/>}></Route>
         </Routes>
      </Router>
    </div>
    
  );
}

export default App;
