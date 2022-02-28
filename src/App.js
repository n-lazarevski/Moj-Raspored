import React, {Component, useState} from 'react';
import { Routes, Route, Link, Redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './App.css';
import Calendar from "./calendar/Calendar";


class App extends Component {
  render() {
    return (
        <>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="schedule" render={(props) => <Calendar {...props}/>} element={<Calendar />} />
          </Routes>
        </>
    );
  }
}

function Login() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/schedule`; 
    navigate(path, { state: { email: email } });
  }

  function handleSubmit() {
    if(email != '')
      routeChange()
    return;
  }

  const [email, setEmail] = useState('')

  return (    
    <div id='bd' className="text-center">    
      <main className="form-signin">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input type="email" onChange={event => setEmail(event.target.value)} className="form-control" id="floatingInput" placeholder="Username" required/>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button onClick={handleSubmit} className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">©Titanic III</p>
        </form>
      </main> 
    </div>
  );
}

export default App;