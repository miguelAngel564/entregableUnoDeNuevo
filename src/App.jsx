import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './components/quotes.json'
import QuoteBox from './components/QuoteBox'
import Center from './components/Center'

function App() {

  const value = Math.floor(Math.random() * quotes.length) 

  const [count, setCount] = useState(value)

  const changeUsers = () => {
    const chaChe = Math.floor(Math.random() * quotes.length)
    setCount(chaChe)
  }

  const colors = ["red", "black", "orange", "yellow", "Tomato", "DodgerBlue", "MediumSeaGreen", "Violet"]
  const randoColor = Math.floor(Math.random() * colors.length)
  document.body.style = `background: ${colors[randoColor]}`;


  return (
    <div className="App" style={{color: colors[randoColor]}}>
      <div className="conatiner">

     <h1><i class="fa-solid fa-quote-left"></i> {quotes[count].quote}</h1>
     <Center  changeUsers={changeUsers} colors={colors} count={count} randoColor={randoColor}></Center>
     <QuoteBox changeUsers={changeUsers} colors={colors} count={count} randoColor={randoColor}></QuoteBox>
      </div>
    </div>
  )
}

export default App