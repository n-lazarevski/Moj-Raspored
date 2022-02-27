import React, {Component} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './App.css';
import Calendar from "./calendar/Calendar";


class App extends Component {
  render() {
    return (
        <>
          <Routes>
            <Route path="/" element={<Calendar />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </>
    );
  }
}

function About() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>      
    </>
  );
}

function Login() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  return (    
    <div id='bd' className="text-center">    
      <main className="form-signin">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button onClick={routeChange} className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">©Titanic III</p>
        </form>
      </main> 
    </div>
  );
}

export default App;