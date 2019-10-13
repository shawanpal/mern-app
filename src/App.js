import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import UserList from './components/user-list.component'
import EditUser from './components/edit-user.component'
import CreateUser from './components/create-user.component'

function App() {
  return (
    <Router>
      <Navbar>
        <Router path="/" exact component="{ UserList }" />
        <Router path="/edit/:id" component="{EditUser}" />
        <Router path="/create" component="{CreateUser}" />
      </Navbar>
    </Router>
  );
}

export default App;
