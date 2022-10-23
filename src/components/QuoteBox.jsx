import React from 'react'

const QuoteBox = ({ changeUsers, randoColor, colors }) => {
  return (
    <div> <button onClick={changeUsers} style={{color: colors[randoColor]}}>&#62;</button></div>
  )
}

export default QuoteBox