import Header from "@/components/Header/Header";
import HoldersTable from "@/components/TopHoldersTable";
import { Helmet } from 'react-helmet-async'

function HoldersPage(){
    return(
        <div className="min-h-dvh w-full text-white ">
        <Helmet>
          <title>Top Holders | MagicCraft</title>
          <meta name="description" content="View the top $MCRT token holders. Community members who hold the most MCRT are entitled to fight for the title." />
        </Helmet>
        <Header />
        <div className="relative">
        {/* Desktop Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732780930/Image_9_rqkm4a.webp"
          className="hidden lg:block"
          alt="verify banner"
          loading="lazy"
        />

        {/* Tablet Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732780930/Image_10_iorpxg.webp"
          className="hidden md:block lg:hidden"
          alt="verify banner"
          loading="lazy"
        />

        {/* Mobile Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732780930/Image_11_fmkaef.webp"
          className="block md:hidden"
          alt="verify banner"
          loading="lazy"
        />

        {/* Overlay Title */}
        <div className="absolute inset-0 flex  flex-col items-center justify-center">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
          Top 100 holders
          </h1>
          <div className=" md:w-[800px] w-[300px]  bg-gradient-to-r from-transparent via-[#9255E0]   to-transparent p-px "/>

          <h1 className="  ">
          Community members who hold the most MCRT are entitled to fight for the title.
          </h1>
        </div>
      </div>
      <div className="flex justify-center ">
      <div className="z-10 flex h-full max-w-[120em]  flex-col gap-[30px] rounded-[30px]   bg-[#11113A] lg:p-10 p-6 -mt-40 ">           
         <HoldersTable/>
        </div>
      </div>
      </div>

    )
}
export default HoldersPage;