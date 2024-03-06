import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import './index.css'
import Home from './components/Home'
import Hero from './components/Hero'
import Footer from './components/Footer'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Hero />
    <Footer />
  </React.StrictMode>,
)
