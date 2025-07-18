import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import OpenSourceFeatures from '@/components/ui/gamedevelopercard'
import { Helmet } from 'react-helmet-async';

function GameDeveloper() {
  const handleApplyClick = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdLmfHGXcXaguZynLSIlk7cSjlvBF9etB50SQc6yDCeayeHYw/viewform";
  };
  return (
    <div className="min-h-dvh w-full text-white">
      <Helmet>
        <title>Game Developer - MagicCraft</title>
        <meta name="description" content="Build on MagicCraft's ecosystem and earn $MCRT. Integrate your games, create custom skins, and leverage open-source character rigs." />
      </Helmet>
      {/* Header */}
      <Header />

      {/* Banner Section */}
      <div className="relative">
        {/* Desktop Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733825996/Image_15_tnvsad.webp"
          className="hidden h-full w-full object-cover lg:block"
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
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <h1 className="text-center font-serif text-4xl font-bold md:text-5xl lg:-mt-[10rem]">
            build on magiccraft <br/> and earn $MCRT
          </h1>
          <p className="lg:mx-auto max-w-3xl text-center text-lg text-gray-200 mx-6">
            MagicCraft’s ecosystem empowers external developers to integrate
            their games seamlessly, embed MCRT as a universal currency, and
            leverage open-source character rigs to create and sell custom skins
            as NFTs—all supported by secure smart contracts, scalable
            infrastructure, and intuitive development tools.{' '}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-md bg-[#98FFF9] px-4 py-2 text-black hover:bg-[#98FFF9]/90" onClick={handleApplyClick}>
              Apply
            </button>
            {/* <button className="rounded-md border-[1px] border-solid border-[#98FFF9]  px-4 py-2 text-[#98FFF9]">
              More Info
            </button> */}
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div>
        <div className="flex flex-col justify-center md:-mt-[14rem]">
        <div className=" absolute h-full w-full bg-gradient-to-b from-transparent via-[#020418] to-transparent mt-[40rem]" />

          {/* <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#020418]"></div> */}
          <img
            src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1734081590/Desktop_-_33_dqmuzd.webp"
            alt="MagicCraft Dashboard"
            className="z-10 mx-auto lg:mt-8 w-full max-w-5xl rounded-lg shadow-lg "
          />
          <section className="z-20 mx-auto flex h-full max-w-6xl  flex-col gap-[30px] rounded-[30px] bg-[#11113A] p-6 lg:p-10 lg:-mt-[20rem] -mt-[6rem]">
            <div className="">
              <div className="flex flex-row justify-between">
                <h2 className="mb-12 font-serif text-3xl font-bold text-white">
                  CONTRIBUTE AND EARN
                </h2>
                <p className="hidden w-[30%] text-[#979CE7] md:block">
                  {' '}
                  <span className="font-bold text-[#fff]">Apply now</span> to
                  join the MagicCraft ecosystem and shape the future of
                  interoperable Web3 gaming
                </p>
              </div>
              <div className="grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-5">
                <div className="rounded-2xl border-none bg-[#0C0C29] p-6">
                  <img
                    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1735019329/Property_1_005-puzzle_rv8cgj.webp"
                    alt="Harness the Power of Blockchain"
                    className="mb-4 h-12 w-12 text-[#98FFF9]"
                  />
                  <h3 className="mb-2 text-xl font-bold text-[#98FFF9]">
                    Integration SDKs
                  </h3>
                  <div className="h-[1px] w-full bg-gradient-to-r from-[#556DE0] to-[#0C0C29]" />
                  <p className="my-4 text-gray-400">
                    Instant APIs for cross-game asset compatibility{' '}
                  </p>
                </div>
                <div className="rounded-2xl border-none bg-[#0C0C29]  p-6">
                  <img
                    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1735019330/Property_1_001-bitcoin_iqkgsw.webp"
                    className="mb-4 h-12 w-12 "
                  />
                  <h3 className="mb-2 text-xl font-bold text-[#98FFF9]">
                    MCRT Currency
                  </h3>
                  <div className="h-[1px] w-full bg-gradient-to-r from-[#556DE0] to-[#0C0C29]" />

                  <p className="my-4 text-gray-400">
                    A stable, on-chain token for frictionless transactions{' '}
                  </p>
                </div>
                <div className="rounded-2xl border-none bg-[#0C0C29]  p-6">
                  <img
                    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1735019330/Property_1_002-status_vjzw05.webp"
                    className="mb-4 h-12 w-12 "
                  />
                  <h3 className="mb-2 text-xl font-bold text-[#98FFF9]">
                    Open-Source Characters
                  </h3>
                  <div className="h-[1px] w-full bg-gradient-to-r from-[#556DE0] to-[#0C0C29]" />

                  <p className="my-4 text-gray-400">
                    Download rigged FBX files, build unique skins, and submit
                    them for NFT minting{' '}
                  </p>
                </div>
                <div className="rounded-2xl border-none bg-[#0C0C29] p-6">
                  <img
                    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1735019343/Property_1_003-revenue-growth_mjzr99.webp"
                    className="mb-4 h-12 w-12 text-[#98FFF9]"
                  />
                  <h3 className="mb-2 text-xl font-bold text-[#98FFF9]">
                    Marketplace Revenue
                  </h3>
                  <div className="h-[1px] w-full bg-gradient-to-r from-[#556DE0] to-[#0C0C29]" />

                  <p className="my-4 text-gray-400">
                    Earn from initial and secondary sales, fully automated by
                    smart contracts{' '}
                  </p>
                </div>
                <div className="rounded-2xl border-none bg-[#0C0C29] p-6">
                  <img
                    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1735019329/Property_1_004-vocabulary_a1szte.webp"
                    className="mb-4 h-12 w-12 text-[#98FFF9]"
                  />
                  <h3 className="mb-2 text-xl font-bold text-[#98FFF9]">
                    Developer Resources
                  </h3>
                  <div className="h-[1px] w-full bg-gradient-to-r from-[#556DE0] to-[#0C0C29]" />
                  <p className="my-4 text-gray-400">
                    Robust documentation, active community, and dedicated
                    support
                  </p>{' '}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="my-[70px] ">

          <OpenSourceFeatures />
        </div>
        {/* How It Works Section */}
        <section className=" px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 items-center justify-center text-center font-serif text-3xl font-bold ">
              Apply Now to join our map-making community <br /> and help shape
              the MagicCraft world.
            </h2>
            <div className="grid gap-6 md:grid-cols-4">
              <div className="h-fit rounded-2xl border-[1px] border-solid border-[#3F3F7A] bg-[#11113A] p-6">
                <div className="mb-4 w-fit rounded-full bg-[#0C0B25] px-4 py-2 text-sm font-medium text-[#98FFF9]">
                  STEP 1
                </div>
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent" />
                <h3 className="mb-4 mt-4 text-xl font-bold">
                  Access Our Assets
                </h3>
                <p className="text-gray-400">
                  Download the environment packs and Unity project files we
                  provide{' '}
                </p>
              </div>
              <div className="rounded-2xl border-[1px] border-solid border-[#3F3F7A] bg-[#11113A] p-6 ">
                <div className="mb-4 w-fit rounded-full bg-[#0C0B25] px-4 py-2 text-sm font-medium text-[#98FFF9]">
                  STEP 2
                </div>
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent" />

                <h3 className="mb-4 mt-4 text-xl font-bold">
                  Build & Innovate
                </h3>
                <p className="text-gray-400">
                  Design maps that enhance gameplay, introduce new tactical
                  elements, or showcase your unique style{' '}
                </p>
              </div>
              <div className="rounded-2xl border-[1px] border-solid border-[#3F3F7A] bg-[#11113A] p-6 ">
                <div className="mb-4 w-fit rounded-full bg-[#0C0B25] px-4 py-2 text-sm font-medium text-[#98FFF9]">
                  STEP 3
                </div>
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent" />

                <h3 className="mb-4 mt-4 text-xl font-bold">
                  Submit for Approval
                </h3>
                <p className="text-gray-400">
                  Once finalized, send your map to us for review, integration,
                  and listing{' '}
                </p>
              </div>
              <div className="h-fit rounded-2xl border-[1px] border-solid border-[#3F3F7A] bg-[#11113A] p-6">
                <div className="mb-4 w-fit rounded-full bg-[#0C0B25] px-4 py-2 text-sm font-medium text-[#98FFF9]">
                  STEP 4
                </div>
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent" />

                <h3 className="mb-4 mt-4 text-xl font-bold">Earn Rewards</h3>
                <p className="text-gray-400">
                  Receive a share of proceeds generated by player activity on
                  your map{' '}
                </p>
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <button className="rounded-md bg-[#98FFF9] px-4 py-2 text-black"
              onClick={handleApplyClick}>
                Apply
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
export default GameDeveloper
