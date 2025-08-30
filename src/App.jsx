import { useState } from 'react'
import './App.css'
import OrderPage from "./components/OrderPage"
import Header from "./components/Header"
import Home from "./components/Home"

import { Route, Switch, useLocation } from "react-router-dom"
import Success from './components/Success'





function App() {
  const [lastOrder, setLastOrder] = useState(null)
  const location = useLocation();

  return (
    <>
    {location.pathname === "/order" && <Header />}
     
      <main className='container'>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route 
          path="/order" 
          exact 
          render={(props) => <OrderPage {...props} onOrderSaved={setLastOrder} /> }
          />
          <Route path="/success" exact render={(props) => <Success order={lastOrder} {...props} />}
          />
        </Switch>
      </main>
    </>
  )
}


export default App
