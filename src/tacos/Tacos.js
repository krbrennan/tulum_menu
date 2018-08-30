import React from 'react';


const Taco = () => {

  return(
    <div className='taco-menu'>
      <div className='taco-title'>

        <div className='the-word-tacos'>
          <h2>Tacos</h2>
        </div>

      </div>


      <div className='taco-list'>

        <div className='box'>
          <h3 className='taco-name'>The Taco</h3>
          <h4 className='taco-ingredients'>Your choice of meat, veggies,
            or beans toppe dwith cheese, lettuce, Pico de Gallo, and
            shredded veggies, all in a crispy taco shell</h4>
        </div>

        <div className='box'>
          <h3 className='taco-name'>Toasted Almond Veggie Taco</h3>
          <h4 className='taco-ingredients'>Grilled veggies, roasted poblano strips,
          toasted  almonds and crema</h4>
          <h4>Can also order this as a burrito for $8.95</h4>
        </div>

        <div className='box'>
          <h3 className='taco-name'>Soft Shell Tacos</h3>
          <h4 className='taco-ingredients'>Two corn shell tacos served with
          a side of rice and beans</h4>
        </div>

        <div className='box'>
          <h3 className='taco-name'>Mahi-Mahi Taco</h3>
          <h4 className='taco-ingredients'>Pan-seared fish in a tequila lime sauce,
          served with our grilled pinapple salsa</h4>
        </div>

      </div>
    </div>
  )

}


export default Taco;
