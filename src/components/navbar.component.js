import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    render (){
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <Link className="navbar-brand" to="/">MERN App</Link>
                    </div>
                    <ul className="navbar-nav">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/create" className="nav-link">Create User</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }


}