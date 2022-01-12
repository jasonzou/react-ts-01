import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Main from './components/MainComponent'
import { DISHES, DishType } from './shared/dishes'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
        <Main />
    </div>
  )
}

export default App
