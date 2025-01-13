import Features from "./section/Features"
import Header from "./section/header"
import Hero from "./section/Hero"
import Pricing from "./section/Pricing"
const App = () => {
  return (
    <main className="overflow-hidden">
      <Header/>
      <Hero/>
      <Features/>
      <Pricing/>
      

    </main>
  )
}

export default App