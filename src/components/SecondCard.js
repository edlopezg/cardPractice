import React from 'react'
import quotes from '../json/quotes.json'

const SecondCard = ({positionQuotes, chQuotes, color}) => {
  return (
    <div className='second-card'>
    <h2 style={{color}} className='quote-author'>{quotes[positionQuotes].author}</h2>
    <button style={{backgroundColor: color}} className='button' onClick={chQuotes}>&#62;</button>
  </div>
  )
}

export default SecondCard