
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Gallery } from './pages/Gallery'
import { Products } from './pages/Products'
import { ReviewsPage } from './pages/Reviews'
import { CartProvider } from './context/cart'



const GalleryPage = () => {
  return (
    <div className="max-w-screen mx-auto bg-gray-800">
      <h1 className="text-2xl text-white font-bold text-center pt-24">Perfume Gallery</h1>
      <Gallery />
    </div>
  )
}

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/products' element={<Products />} />
          <Route path="/reviews" element={<ReviewsPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
