import Download from "./section/Download"
import Faq from "./section/Faq"
import Features from "./section/Features"
import Footer from "./section/Footer"
import Header from "./section/header"
import Hero from "./section/Hero"
import Pricing from "./section/Pricing"
import Testimonials from "./section/Testimonials"
const App = () => {
  return (
    <main className="overflow-hidden">
      <Header/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Faq/>
      <Testimonials/>
      <Download/>
      <Footer/>
      

    </main>
  )
}

export default App