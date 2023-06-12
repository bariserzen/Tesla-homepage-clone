import React from 'react';
import './App.css';

import Header from './components/Header';
import Item from './components/Item';

import Accessoris from './assets/Desktop-Accessories.jpg';
import ModelS from './assets/Desktop-Model3.jpeg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';



const  App = () => {

  return (
    <div className="App">
      <Header/>

      <div className='app__itemsContainer'>
        <Item
         title='Lowest Cost Solar Panels'
         desc=''
         descLink=''
         backgroundImg={SolarPanels}
         leftBtnTxt='ORDER NOW'
         leftBntLink=''
         rightBtnTxt='LEARN MODE'
         rightBtnLink=''
         twoButtons='true'
         first
        />
        <Item
         title='Model S'
         desc='$69.420'
         descLink=''
         backgroundImg={ModelS}
         leftBtnTxt='CUSTOM ORDER'
         leftBntLink=''
         rightBtnTxt='LEARN MODE'
         rightBtnLink=''
         twoButtons='true'
         first
        />
        <Item
         title='Model 3'
         desc=''
         descLink=''
         backgroundImg={Model3}
         leftBtnTxt='CUSTOM ORDER'
         leftBntLink=''
         rightBtnTxt='LEARN MODE'
         rightBtnLink=''
         twoButtons='true'
         first
        />
        <Item
         title='Model X'
         desc=''
         descLink=''
         backgroundImg={ModelX}
         leftBtnTxt='CUSTOM ORDER'
         leftBntLink=''
         rightBtnTxt='LEARN MODE'
         rightBtnLink=''
         twoButtons='true'
         first
        />
        <Item
         title='Model Y'
         desc=''
         descLink=''
         backgroundImg={ModelY}
         leftBtnTxt='ORDER NOW'
         leftBntLink=''
         rightBtnTxt='LEARN MODE'
         rightBtnLink=''
         twoButtons='true'
         first
        />
        <Item
         title='Solar for New Roofs'
         desc=''
         descLink=''
         backgroundImg={SolarRoof}
         leftBtnTxt='ORDER NOW'
         leftBntLink=''
         rightBtnTxt='LEARN MODE'
         rightBtnLink=''
         twoButtons='true'
         first
        />
        <Item
         title='Accessoris'
         desc=''
         descLink=''
         backgroundImg={Accessoris}
         leftBtnTxt='SHOP NOW'
         leftBntLink=''
         rightBtnTxt='LEARN MODE'
         rightBtnLink=''
        />
      </div>


    </div>
  );
}

export default App;
