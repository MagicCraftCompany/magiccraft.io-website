import Header from '@/components/Header/Header'
import Leaderboard from '@/components/LeaderBoard/leaderboard'
import { Helmet } from 'react-helmet-async'

function LeaderboardPage() {
  return (
    <>
      <Helmet>
        <title>Leaderboard | MagicCraft</title>
        <meta name="description" content="See the top-ranked MagicCraft PvP players this season. Compete for $MCRT prize pools." />
        <link rel="canonical" href="https://magiccraft.io/leaderboard" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://magiccraft.io/leaderboard" />
        <meta property="og:title" content="Leaderboard | MagicCraft" />
        <meta property="og:description" content="See the top-ranked MagicCraft PvP players this season. Compete for $MCRT prize pools." />
        <meta property="og:image" content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Leaderboard | MagicCraft" />
        <meta name="twitter:description" content="See the top-ranked MagicCraft PvP players this season. Compete for $MCRT prize pools." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp" />
      </Helmet>
      <div className="min-h-dvh w-full text-white ">
        <Header />
        <div className="relative">
        {/* Desktop Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732780930/Image_9_rqkm4a.webp"
          className="hidden lg:block"
          alt="verify banner"
         
        />

        {/* Tablet Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732780930/Image_10_iorpxg.webp"
          className="hidden md:block lg:hidden"
          alt="verify banner"
        
        />

        {/* Mobile Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732780930/Image_11_fmkaef.webp"
          className="block md:hidden"
          alt="verify banner"
          
        />

        {/* Overlay Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            MagicCraft Verify
          </h1>
        </div>
      </div>
        <div className='mx-40'>
        <Leaderboard gameId={0} />
        </div>
      </div>
    </>
  )
}
export default LeaderboardPage
