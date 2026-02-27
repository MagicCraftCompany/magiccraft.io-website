// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from './components/ScrollToTop'

const Homepagemcrt = lazy(() => import("./pages/Homepagemcrt"));
const Homepagegames = lazy(() => import("./pages/HomePageGames"));
const Support = lazy(() => import("./pages/Support"));
const GamePatch = lazy(() => import("./pages/GamePatch"));
const Hero = lazy(() => import("./pages/Hero"));
const ChooseYourHero = lazy(() => import("./pages/ChooseYourHero"));
const Server = lazy(() => import("./pages/serverStatus"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndCondition"));
const NewsPage = lazy(() => import("./pages/McNews"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const Verify = lazy(() => import("./pages/Verify"));
const LeaderboardPage = lazy(() => import("./pages/LeaderBoard"));
const HoldersPage = lazy(() => import("./pages/TopHolders"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const GameDeveloper = lazy(() => import("./pages/GameDeveloper"));
const NotFound = lazy(() => import("./pages/ErrorPage"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const SanityStudio = lazy(() => import("./pages/SanityStudio"));
const Bounties = lazy(() => import("./pages/Bounties"));
const Guilds = lazy(() => import("./pages/Guilds"));
const Grants = lazy(() => import("./pages/Grants"));
const GrantsSuccess = lazy(() => import("./pages/GrantsSuccess"));
const Careers = lazy(() => import("./pages/Careers"));
import { BUILD_REV } from './version'
const LiveSupportWidget = lazy(() => import('./components/LiveSupport/LiveSupportWidget'))

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#03082f] text-white">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepagemcrt  />} />
          <Route path="/magiccraft" element={<Homepagegames />} />
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
      </Suspense>
      <div className="fixed left-2 top-2 z-[100000] pointer-events-none select-none">
        <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-white/10 border border-white/20 text-white/80 backdrop-blur-md shadow-lg">
          v{BUILD_REV}
        </span>
      </div>
      <Suspense fallback={null}>
        <LiveSupportWidget />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
