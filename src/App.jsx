import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './Responsive.css'
import Home from './Pages/Home'
import AllRoute from './Router/AllRoute';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AllRoute/>
    </>
  )
}

export default App
