import { BrowserRouter as Router,  Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Aulas from './pages/aulas.jsx'


function App() {


  return (
    <div className='App'>
          <Router>
            <Routes>

              <Route path="/" element= {<Home/>} />
              <Route path="/nasondas" element={<Aulas/>} />
            
            </Routes>
        </Router>

    </div>
      
  )
}

export default App
