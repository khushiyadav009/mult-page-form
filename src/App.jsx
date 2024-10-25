import { useState } from 'react'
// import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Header from'./components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

< Header/>


    </>
  )
}

export default App
