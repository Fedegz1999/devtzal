import { useEffect, useState } from 'react'
import './App.css'
import { AppProvider, useAppContext } from './useContext/useContext'
import Cards from './components/Cards/Cards'
import Home from './components/Home'
import CreateAircrafts from './components/CreateAircrafts/CreateAircrafts'
import PutAircrafts from './components/PutAircrafts/PutAircrafts'




function App() {




  

  return (
   <AppProvider>
    <div className='bodyP'>
   <Home/>
   </div>
   </AppProvider>
  )
}

export default App
