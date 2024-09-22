import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Feature from "./sections/Feature"
import Pricing from "./sections/Pricing"
import Faq from "./sections/Faq"
import Testimonials from "./sections/Testimonials"

const App = () => {
  return (
    <main className='overflow-hidden'>
      <Header />
      <Hero />
      <Feature />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
    </main>
  )
}

export default App