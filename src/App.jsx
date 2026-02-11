
import Home from './pages/Home'
import { Routes , Route } from 'react-router-dom'
import RootLayouts from './components/layouts/RootLayouts'
import Contact from './pages/Contact'


function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App


