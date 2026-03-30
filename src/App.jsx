import './App.css'
import Home from './components/Home/index.jsx'
import Navbar from './components/Navbar/index.jsx'
import SkillsSection from './components/MySkills/index.jsx'
import Services from './components/MyServices/index.jsx'
import Footer from './components/Footer/index.jsx'
import Projects from './components/Projects/index.jsx'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <SkillsSection/>
      <Projects/>
      <Services/>
      <Footer/>
      <Analytics />
    </>
  )
}

export default App
