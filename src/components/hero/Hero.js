

import React, { Component } from 'react';
import './Hero.css';
import europe from '../images/europe.jpg';
import  indonesia from '../images/indonesia.jpg';
import  subway from '../images/subway.jpg';
import  philippines from '../images/philippines.jpg';



class Hero extends Component {
  render() {
    return (
      <div>

       
<div id="productCarousel" class="carousel slide center-block" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#productCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#productCarousel" data-slide-to="1"></li>
                        <li data-target="#productCarousel" data-slide-to="2"></li>
                        <li data-target="#productCarousel" data-slide-to="3"></li>
                    </ol>

                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <img src={europe}></img>
                        </div>
                        <div class="item">
                            <img src={indonesia}></img>
                        </div>
                        <div class="item">
                            <img src={subway}></img>
                        </div>
                        <div class="item">
                            <img src={philippines}></img>
                        </div>
                    
                    
                    </div>
                    <a class="left carousel-control" href="#productCarousel" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#productCarousel" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

        

      </div>
    );
  }
}

export default Hero;






