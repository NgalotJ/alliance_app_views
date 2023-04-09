import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Status } from './Status';
import { BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h3 className='d-flex justify-content-center m-3'>
          ALLIANCE APP
        </h3>

        <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
          <ul className='navbar-nav'>
            <li className='nav-item m-1'>
              <NavLink className='btn btn-light btn-outline-primary' to='/login'>
                Login
              </NavLink>
            </li>
            <li className='nav-item m-1'>
              <NavLink className='btn btn-light btn-outline-primary' to='/status'>
                Status
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/status' element={<Status/>} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
