import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SiteNav from './components/SiteNav'
import SiteFooter from './components/SiteFooter'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import Rubros from './pages/Rubros'
import Normativa from './pages/Normativa'
import Contacto from './pages/Contacto'

// Reset scroll position on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// Wraps each page in an animated fade/slide transition
function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.main>
  )
}

export default function App() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <SiteNav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Inicio /></Page>} />
          <Route path="/nosotros" element={<Page><Nosotros /></Page>} />
          <Route path="/servicios" element={<Page><Servicios /></Page>} />
          <Route path="/rubros" element={<Page><Rubros /></Page>} />
          <Route path="/normativa" element={<Page><Normativa /></Page>} />
          <Route path="/contacto" element={<Page><Contacto /></Page>} />
          <Route path="*" element={<Page><Inicio /></Page>} />
        </Routes>
      </AnimatePresence>
      <SiteFooter />
    </>
  )
}
