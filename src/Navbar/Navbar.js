import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./NavbarStyles.css";

function Navbar(){
    const faculties2 = ["ФИНКИ", "ФЕИТ", "Машински", "Медицина", "Економски", "Филолошки"]

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/login`; 
        navigate(path);
    }

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand mb-0 h1" href="#">Мој Распоред</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Факултет
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        {faculties2.map((value, index) => {
                            return <li key={index}><a className="dropdown-item" href="#">{value}</a></li>
                        })}
                            {/* <li><a className="dropdown-item" href="#">ФИНКИ</a></li>
                            <li><a className="dropdown-item" href="#">Машински факултет</a></li>
                            <li><a className="dropdown-item" href="#">ФЕИТ</a></li> */}
                        </ul>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/about'>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='d-flex'>
                <span style={{color: 'white'}}>Најавен како: Админ</span>
                <button onClick={routeChange} className='btn btn-sm'>Одјави се</button>
            </div>
        </nav>            
        </div>
    )
}

export default Navbar;