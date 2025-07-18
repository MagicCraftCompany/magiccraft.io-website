import { NewsSection } from "@/components/Cards/NewsSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Helmet } from 'react-helmet-async';

export default function NewsPage() {
  const canonical = 'https://www.magiccraft.io/news';
  return (
    <>
      <Helmet>
        <title>MagicCraft News & Updates</title>
        <meta name="description" content="Stay up to date with the latest MagicCraft news, patch notes, and community updates." />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content="MagicCraft News" />
        <meta property="og:description" content="Catch all the latest announcements, patch updates, and ecosystem news for MagicCraft." />
        <meta property="og:image" content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1726232450/Frame_307825_il8ahq.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-dvh w-full text-white">
        <Header />
        <main className="scroll-smooth pb-32">
          {/* OUR NEWS Section */}
          <section className="relative bg-gradient-to-b from-[#070725] to-[#0a0a2e] py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
              <h1 className="mb-8 text-5xl font-bold text-white md:text-6xl font-serif">OUR NEWS</h1>
              
              <div className="mx-auto max-w-3xl">
                <p className="mb-6 text-center text-lg">
                  Embark on a mystical journey in MagicCraft, a universe spanning <span className="font-bold">PC, Android, and iOS</span>.
                </p>
                <p className="text-center text-lg">
                  Armed with the powerful <span className="text-yellow-400 font-semibold">$MCRT token</span>, every hero ventures into the NFT marketplace to amplify earnings and forge their legend. MagicCraft offers innovative income strategies and an epic saga where you are the hero.
                </p>
              </div>
              
              {/* Featured News Card - Like the Spectator Mode */}
              <div className="mt-16 rounded-[20px] overflow-hidden relative mx-auto max-w-4xl">
                <div className="bg-gradient-to-r from-purple-900/80 to-indigo-900/80 p-1 rounded-[20px]">
                  <div className="relative overflow-hidden rounded-[18px]">
                    <img 
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1726232450/Frame_307825_il8ahq.webp" 
                      alt="Spectator Mode" 
                      className="w-full h-[200px] object-cover"
                    />
                    <div className="absolute top-0 left-0 p-4">
                      <span className="inline-block bg-[#1C162C] bg-opacity-70 px-3 py-1 rounded-full text-white text-sm">
                        Patch Updates
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">

                      <div className="flex justify-between items-center">
                        <a 
                          href="#latest-news" 
                          className="text-teal-400 hover:text-teal-300 flex items-center"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('latest-news')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          Read more 
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* LATEST NEWS Section */}
          <section id="latest-news" className="relative px-4 py-12 md:px-6 lg:px-8">
            <NewsSection />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

