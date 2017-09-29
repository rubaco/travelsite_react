import React, { Component } from 'react';
import './App.css';
import './App.css';

//components
import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import Cards from './components/cards/Cards';
import CountryTable from './components/countryTable/CountryTable';

//images
import aruba from './components/images/aruba_flag.svg';
import chile from './components/images/chile_flag.svg';
import italy from './components/images/italy_flag.svg';
import spain from './components/images/spain_flag.svg';

//labels



class App extends Component {
  render() {
    return (
      <div className="App">
   
        <Navigation/>
        <Hero></Hero>

        <Cards strURL={aruba} countryName="Aruba" tourismSite="http://www.arubatourism.com/"> </Cards>
        <Cards strURL={chile} countryName="Chile" tourismSite="http://chile.travel/en/"></Cards>
        <Cards strURL={italy} countryName="Italy" tourismSite="http://www.italia.it/en/home.html"></Cards>
        <Cards strURL={spain} countryName="Spain" tourismSite="http://www.spain.info/en_US/"></Cards>
     

        <table className="table panel-body">
        <tr>
            <th>Destination</th>
            <th>Capital</th>
            <th>Official Language</th>
            <th>Population</th>
            <th>National Bird</th>
        </tr>
        <CountryTable destination="Aruba" capital="Oranjestad" officialLanguage="Dutch" population="102,911" nationalBird="Eagle" />
        <CountryTable destination="Chile" capital="Santiago" officialLanguage="Madrid" population="17.62 million" nationalBird="Andean condor" />
        <CountryTable destination="Italy" capital="Rome" officialLanguage="Italian" population="59.83 million" nationalBird="Bluebirds" />
        <CountryTable destination="Spain" capital="Madrid" officialLanguage="Spanish" population="46.77 million" nationalBird="Eagle" />
        </table>

      

       
       

      

       
        

        
       




        
      </div>
    );
  }
}

export default App;
