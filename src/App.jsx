import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Videos from './pages/Videos'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
