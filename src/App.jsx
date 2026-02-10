import './App.css'
import Home from './pages/Home'
import { Routes , Route } from 'react-router-dom'
import RootLayouts from './components/layouts/RootLayouts'
import About from './pages/About'


function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App


