import { BrowserRouter as Router,  Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Aulas from './pages/aulas.jsx'
import Campeonato from './pages/campeonatos.jsx'


function App() {


  return (
    <div className='App'>
          <Router>
            <Routes>

              <Route path="/" element= {<Home/>} />
              <Route path="/nasondas" element={<Aulas/>} />
              <Route path="/capeonatos" element={<Campeonato/>}/>
            
            </Routes>
        </Router>

    </div>
      
  )
}

export default App
