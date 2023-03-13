import Dashboard from './Pages/Dashboard';
import {Routes ,Route} from 'react-router-dom'
import './App.css';
import Cartpage from './Pages/Cartpage';
function App() {
  return (
    <Routes>
     <Route path='/' element={<Dashboard/>} />
     <Route path='/cart' element={<Cartpage/>} />
      
    </Routes>
  );
}

export default App;
