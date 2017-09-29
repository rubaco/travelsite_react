import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div>
<nav className="navbar navbar-default">
  <div className="container-fluid">

    <div className="navbar-header">

      <a className="navbar-brand" href="#">My Travel Site</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
       
      
    
      </ul>
   
  
      <ul id="nav-list" className="list-unstyled pull-right list-inline">

                    <li className="nav-link">
                        <a href="/home.html">Home</a>
                    </li>

                    <li className="nav-link">
                        <a href="/about.html">About</a>
                    </li>

                    <li className="nav-link">
                        <a href="/stuff.html">Stuff</a>
                    </li>

                    <li className="nav-link">
                        <a href="/contact.html">Contact</a>
                    </li>
                </ul>
    </div>
  </div>
</nav>
        
     
        
      </div>
    );
  }
}

export default Navigation;