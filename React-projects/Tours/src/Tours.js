import React from 'react';
import Tour from './Tour';

//? tours ve remove propslarını aldık
const Tours = ({ tours, removeTour }) => {
  return (

    //? Tours main içinde section oluşturdu
    <section>
    <div className='title'>
      <h1>Ours Tours</h1>
      <div className='underline'></div>

      <div>
        //? map le tours un içine girerek parçalayıp Tour dosyasına gönderdik
        {tours.map((tour)=>{
          
          console.log(tour);
          return(
            <Tour key={tour.id} {...tour} removeTour={removeTour}/>
          )
        })}
      </div>
      
    </div>
    </section>
  )
};

export default Tours;
