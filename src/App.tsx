import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepagemcrt from './pages/Homepagemcrt'
import Homepagegames from './pages/HomePageGames'
import Support from './pages/Support'
import GamePatch from './pages/GamePatch'
import Homepagemagicrunner from './pages/HomePageMagicRunner'
import Homepagemagic8ball from './pages/HomePageMagic8Ball'
import Hero from './pages/Hero'
import ChooseYourHero from './pages/ChooseYourHero'
import Server from './pages/serverStatus'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepagegames />}></Route>
        <Route path="/magiccraft" element={<Homepagemcrt />}></Route>
        <Route path="/magicrunner" element={<Homepagemagicrunner />}></Route>
        <Route path="/magic8ball" element={<Homepagemagic8ball />}></Route>
        <Route path="/hero" element={<Hero />}></Route>
        <Route path="/Chooseyourhero" element={<ChooseYourHero/>}></Route>
        <Route path="/faq" element={<Support />}></Route>
        <Route path="/patch" element={<GamePatch />}></Route>
        <Route path="/server" element={<Server />}></Route>
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
