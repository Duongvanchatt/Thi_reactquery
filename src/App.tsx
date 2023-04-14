import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import AddEditProduct from './page/AddEdit';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<AddEditProduct/>} />
        <Route path='/edit/:id' element={<AddEditProduct/>} />
      </Routes>
    </div>
  )
}

export default App
