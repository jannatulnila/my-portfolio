import './App.css'
import Education from './Components/Education/Education'
import About from './Page/About'
import ContactSection from './Page/ContactSection'
import Header from './Page/Header'
import Navbar from './Page/Navbar'
import ProjectsSection from './Page/ProjectsSection'
import Skills from './Page/Skills'

function App() {

  return (
    <div className='bg-[#1B0036] scroll-smooth'>
       <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <ProjectsSection></ProjectsSection>
      <ContactSection> </ContactSection>

      
    </div>
  )
}

export default App
