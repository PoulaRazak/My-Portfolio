import './App.css'
import Home from './components/Home/index.jsx'
import Navbar from './components/Navbar/index.jsx'
import SkillsSection from './components/Skills_section/section.jsx'
import Services from './components/MyServices/index.jsx'
import Footer from './components/Footer/index.jsx'
import Projects from './components/Projects/index.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <SkillsSection/>
      <Projects/>
      <Services/>
      <Footer/>
    </>
  )
}

export default App
