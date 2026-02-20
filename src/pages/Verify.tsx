import Header from '@/components/Header/Header'
import { ChevronDown } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export default function Verify() {
  return (
    <div className="min-h-dvh w-full text-white ">
      <Helmet>
        <title>Verify | MagicCraft Official Links</title>
        <meta name="description" content="Use MagicCraft Verify to check whether a source officially represents MagicCraft. Verify websites, emails, Telegram IDs, and more." />
      </Helmet>
      <Header/>

      {/* Banner Section */}
      <div className="relative">
        {/* Desktop Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728187/Image_4_a6xltr.webp"
          className="hidden lg:block"
          alt="verify banner"
          loading="lazy"
        />

        {/* Tablet Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728036/Image_6_mts4sr.webp"
          className="hidden md:block lg:hidden"
          alt="verify banner"
          loading="lazy"
        />

        {/* Mobile Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728028/Image_5_caa7pl.webp"
          className="block md:hidden"
          alt="verify banner"
          loading="lazy"
        />

        {/* Overlay Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            MagicCraft Verify
          </h1>
        </div>
      </div>

      {/* Verification Form */}
      <div className="container mx-auto px-4 py-8 -mt-[200px] gap-4">
        <div className="max-w-3xl mx-auto bg-[#0F1137]/80 rounded-2xl p-6 backdrop-blur-sm">
          <div className="space-y-6">
            {/* Platform Selector */}
            <div className='flex flex-row justify-between'>
              <label htmlFor="platform" className="block text-sm mb-2">Choose the platform:</label>

              <div className="relative">
                <select
                  id="platform"
                  className="w-full bg-[#141632] border-solid border-[1px] border-[#98FFF9] rounded-4xl py-2 px-8 appearance-none text-white"
                >
                  <option value="telegram" className='px-2 text-[#98FFF9] '>Telegram</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#98FFF9] pointer-events-none " />
              </div>
            </div>
            <div className="   bg-gradient-to-r from-transparent via-[#98FFF9]   to-transparent p-px "/>

            {/* Query Input */}
            <div>
              <label htmlFor="query" className="block text-sm mb-2">Entry Query</label>
              <div className="flex gap-3">
                <input
                  id="query"
                  type="text"
                  placeholder="Entry Query"
                  className="flex-1 bg-[#141632] border border-[#1C1F45] rounded-md py-2 px-3 text-white placeholder-gray-400"
                />
                <button className="px-8 py-2 bg-[#7EE7FC] hover:bg-[#7EE7FC]/90 text-black font-medium rounded-md">
                  Check
                </button>
              </div>
            </div>
            <div className="   bg-gradient-to-r from-transparent via-[#98FFF9]   to-transparent p-px "/>

            {/* Info Text */}
            <div className="text-center space-y-2">
              <p className="font-medium">Dear MagicCrafters!</p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Please use MagicCraft Verify to check whether the source officially represents MagicCraft.
                <br />
                Website link, email address, phone number, WeChat ID, Twitter account or Telegram ID.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

