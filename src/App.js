import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Elements from './pages/Elements';
import Streams from './components/Streams';
import Borrow from './components/Borrow';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/elements' element={<Elements/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/streams' element={<Streams/>}/>
          <Route path='/borrow' element={<Borrow/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;