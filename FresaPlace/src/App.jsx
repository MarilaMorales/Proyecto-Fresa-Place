import Routing from './Routes/Routing'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css'



function App() {


  return (
    <>
      <div>
        <Router>
        <Routing />
        </Router>
      </div>

    </>
  )
}

export default App
