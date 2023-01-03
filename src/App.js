import './App.css';
import Home from './views/Home';
import Author from './views/Author'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/author' element={<Author />}/>
      </Routes>
    </div>
  );
}

export default App;
