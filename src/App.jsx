import './App.css'
import Home from './components/Home/home.jsx'
import Navbar from './components/Navbar/navbar.jsx'
import SkillsSection from './components/Skills_section/section.jsx'
import Services from './components/Services/services.jsx'
import Footer from './components/Footer/footer.jsx'
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
