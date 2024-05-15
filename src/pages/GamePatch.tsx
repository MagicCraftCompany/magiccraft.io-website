import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

function GamePatch() {
  return (
    <>
      <div className="min-h-dvh w-full text-white">
        <Header />
        <main className="scroll-smooth pb-32">
          <section className="bg-bgpatch relative h-[700px] bg-cover bg-center">
            <div className="bgpatch-bg-gradient absolute inset-0  h-full w-full"></div>
            <div className="m-4 flex h-[300px] justify-center space-y-5 text-center md:px-10  flex-col">
              <h1 className="mx-auto max-w-xl font-serif text-5xl flex flex-wrap  ">
                GAME PATCHES V.23270
              </h1>
              <div className="block h-px w-full bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
export default GamePatch
