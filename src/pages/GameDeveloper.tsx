import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import OpenSourceFeatures from '@/components/ui/gamedevelopercard'
import { Helmet } from 'react-helmet-async'

const DEVELOPER_APPLICATION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdLmfHGXcXaguZynLSIlk7cSjlvBF9etB50SQc6yDCeayeHYw/viewform'

function GameDeveloper() {
  return (
    <div className="min-h-dvh w-full text-white">
      <Helmet>
        <title>Build on MagicCraft | Developer Program</title>
        <meta
          name="description"
          content="Explore MagicCraft developer resources and apply to contribute maps or integrations. Applications, participation, and rewards are subject to review."
        />
        <meta
          name="keywords"
          content="MagicCraft, Game Maker, $MCRT, game development, Web3, MOBA, build games, create maps, developer program"
        />
        <meta
          property="og:title"
          content="Build on MagicCraft | Developer Program"
        />
        <meta
          property="og:description"
          content="Explore MagicCraft developer resources and submit your project for review."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://magiccraft.io/build-on-magiccraft"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Game Developer - MagicCraft',
            description:
              'Explore MagicCraft developer resources and submit a map or integration project for review.',
            url: 'https://magiccraft.io/build-on-magiccraft',
          })}
        </script>
      </Helmet>
      {/* Header */}
      <Header />

      <main>
        {/* Banner Section */}
        <div className="relative">
          {/* Desktop Image */}
          <img
            src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733825996/Image_15_tnvsad.webp"
            className="hidden h-full w-full object-cover lg:block"
            alt="MagicCraft Game Maker hero"
            loading="eager"
          />

          {/* Tablet Image */}
          <img
            src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733825996/Image_16_ukhd4o.webp"
            className="hidden h-[700px] w-full object-cover md:block lg:hidden"
            alt="MagicCraft Game Maker hero"
            loading="eager"
          />

          {/* Mobile Image */}
          <img
            src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733825996/Image_16_ukhd4o.webp"
            className="block h-[500px] w-full object-cover md:hidden"
            alt="MagicCraft Game Maker hero"
            loading="eager"
          />

          {/* Overlay Title */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <h1 className="bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-center font-serif text-4xl font-bold text-transparent drop-shadow-xl md:text-5xl lg:-mt-[10rem] lg:text-6xl">
              Build on MagicCraft
            </h1>
            <p className="mx-6 max-w-3xl text-center text-base text-gray-200 md:text-lg lg:mx-auto">
              Explore the MagicCraft map-making program, review the available
              resources, and submit your project for consideration. Approved
              contributors may receive access to project assets and integration
              support. Participation and rewards depend on review and program
              terms.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <a
                href={DEVELOPER_APPLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-lg bg-[#98FFF9] px-5 py-2 font-semibold text-[#03082F] shadow transition hover:bg-[#98FFF9]/90 md:rounded-xl md:px-6 md:py-3"
                aria-label="Apply to the MagicCraft developer program"
              >
                Apply
              </a>
              <a
                href="https://docs.magiccraft.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-lg border border-[#98FFF9]/70 bg-black/30 px-5 py-2 font-semibold text-white backdrop-blur-sm transition hover:border-white md:rounded-xl md:px-6 md:py-3"
                aria-label="Read MagicCraft developer documentation"
              >
                Read Docs
              </a>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div>
          <div className="flex flex-col justify-center md:-mt-[14rem]">
            <div className=" absolute mt-[40rem] h-full w-full bg-gradient-to-b from-transparent via-[#020418] to-transparent" />

            {/* <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#020418]"></div> */}
            <img
              src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1734081590/Desktop_-_33_dqmuzd.webp"
              alt="MagicCraft Dashboard"
              className="z-10 mx-auto w-full max-w-5xl rounded-lg shadow-lg lg:mt-8 "
              loading="lazy"
              decoding="async"
            />
            <section className="z-20 mx-auto -mt-[6rem] flex h-full  max-w-6xl flex-col gap-[30px] rounded-[30px] bg-[#11113A] p-6 lg:-mt-[20rem] lg:p-10">
              <div className="">
                <div className="flex flex-row justify-between">
                  <h2 className="mb-12 font-serif text-3xl font-bold text-white">
                    CONTRIBUTE TO MAGICCRAFT
                  </h2>
                  <p className="hidden w-[30%] text-[#979CE7] md:block">
                    {' '}
                    <span className="font-bold text-[#fff]">Apply now</span> to
                    have your map or integration project reviewed by the
                    MagicCraft team.
                  </p>
                </div>
                <div className="grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-5">
                  <div className="rounded-2xl border-none bg-[#0C0C29] p-6">
                    <img
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1735019329/Property_1_005-puzzle_rv8cgj.webp"
                      alt="Harness the Power of Blockchain"
                      className="mb-4 h-12 w-12 text-[#98FFF9]"
                      loading="lazy"
                    />
                    <h3 className="mb-2 text-xl font-bold text-[#98FFF9]">
                      Integration Resources
                    </h3>
                    <div className="h-[1px] w-full bg-gradient-to-r from-[#556DE0] to-[#0C0C29]" />
                    <p className="my-4 text-gray-400">
                      Start with the current documentation and available
                      integration guidance.
                    </p>
                  </div>
                  <div className="rounded-2xl border-none bg-[#0C0C29]  p-6">
                    <img
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1735019330/Property_1_001-bitcoin_iqkgsw.webp"
                      className="mb-4 h-12 w-12 "
                      alt="MCRT currency"
                      loading="lazy"
                    />
                    <h3 className="mb-2 text-xl font-bold text-[#98FFF9]">
                      MCRT Currency
                    </h3>
                    <div className="h-[1px] w-full bg-gradient-to-r from-[#556DE0] to-[#0C0C29]" />

                    <p className="my-4 text-gray-400">
                      Learn where approved integrations may support $MCRT.
                    </p>
                  </div>
                  <div className="rounded-2xl border-none bg-[#0C0C29]  p-6">
                    <img
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1735019330/Property_1_002-status_vjzw05.webp"
                      className="mb-4 h-12 w-12 "
                      alt="Open-source characters"
                      loading="lazy"
                    />
                    <h3 className="mb-2 text-xl font-bold text-[#98FFF9]">
                      Open-Source Characters
                    </h3>
                    <div className="h-[1px] w-full bg-gradient-to-r from-[#556DE0] to-[#0C0C29]" />

                    <p className="my-4 text-gray-400">
                      Review available character assets and the requirements for
                      submitting original work.
                    </p>
                  </div>
                  <div className="rounded-2xl border-none bg-[#0C0C29] p-6">
                    <img
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1735019343/Property_1_003-revenue-growth_mjzr99.webp"
                      className="mb-4 h-12 w-12 text-[#98FFF9]"
                      alt="Marketplace revenue"
                      loading="lazy"
                    />
                    <h3 className="mb-2 text-xl font-bold text-[#98FFF9]">
                      Marketplace Review
                    </h3>
                    <div className="h-[1px] w-full bg-gradient-to-r from-[#556DE0] to-[#0C0C29]" />

                    <p className="my-4 text-gray-400">
                      Approved items may be considered for listing under the
                      applicable program terms.
                    </p>
                  </div>
                  <div className="rounded-2xl border-none bg-[#0C0C29] p-6">
                    <img
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1735019329/Property_1_004-vocabulary_a1szte.webp"
                      className="mb-4 h-12 w-12 text-[#98FFF9]"
                      alt="Developer resources"
                      loading="lazy"
                    />
                    <h3 className="mb-2 text-xl font-bold text-[#98FFF9]">
                      Developer Resources
                    </h3>
                    <div className="h-[1px] w-full bg-gradient-to-r from-[#556DE0] to-[#0C0C29]" />
                    <p className="my-4 text-gray-400">
                      Official documentation and community support channels.
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
                How developer applications work
              </h2>
              <div className="grid gap-6 md:grid-cols-4">
                <div className="h-fit rounded-2xl border-[1px] border-solid border-[#3F3F7A] bg-[#11113A] p-6">
                  <div className="mb-4 w-fit rounded-full bg-[#0C0B25] px-4 py-2 text-sm font-medium text-[#98FFF9]">
                    STEP 1
                  </div>
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent" />
                  <h3 className="mb-4 mt-4 text-xl font-bold">
                    Review Resources
                  </h3>
                  <p className="text-gray-400">
                    Read the current documentation and confirm that your project
                    fits the program.
                  </p>
                </div>
                <div className="rounded-2xl border-[1px] border-solid border-[#3F3F7A] bg-[#11113A] p-6 ">
                  <div className="mb-4 w-fit rounded-full bg-[#0C0B25] px-4 py-2 text-sm font-medium text-[#98FFF9]">
                    STEP 2
                  </div>
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent" />

                  <h3 className="mb-4 mt-4 text-xl font-bold">
                    Submit Your Idea
                  </h3>
                  <p className="text-gray-400">
                    Share your team, concept, working materials, and intended
                    MagicCraft integration.
                  </p>
                </div>
                <div className="rounded-2xl border-[1px] border-solid border-[#3F3F7A] bg-[#11113A] p-6 ">
                  <div className="mb-4 w-fit rounded-full bg-[#0C0B25] px-4 py-2 text-sm font-medium text-[#98FFF9]">
                    STEP 3
                  </div>
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent" />

                  <h3 className="mb-4 mt-4 text-xl font-bold">
                    Wait for Review
                  </h3>
                  <p className="text-gray-400">
                    The MagicCraft team reviews applications and follows up with
                    selected contributors.
                  </p>
                </div>
                <div className="h-fit rounded-2xl border-[1px] border-solid border-[#3F3F7A] bg-[#11113A] p-6">
                  <div className="mb-4 w-fit rounded-full bg-[#0C0B25] px-4 py-2 text-sm font-medium text-[#98FFF9]">
                    STEP 4
                  </div>
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent" />

                  <h3 className="mb-4 mt-4 text-xl font-bold">
                    Build After Approval
                  </h3>
                  <p className="text-gray-400">
                    Follow the agreed project scope and program terms. Inclusion
                    and rewards are not guaranteed.
                  </p>
                </div>
              </div>
              <div className="mt-12 flex justify-center">
                <a
                  href={DEVELOPER_APPLICATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-md bg-[#98FFF9] px-4 py-2 text-black"
                >
                  Apply
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
export default GameDeveloper
