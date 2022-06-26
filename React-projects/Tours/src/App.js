import React, { useState, useEffect } from 'react'
import Tours from './Tours'

//  =============   API UYGULAMASI ==============
const url = 'https://course-api.com/react-tours-project'

function App() {

  
  //? useState kullanımı tours  başlangıç boş = [] setTours değiştirecek sonra
  const [tours, setTours] = useState([])

  // ? not interested butonuuna bastığımda tour.id boş olduğunda id eşitliği sağlamayacak ve 
  //? [] newTours a atanacak böylelikle api boş olacak refresh yaptığımızda fetchTours çalışacak api tours içine atanacak ve tekrar çalışacak
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }



  //? api çekme işlemi ve tours değeri olarak atanması önemli yukarda kullanmak için
  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()

      //? setTours değeri tekrar dolduruldu
      setTours(tours)
    } catch (error) {
      
      console.log(error)
    }
  }


  //? başlangıç olarak çağırmak için kullandık
  useEffect(() => {
    fetchTours()
  }, [])

 
  //? refresh yaparak fetchTours çağırıp tekrar api çektik ve görüntüler geldi
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    //? ana klasör tamamı main içinde önce Tours.js gönderdik 
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App