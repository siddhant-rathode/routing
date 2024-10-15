import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'
const App = () => {
  return (
    <div className='w-[100%] h-[200px] bg-gray-500'>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </div>
  )
}

export default App