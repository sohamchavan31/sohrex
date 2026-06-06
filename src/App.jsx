import { useState } from 'react'
import TerminalBoot from './components/ui/TerminalBoot'
import Navbar       from './components/ui/Navbar'
import Footer       from './components/ui/Footer'
import Hero         from './components/sections/Hero'
import About        from './components/sections/About'
import Projects     from './components/sections/Projects'
import Skills       from './components/sections/Skills'
import Exploring    from './components/sections/Exploring'
import Philosophy   from './components/sections/Philosophy'
import Contact      from './components/sections/Contact'

function App() {
  const [booted, setBooted] = useState(false)

  return (
    <>
      {!booted && <TerminalBoot onComplete={() => setBooted(true)} />}
      {booted && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Exploring />
            <Philosophy />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

export default App
