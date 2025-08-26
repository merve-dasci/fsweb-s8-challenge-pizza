import { useState } from 'react'
import OrderForm from "./components/OrderForm"
import Header from "./components/Header"


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
      <main className='container'>
        <OrderForm />
      </main>
      
    </>
  )
}

export default App
