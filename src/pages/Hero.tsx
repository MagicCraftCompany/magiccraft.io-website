import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'

import one from '@/assets/icons/1.svg'
import heart from '@/assets/icons/li_heart.svg'
import arrow from '@/assets/icons/game-icons_fast-arrow.svg'
import HeroCarousel from '@/components/HeroCarousel'
import { characterData } from '@/components/Data/Characterdata'
import { slugifyHeroName } from '@/lib/heroSlug'
// import { AbilityDetails } from '@/components/abilitydetail'

function Hero() {
  const { heroName } = useParams()
  const characters = characterData[0]
  const normalizedHeroName = heroName ?? ''
  const characterIndex = characters.findIndex(
    (character) => slugifyHeroName(character.name) === normalizedHeroName
  )
  const character = characterIndex >= 0 ? characters[characterIndex] : undefined
  const abilities = character?.abilities || []
  const previousCharacter =
    characterIndex >= 0
      ? characters[(characterIndex - 1 + characters.length) % characters.length]
      : undefined
  const nextCharacter =
    characterIndex >= 0
      ? characters[(characterIndex + 1) % characters.length]
      : undefined

  const pageTitle = character
    ? `${character.name} - ${character.title}`
    : 'Heroes - MagicCraft'
  const pageDescription = character
    ? character.description
    : 'Browse MagicCraft heroes, their roles, abilities, and gameplay identities.'
  const canonicalUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${character ? `/hero/${normalizedHeroName}` : '/Chooseyourhero'}`
      : character
        ? `/hero/${normalizedHeroName}`
        : '/Chooseyourhero'

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        {character?.visuals?.background_image?.desktop && (
          <meta
            property="og:image"
            content={character.visuals.background_image.desktop}
          />
        )}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-dvh w-full text-white">
        <Header />
        <main className="scroll-smooth pb-32">
          {!character && (
            <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(152,255,249,0.12),transparent_35%),linear-gradient(180deg,#03082F_0%,#020418_100%)]" />
              <div className="relative mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-white/5 p-8 text-center shadow-[0_0_50px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-12">
                <span className="inline-flex rounded-full border border-[#98FFF9]/25 bg-[#98FFF9]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#98FFF9]">
                  Hero Directory
                </span>
                <h1 className="mt-6 bg-gradient-to-b from-white to-white/70 bg-clip-text font-serif text-4xl text-transparent sm:text-5xl">
                  Hero not found
                </h1>
                <p className="mx-auto mt-4 max-w-xl text-sm text-white/70 sm:text-base">
                  This hero page does not exist or the link is outdated. Use the
                  roster to browse the current MagicCraft lineup.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    to="/Chooseyourhero"
                    className="inline-flex min-w-[190px] items-center justify-center rounded-full bg-gradient-to-b from-[#A9FFF6] to-[#8EECE6] px-6 py-3 text-sm font-semibold text-[#03082F] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Browse Heroes
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 transition-colors duration-200 hover:border-[#98FFF9]/40 hover:text-[#98FFF9]"
                  >
                    Back Home
                  </Link>
                </div>
              </div>
            </section>
          )}

          {character && (
            <section className="relative flex flex-wrap bg-cover bg-center">
              <div
                className={`absolute inset-0 z-10 hidden ${character?.name === 'Dr. Lutz' ? 'w-full' : 'w-3/4'} bg-gradient-to-r  from-[#03082F] via-[#060817]  to-transparent lg:block`}
              />
              <div
                className={`absolute inset-0 z-10 bg-gradient-to-t   from-[#03082F] via-[#060817]  to-transparent sm:hidden`}
              />
              {/* <div className={`absolute inset-0 hidden sm:block lg:hidden z-10 bg-gradient-to-l from-[#03082F]/95 via-[#060817]/90 to-[#03082F]/70`} /> */}

              <div className="absolute left-4 top-20 z-30 sm:left-6 lg:left-10">
                <Link
                  to="/Chooseyourhero"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0d143e]/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur transition-colors hover:border-[#98FFF9]/40 hover:text-[#98FFF9]"
                >
                  <span aria-hidden="true">←</span>
                  All Heroes
                </Link>
              </div>

              <img
                src={
                  character?.visuals.background_image.desktop ||
                  '/placeholder.svg'
                }
                alt={character?.name}
                className={`relative hidden h-[600px] bg-cover bg-center lg:ml-auto lg:block lg:h-[700px]`}
                loading="lazy"
              />

              <img
                src={
                  character?.visuals.background_image.tab || '/placeholder.svg'
                }
                alt={character?.name}
                className="relative hidden h-[600px] w-full bg-cover bg-center sm:hidden md:block md:h-[700px] lg:hidden"
                loading="lazy"
              />

              <img
                src={
                  character?.visuals.background_image.mobile ||
                  '/placeholder.svg'
                }
                className="relative block h-[500px] w-full bg-cover bg-center sm:h-[600px] md:hidden"
              />

              <div className="z-20 flex w-full rounded-lg">
                <div className="absolute inset-0 mt-10 flex w-full flex-col justify-center px-4 text-center sm:mt-0 sm:items-center sm:px-6 md:-mt-10 md:w-fit md:items-start md:px-8 lg:-top-[20em] lg:ml-[20em] lg:mt-40 lg:px-0 lg:text-left">
                  <span className="m-4 hidden w-fit justify-center rounded-[2em] bg-[#4457b84d] px-4 py-2 text-[#98FFF9] lg:block">
                    <div className="flex flex-wrap">
                      <img src={one} className="px-2" />{' '}
                      {character?.role.primary}
                    </div>
                  </span>
                  <span className="mx-auto mb-3 hidden w-fit justify-center rounded-[2em] bg-[#4457b84d] px-3 py-1.5 text-[#98FFF9] sm:inline-flex md:hidden">
                    <div className="flex items-center">
                      <img src={one} className="mr-1 h-4 w-4" />{' '}
                      <span className="text-sm">{character?.role.primary}</span>
                    </div>
                  </span>
                  <h1 className="mx-auto max-w-md bg-gradient-to-b from-white to-white/75 bg-clip-text font-serif text-2xl text-transparent drop-shadow-xl sm:max-w-lg lg:mx-0">
                    <span className="text-3xl font-bold sm:text-4xl lg:p-5 lg:text-6xl">
                      {character?.name.toUpperCase()}
                    </span>
                    <br />
                    <span className="text-base font-bold sm:text-lg lg:p-5">
                      {character?.title.toUpperCase()}
                    </span>
                  </h1>
                  <div className="m-2 mx-auto block h-px w-max bg-gradient-to-r from-transparent via-[#556DE0] to-transparent lg:hidden" />
                  <div className="hidden h-px w-5/12 bg-gradient-to-r from-transparent via-[#556DE0] to-transparent lg:block" />

                  <p className="mx-auto bg-[#131342]/30 p-4 text-sm backdrop-blur-sm sm:max-w-md sm:rounded-xl sm:border sm:border-[#556DE0]/20 sm:text-base sm:shadow-[0_0_15px_rgba(152,255,249,0.1)] md:max-w-sm lg:mx-0 lg:max-w-md lg:border-none lg:bg-transparent lg:shadow-none lg:backdrop-blur-none">
                    {character?.description}
                  </p>
                  <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                    <Link
                      to="/Chooseyourhero"
                      className="inline-flex min-w-[170px] items-center justify-center rounded-full bg-gradient-to-b from-[#A9FFF6] to-[#8EECE6] px-5 py-3 text-sm font-semibold text-[#03082F] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      Explore Roster
                    </Link>
                    <a
                      href="https://lobby.magiccraft.io/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex min-w-[170px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition-colors duration-200 hover:border-[#98FFF9]/40 hover:text-[#98FFF9]"
                    >
                      Play Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="z-20 flex w-full items-center justify-center">
                <div className="mx-3 mt-[300px] flex w-[90%] flex-col items-center gap-[0.5em] rounded-[1.875em] border border-[#556DE0]/20 bg-[#13152E]/70 py-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-[0.71875em] sm:mx-6 sm:mt-[350px] md:mx-auto md:mt-0 md:w-[704px] lg:-mt-40 lg:ml-[15.125em] lg:w-fit lg:flex-row lg:py-0">
                  <div className="flex w-full flex-row flex-wrap justify-between px-4 md:w-fit lg:px-0">
                    <div className="relative h-fit w-fit overflow-hidden rounded-[20px] lg:flex lg:flex-col lg:px-2">
                      <h4 className="flex flex-row p-1 text-xs sm:text-sm md:text-base">
                        Game role:{' '}
                        <div className="flex flex-row items-center px-2 text-[#98FFF9]">
                          <img
                            src={one}
                            className="mr-1 h-5 w-5 md:mr-0 md:h-8 md:w-8 md:px-2"
                          />{' '}
                          {character?.role.class}
                        </div>
                      </h4>
                      <h4 className="flex flex-row p-1 text-xs sm:text-sm md:text-base">
                        Difficulty:{' '}
                        <div className="ml-2 flex flex-row rounded-3xl bg-[#1F2E32] px-4 text-[#8EFF49] md:ml-6">
                          <div className="mr-1 mt-2 h-1 w-1 rounded-3xl bg-[#8EFF49] text-[10px] md:mx-2 md:mr-2 md:h-2 md:w-2 md:text-sm"></div>
                          {character?.difficulty}
                        </div>
                      </h4>
                    </div>

                    <div className="relative flex h-fit w-fit flex-col overflow-hidden rounded-[20px] px-2">
                      <h4 className="flex flex-row p-1 text-xs sm:text-sm md:text-base">
                        MP:{' '}
                        <div className="flex flex-row items-center pl-2 text-[#98FFF9] md:pl-10">
                          <img
                            src={heart}
                            className="hidden px-2 md:block md:h-8 md:w-8"
                          />{' '}
                          {character?.MP}
                        </div>
                      </h4>
                      <h4 className="flex flex-row p-1 text-xs sm:text-sm md:text-base">
                        Mobility:{' '}
                        <div className="flex flex-row items-center px-1 text-[#98FFF9] md:px-2">
                          <img
                            src={arrow}
                            className="hidden px-2 md:block md:h-8 md:w-8"
                          />{' '}
                          {character?.mobility}
                        </div>
                      </h4>
                    </div>
                  </div>
                  <div className="my-8 hidden h-[3em] w-px bg-gradient-to-t from-transparent via-[#98FFF9] to-transparent lg:block" />
                  <div className="my-4 block h-px w-[10em] bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent md:my-8 lg:hidden" />

                  <div className="relative flex h-fit w-fit flex-col items-center justify-center overflow-hidden rounded-[20px] px-2 md:flex-row">
                    <div className="mb-2 text-xs font-medium text-white/90 sm:text-sm md:mb-0 md:text-base lg:text-base">
                      Abilities:
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:p-2">
                      {abilities.map((ability) => (
                        <div
                          key={ability.id}
                          className="flex w-full flex-wrap rounded-xl border border-[#556DE0]/30 bg-[#131342]/60 p-2 backdrop-blur-sm transition-all duration-300 hover:border-[#98FFF9]/40 hover:shadow-[0_0_10px_rgba(152,255,249,0.2)] sm:w-auto"
                        >
                          <img
                            src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image1393_uyesc3.webp"
                            className="mr-2 hidden h-8 w-8 object-contain sm:block md:h-10 md:w-10 lg:h-12 lg:w-12"
                          />
                          <div className="ml-1 flex flex-col">
                            <p className="text-xs font-medium text-[#98FFF9] sm:text-sm md:text-base">
                              {ability.name}
                            </p>
                            <div className="flex items-center">
                              <span className="text-xs text-white/70 sm:text-sm md:text-base">
                                Damage:
                              </span>
                              <span className="ml-1 rounded-md bg-[#131342] px-2 py-0.5 text-xs font-medium text-[#98FFF9] sm:text-sm">
                                {ability.damage}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {/* TODO: Uncomment when up-to-date screenshots are available */}
          {/* <section>
            <AbilityDetails characterName={character?.name || ''} abilities={abilitiesdetails} />
          </section> */}
          {character && previousCharacter && nextCharacter && (
            <section className="mx-auto mt-8 flex w-[92%] max-w-screen-xl flex-col gap-3 sm:flex-row">
              <Link
                to={`/hero/${slugifyHeroName(previousCharacter.name)}`}
                className="group flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur transition-all duration-300 hover:border-[#98FFF9]/35 hover:bg-white/[0.07]"
              >
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                  Previous Hero
                </div>
                <div className="mt-2 text-lg font-semibold text-white group-hover:text-[#98FFF9]">
                  {previousCharacter.name}
                </div>
                <div className="text-sm text-white/55">
                  {previousCharacter.title}
                </div>
              </Link>
              <Link
                to={`/hero/${slugifyHeroName(nextCharacter.name)}`}
                className="group flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-right backdrop-blur transition-all duration-300 hover:border-[#98FFF9]/35 hover:bg-white/[0.07]"
              >
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                  Next Hero
                </div>
                <div className="mt-2 text-lg font-semibold text-white group-hover:text-[#98FFF9]">
                  {nextCharacter.name}
                </div>
                <div className="text-sm text-white/55">
                  {nextCharacter.title}
                </div>
              </Link>
            </section>
          )}
          <section className="relative">
            <HeroCarousel />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
export default Hero
