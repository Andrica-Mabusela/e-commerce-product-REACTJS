import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'

export const basketContext = React.createContext()


export default function App(){
  const [isBasketOpen, setIsBasketOpen] = useState(false)
  const [total, setTotal] = useState(0)
  const [counter, setCounter] = useState(0)

  function setter(counterParam){
    let product = counterParam * 125
    setCounter(counterParam)  
    setTotal(product)
  }

  function basketOpener() {
    setIsBasketOpen(!isBasketOpen)
  }

  return (
    <div className="App">
      <basketContext.Provider value={{counter, total, isBasketOpen}}>
        <Nav basketOpener={basketOpener}/>
        <Main setter={setter} />
      </basketContext.Provider>
    </div>
  )
}