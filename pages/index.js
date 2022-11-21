import Header from "../components/header/Header"
import Hero from "../components/main/Hero"
import Category from "../components/main/Category"
import TopDestinations from "../components/main/TopDestinations"

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
      </main>
    </div>
  )
}
