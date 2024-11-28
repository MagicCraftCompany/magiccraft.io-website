import Header from '@/components/Header/Header'
import { ChevronDown } from 'lucide-react'

export default function Verify() {
  return (
    <div className="min-h-dvh w-full text-white ">
      <Header/>

      {/* Banner Section */}
      <div className="relative">
        {/* Desktop Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728187/Image_4_a6xltr.webp"
          className="hidden lg:block"
          alt="Disclaimer banner"
          width={1920}
          height={500}
        />

        {/* Tablet Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728036/Image_6_mts4sr.webp"
          className="hidden md:block lg:hidden"
          alt="Disclaimer banner"
          width={1024}
          height={700}
        />

        {/* Mobile Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728028/Image_5_caa7pl.webp"
          className="block md:hidden"
          alt="Disclaimer banner"
          width={375}
          height={500}
        />

        {/* Overlay Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            MagicCraft Verify
          </h1>
        </div>
      </div>

      {/* Verification Form */}
      <div className="container mx-auto px-4 py-8 -mt-[100px]">
        <div className="max-w-3xl mx-auto bg-[#0F1137]/80 rounded-2xl p-6 backdrop-blur-sm">
          <div className="space-y-6">
            {/* Platform Selector */}
            <div>
              <label htmlFor="platform" className="block text-sm mb-2">Choose the platform:</label>
              <div className="relative">
                <select
                  id="platform"
                  className="w-full bg-[#141632] border border-[#1C1F45] rounded-md py-2 px-3 appearance-none text-white"
                >
                  <option value="telegram">Telegram</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
              </div>
            </div>

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

