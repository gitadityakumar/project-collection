import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import './App.css'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Contacts from './sections/Contacts'
import Footer from './sections/Footer'

function App() {

  return (
    <>
      <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Clients/>
      <Contacts/>
      <Footer/>
      
    </main>
    </>
  )
}

export default App
