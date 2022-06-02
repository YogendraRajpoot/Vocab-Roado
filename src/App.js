import './App.css';
import { Router } from './Route/Router';
import { Navbar } from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router/>      
    </div>
  );
}

export default App;
