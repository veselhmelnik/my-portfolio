import './App.css'
import Footer from './components/Footer'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router'
import MainPage from './pages/MainPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactsPage from './pages/ContactsPage'
import SingleProject from './components/SingleProject'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="mx-5 sm:mx-15 my-8 flex-1">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<SingleProject />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>

      <div className="mx-15 mb-8">
        <Footer />
      </div>
    </div>
  )
}

export default App
