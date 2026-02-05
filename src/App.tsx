// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'
// import { openTransactionModal } from "@xswap-link/sdk";

import Homepagemcrt from "./pages/Homepagemcrt";
import Homepagegames from "./pages/HomePageGames";
import Support from "./pages/Support";
import GamePatch from "./pages/GamePatch";
// import Homepagemagicrunner from "./pages/HomePageMagicRunner";
// import Homepagemagic8ball from "./pages/HomePageMagic8Ball";
import Hero from "./pages/Hero";
import ChooseYourHero from "./pages/ChooseYourHero";
import Server from "./pages/serverStatus";
import TermsAndConditions from "./pages/TermsAndCondition";
import NewsPage from "./pages/McNews";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import Verify from "./pages/Verify";
import LeaderboardPage from "./pages/LeaderBoard";
import HoldersPage from "./pages/TopHolders";
import Dashboard from "./pages/Dashboard";
import GameDeveloper from "./pages/GameDeveloper";
import NotFound from "./pages/ErrorPage";
import BlogPost from "./pages/BlogPost";
import SanityStudio from "./pages/SanityStudio";
import Bounties from "./pages/Bounties";
import Guilds from "./pages/Guilds";
import Grants from "./pages/Grants";
import GrantsSuccess from './pages/GrantsSuccess'
import { BUILD_REV } from './version'
import Careers from './pages/Careers'
import LiveSupportWidget from './components/LiveSupport/LiveSupportWidget'

// const handleBuyMCRT = async () => {
//   try {
//     const transactions = await openTransactionModal({
//       integratorId: "34808808c1f4ae4533b7",
//       dstChain: "56",
//       dstToken: "0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f",
//       srcChain: "56",
//       srcToken: "0x0000000000000000000000000000000000000000",
//       defaultWalletPicker: true,
//     });
//   } catch (error) {
//     console.error("XPay transaction failed:", error);
//   }
// };

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepagemcrt  />} />
        <Route path="/magiccraft" element={<Homepagegames />} />
        {/* <Route path="/magicrunner" element={<Homepagemagicrunner />} />
        <Route path="/magic8ball" element={<Homepagemagic8ball />} /> */}
        <Route path="/hero" element={<Hero />} />
        <Route path="/hero/:heroName" element={<Hero />} />
        <Route path="/Chooseyourhero" element={<ChooseYourHero />} />
        <Route path="/faq" element={<Support />} />
        <Route path="/patch" element={<GamePatch />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/build-on-magiccraft" element={<GameDeveloper />} />
        <Route path="/server" element={<Server />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/topholders" element={<HoldersPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bounties" element={<Bounties />} />
        <Route path="/grants" element={<Grants />} />
        <Route path="/grants/success" element={<GrantsSuccess />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/guilds" element={<Guilds />} />
        <Route path="/admin/*" element={<SanityStudio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="fixed left-2 top-2 z-[100000] pointer-events-none select-none">
        <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-white/10 border border-white/20 text-white/80 backdrop-blur-md shadow-lg">
          v{BUILD_REV}
        </span>
      </div>
      <LiveSupportWidget />
    </BrowserRouter>
  );
}

export default App;
