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
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732696195/Frame_307520_ute5lk.webp"
          className="hidden h-[500px] w-full object-cover lg:block"
          alt=""
        />

        {/* Tablet Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732696204/Image_3_wtr574.webp"
          className="hidden h-[700px] w-full object-cover md:block lg:hidden"
          alt=""
        />

        {/* Mobile Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732696195/Image_2_qgwr9m.webp"
          className="block h-[500px] w-full object-cover md:hidden"
          alt=""
        />

        {/* Overlay Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            PRIVACY POLICY
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="-mt-20 flex justify-center">
        <main className="z-10 flex h-full max-w-[100em] flex-col gap-[30px] rounded-[30px] bg-[#11113A] p-6 lg:p-10">
          {/* Privacy Policy Content */}
          <div className="mx-auto max-w-4xl">
            {/* Last Updated Notice */}
            <div className="mb-4 w-fit rounded-4xl bg-[#4457B84D] p-4 text-sm text-[#98FFF9]">
              Last updated: 31st March 2023
            </div>
 

            </div>
            </main>
            <Footer/>
      </div>
    </div>
    
  )
}
export default GameDeveloper