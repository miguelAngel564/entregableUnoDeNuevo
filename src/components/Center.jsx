import React from 'react'
import quotes from './quotes.json'


const Center = ({ changeUsers, randoColor, colors, count }) => {

    console.log(quotes)

  return (
    <div>
        <p style={{color: colors[randoColor]}}>{quotes[count].author}</p>
    </div>
  )
}

export default Center