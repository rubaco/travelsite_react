

import React, { Component } from 'react';
import './CountryTable.css';



import { render } from 'react-dom';



class CountryTable extends Component {

  


  render() {
    return (
  
      
        <tr>
            <td>{this.props.destination}</td>
            <td>{this.props.capital}</td>
            <td>{this.props.officialLanguage}</td>
            <td>{this.props.population}</td>
            <td>{this.props.nationalBird}</td>
        </tr>
    
        
  
    
    );
  }
}

export default CountryTable;