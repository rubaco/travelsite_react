

import React, { Component } from 'react';
import './Cards.css';



import { render } from 'react-dom';



class Cards extends Component {

  


  render() {
    return (
       <div >
       
       <div class="col-sm-2">
        <img className="img-responsive thumbnail" src={this.props.strURL} alt="the image" ></img>
        <h2>{this.props.countryName}</h2>
        <h3>{this.props.tourismSite}</h3>
     
   
        </div>
        </div>
        
    
    );
  }
}

export default Cards;