import Header from "../components/header/header"
import Hero from "../components/main/Hero"

export default function Home() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Hero />
      </main>
    </div>
  )
}
