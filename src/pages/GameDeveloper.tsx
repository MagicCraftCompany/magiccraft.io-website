import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

function GameDeveloper() {
  return (
    <div className="min-h-dvh w-full text-white">
      {/* Header */}
      <Header />

      {/* Banner Section */}
      <div className="relative">
        {/* Desktop Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733825996/Image_15_tnvsad.webp"
          className="hidden h-[500px] w-full object-cover lg:block"
          alt=""
        />

        {/* Tablet Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733825996/Image_16_ukhd4o.webp"
          className="hidden h-[700px] w-full object-cover md:block lg:hidden"
          alt=""
        />

        {/* Mobile Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733825996/Image_16_ukhd4o.webp"
          className="block h-[500px] w-full object-cover md:hidden"
          alt=""
        />

        {/* Overlay Title */}
    <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
        <h1 className="text-4xl font-bold md:text-6xl font-serif text-center">
            BECOME A MAGICCRAFT
            <br />
            GAME DEVELOPER
          </h1>
          <p className="mx-auto max-w-5xl text-lg text-gray-200 text-center">
            Bring your creativity to life in the immersive Magiccraft ecosystem. As a game developer, you'll have access to a vibrant blockchain gaming platform that lets you design, build, and launch epic adventures.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button  className="bg-[#98FFF9] text-black hover:bg-[#98FFF9]/90 px-4 py-2 rounded-md">
              Apply
            </button>
            <button   className="border-[#98FFF9] border-[1px] border-solid text-[#98FFF9]  px-4 py-2 rounded-md">
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div>
      <div className="-mt-20 flex justify-center">
      <section className="z-10 flex h-full max-w-[100em] flex-col gap-[30px] rounded-[30px] bg-[#11113A] p-6 lg:p-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold font-serif">WHY DEVELOP FOR MAGICCRAFT?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="border-none bg-[#0C0C29] p-6 rounded-2xl">
              <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733828313/dvv1lpzscaletrxiu1dg.webp" alt="Harness the Power of Blockchain" className="mb-4 h-12 w-12 text-[#98FFF9]" />
              <h3 className="mb-2 text-xl font-bold">Harness the Power of Blockchain</h3>
              <p className="text-gray-400">
                Incorporate cutting-edge blockchain technology to create games that are secure, transparent, and player-driven.
              </p>
            </div>
            <div className="border-none bg-[#0C0C29] p-6 rounded-2xl">
              <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733828313/iztli1yntjjwxctzood8.webp" className="mb-4 h-12 w-12 text-[#98FFF9]" />
              <h3 className="mb-2 text-xl font-bold">Access a Global Gaming Community</h3>
              <p className="text-gray-400">
                Tap into a rapidly growing community of gamers and developers ready to engage with your creations.
              </p>
            </div>
            <div className="border-none bg-[#0C0C29] p-6 rounded-2xl">
              <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733828313/1_lgdhov.webp" className="mb-4 h-12 w-12 text-[#98FFF9]" />
              <h3 className="mb-2 text-xl font-bold">Revenue-Generating Opportunities</h3>
              <p className="text-gray-400">
                Leverage Play-to-Earn mechanics, NFTs, and in-game economies to generate income from your games.
              </p>
            </div>
            <div className="border-none bg-[#0C0C29] p-6 rounded-2xl">
              <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733828313/%EF%B8%8F_ozszok.webp" className="mb-4 h-12 w-12 text-[#98FFF9]" />
              <h3 className="mb-2 text-xl font-bold">Developer-Friendly Tools</h3>
              <p className="text-gray-400">
                Our comprehensive SDK and tools make it simple to design and launch your games within the Magiccraft universe.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* How It Works Section */}
      <section className=" px-4 py-20">
        
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold font-serif">HOW IT WORKS</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border-[1px] border-solid border-[#3F3F7A] bg-[#11113A] p-6 rounded-2xl">
              <div className="mb-4 text-sm font-medium text-[#98FFF9] bg-[#0C0B25] w-fit px-4 py-2 rounded-full">STEP 1</div>
              <h3 className="mb-4 text-xl font-bold">Sign Up and Access the Developer Portal</h3>
              <p className="text-gray-400">
                Create an account to unlock powerful tools and resources tailored to game creators.
              </p>
            </div>
            <div className="border-[1px] border-solid border-[#3F3F7A] bg-[#11113A] p-6 rounded-2xl">
              <div className="mb-4 text-sm font-medium text-[#98FFF9] bg-[#0C0B25] w-fit px-4 py-2 rounded-full">STEP 2</div>
              <h3 className="mb-4 text-xl font-bold">Build with Our SDK</h3>
              <p className="text-gray-400">
                Easily integrate blockchain functionalities like NFTs, tokens, and marketplaces using the Magiccraft SDK.
              </p>
            </div>
            <div className="border-[1px] border-solid border-[#3F3F7A] bg-[#11113A] p-6 rounded-2xl">
              <div className="mb-4 text-sm font-medium text-[#98FFF9] bg-[#0C0B25] w-fit px-4 py-2 rounded-full">STEP 3</div>
              <h3 className="mb-4 text-xl font-bold">Launch and Scale</h3>
              <p className="text-gray-400">
                Publish your game to the Magiccraft platform and grow your player base with our community-focused support.
              </p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <button  className="bg-[#98FFF9] text-black px-4 py-2 rounded-md">
              Apply
            </button>
          </div>
        </div>
      </section>
        
            <Footer/>
      </div>
    </div>
    
  )
}
export default GameDeveloper