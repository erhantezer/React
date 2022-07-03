import React from 'react'

const Card = (data) => {
  // console.log("ben geldim");
  const {id,title,desc,image}=data
  return (
    <div key={id} className="cards">
      <div className='title'>
        <h2>{title}</h2>
      </div>
      <img src={image} alt={title} />
      <div className='card-over'>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Card