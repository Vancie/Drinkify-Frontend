
import './App.css'
import Home from './pages/Home'
import Header from './components/Header/Header'
import About from './pages/About/About' 
import SignIn from './pages/SignIn/SignIn.page'
import Feed from './pages/Feed/Feed.page'

import { Routes, Route } from 'react-router-dom' 
import { useState } from 'react'

function App() {

  const [token, setToken] = useState();

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/about' element={ <About />}/>
        <Route path='/feed' element={ <Feed />}/>
        <Route path='/signin' element={ <SignIn />}/>
      </Routes>
    </>
  )
}

export default App
