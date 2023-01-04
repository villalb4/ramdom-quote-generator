import './App.css';
import Home from './views/Home';
import Author from './views/Author'
import Villalba from './components/Villalba/Villalba';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/author/:name' element={<Author />}/>
      </Routes>
      <Villalba />
    </div>
  );
}

export default App;
