import Header from "../components/header/Header"
import Hero from "../components/main/Hero"
import Category from "../components/main/Category"
import TopDestinations from "../components/main/TopDestinations"
import EasyAndFast from "../components/main/EasyAndFast"
import Testimonials from "../components/main/Testimonials"
import Partners from "../components/main/Partners"
import Newsletter from "../components/main/Newsletter"

export default function Home() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Category />
        <TopDestinations />
        <EasyAndFast />
        <Testimonials />
        <Partners />
        <Newsletter />
      </main>
    </div>
  )
}
