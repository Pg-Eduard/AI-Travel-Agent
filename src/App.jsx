import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Intro from "./components/Intro"

function App() {
  const body = (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/information"></Route>
        <Route path="/results"></Route>
      </Routes>
    </BrowserRouter>
  )

  return body
}

export default App
