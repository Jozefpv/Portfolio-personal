import './App.css'
import Navegation from './components/navbar/Navegation'
import Points from './components/points/Points'
import Portada from './components/portada/Portada'
import Projects from './components/proyectos/Projects'
import Stack from './components/techstack/Stack'
function App() {

  return (
    <>
      <header>
        <Navegation />
      </header>
      <main>
        <Portada />
        <Points/>
        <Stack/>
        <Points/>
        <Projects/>
      </main>
    </>
  )
}

export default App
