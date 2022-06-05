import React from 'react'
import quotes from '../json/quotes.json'



    const CardOne = ({positionQuotes, color}) => {
return (
    <div className='card-one'>
      <i style={{color}} className="fa-solid fa-quote-left"></i>
      <p style={{color}} className='quote'>{quotes[positionQuotes].quote}</p>
    </div>
  )
}
    

  

export default CardOne