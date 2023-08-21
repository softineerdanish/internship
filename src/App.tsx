import {Routes , Route } from 'react-router-dom'
import './App.css'
import InfoForm from './components/InfoForm'
import FetchApiDetail from './components/FetchApiDetail'

function App() {


  return (
    <>
    <Routes>
    
    <Route path='/' element={ <InfoForm />} />
    
    <Route path='/fetch-api-detail' element={ <FetchApiDetail />} />
    </Routes>      
     
    </>
  )
}

export default App
