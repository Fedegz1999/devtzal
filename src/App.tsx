import './App.css'
import { AppProvider } from './useContext/useContext'
import Home from './components/Home'





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
