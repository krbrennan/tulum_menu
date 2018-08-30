import React from 'react';
import './burrito.css'

const BurritoMenu = () => {


  return(
    <div className='burrito-menu'>
      <div className='burrito-title'>

        <div className='the-word-burritos'>
          <h2>Burritos</h2>
        </div>

        <div className='burrito-description'>
          <h3>Choice of:</h3>
            <div className='burrito-description-ul'>
              <div className='choice-of'>~Beef OR~</div>
              <div className='choice-of'>~Pork OR~</div>
              <div className='choice-of'>~Chicken OR~</div>
              <div className='choice-of'>~Grilled Veggies~</div>
            </div>
        </div>

      </div>
      <div className='comes-with'>
        <h3>All Burritos are stuffed with RICE, BEANS, CHEESE, Pico
          de Gallo, and crisp TROPICAL SALAD (cabbage, carrots)</h3>
          <hr />
      </div>

      <div className='burrito-list'>

        <div className='box'>
          <h3 className='burrito-name'>Beth-Mex</h3>
          <h4 className='burrito-ingredients'>Served with a smokey homemade red salsa (This is our
            signature burrito)</h4>
        </div>

        <div className='box'>
          <h3 className='burrito-name'>Verde</h3>
          <h4 className='burrito-ingredients'>Our green salsa is tropical and mild. Made with fress
            tomatillos and chiles</h4>
        </div>

        <div className='box'>
          <h3 className='burrito-name'>Mole</h3>
          <h4 className='burrito-ingredients'>Served with a traditional sauce made with almond and bittersweet
            Mexican chocolate</h4>
        </div>

        <div className='box'>
          <h3 className='burrito-name'>Santana</h3>
          <h4 className='burrito-ingredients'>California-style; made with sweet and new potatoes</h4>
        </div>

        <div className='box'>
          <h3 className='burrito-name'>Mayan</h3>
          <h4 className='burrito-ingredients'>Grilled pilapple salsa and guacamole</h4>
        </div>

        <div className='box'>
          <h3 className='burrito-name'>Midnight Sun</h3>
          <h4 className='burrito-ingredients'>Our breakfast burrito -- eggs and homefries</h4>
        </div>

        <div className='box'>
          <h3 className='burrito-name'>Wingaritto</h3>
          <h4 className='burrito-ingredients'>Our famous Beth-mex wing sauce and blue cheese dressing</h4>
        </div>

        <div className='box'>
          <h3 className='burrito-name'>Oaxacan (Wah-hawk-in) Chorizo Burrito</h3>
          <h4 className='burrito-ingredients'>Fresh Mexican sausage with Oaxacan cheese</h4>
        </div>

      </div>
    </div>
  )
}

export default BurritoMenu
