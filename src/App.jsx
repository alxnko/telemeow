import { useState } from 'react'
import './services/i18nextConf'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import './style/main.css'
import ErrorPage from './pages/ErrorPage'
import Index from './pages/Index'
import Connect from './pages/promo/Connect'
import Promo from './pages/promo/Promo'
import Tarifs from './pages/tarifs/Tarifs'
import Meowi from './pages/tarifs/meow/Meowi'
import Help from './pages/special/Help'
import Terms from './pages/special/Terms'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Index/>}/>
          {/* main pages */}
          <Route path="connect" element={<Connect/>}/>
          <Route path="promo" element={<Promo/>}/>
          {/* tarifs pages */}
          <Route path="tarifs" element={<Tarifs/>}/>
          <Route path="meow/">
            <Route path=':i' element={<Meowi/>}/>
          </Route>
          {/* special pages */}
          <Route path='/help' element={<Help/>}/>
          <Route path='terms' element={<Terms/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
