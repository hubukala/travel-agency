import Header from "../components/header/header"
import Hero from "../components/main/Hero"
import Category from "../components/main/category"

export default function Home() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Category />
      </main>
    </div>
  )
}
