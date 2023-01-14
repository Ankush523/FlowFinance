import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Streams from './components/Streams';
import Borrow from './components/Borrow';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/streams' element={<Streams/>}/>
          <Route path='/borrow' element={<Borrow/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;