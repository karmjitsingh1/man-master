
import './App.css';
import Home from './component/Home';
import {BrowserRouter,Route,Routes,List} from 'react-router-dom'
import Add from './component/Add';
import Edit from './component/Edit'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Add />} />
        <Route path="/:id1/edit" element={<Edit />} />

        
        </Routes>
      
    </BrowserRouter>

    </div>
  );
}

export default App;
