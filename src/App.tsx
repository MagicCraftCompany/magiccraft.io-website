import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepagemcrt from './pages/Homepagemcrt'
import Homepagegames from './pages/HomePageGames'
import Support from './pages/Support';
// import Homepagemagicrunner from './pages/HomePageMagicRunner';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepagegames />}>
      </Route>
      <Route path="/mcrt" element={<Homepagemcrt />}>
      {/* </Route> */}
      {/* <Route path="/magicrunner" element={<Homepagemagicrunner />}> */}
      </Route>
      <Route path="/faq" element={<Support />}>
      </Route> 
    </Routes>
  </BrowserRouter>
  )
}

export default App
