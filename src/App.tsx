import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepagemcrt from './pages/Homepagemcrt'
import Homepagegames from './pages/HomePageGames'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepagegames />}>
      </Route>
      <Route path="/mcrt" element={<Homepagemcrt />}>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
