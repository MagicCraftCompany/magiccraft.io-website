import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react'

// Hero data structure
interface Hero {
  id: string
  name: string
  image: string
  comingSoon?: boolean
}

// Sample hero data
const heroes: Hero[] = [
  { id: '1', name: 'ZAP', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_z0ukji.webp' },
  { id: '2', name: 'DRUID', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_1_fzdlkt.webp' },
  { id: '3', name: 'JEAN', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_2_mqz53g.webp' },
  { id: '4', name: 'AMUN', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_3_ell268.webp' },
  { id: '5', name: 'VLADISLAV', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_4_fqjech.webp' },
  { id: '6', name: 'MOIRA', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280871/image_19_5_zkalot.webp' },
  { id: '7', name: 'KARAS', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_6_stevwh.webp' },
  { id: '8', name: 'GAIL', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_7_mn47kd.webp' },
  // { id: '9', name: 'LEILA', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280871/image_19_8_bi3mce.webp' },
  { id: '9', name: 'CALLIE', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280871/image_19_9_lsrom5.webp' },
  { id: '10', name: 'TRUESHOT', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280871/image_19_10_sz7eqb.webp' },
  { id: '11', name: 'DR. LUTZ', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280871/image_19_11_ptqt4j.webp' },
  { id: '12', name: 'TARA', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280874/image_19_12_uybthz.webp' },
  { id: '13', name: 'BLAZY', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280873/image_19_13_a4vhmd.webp' },
  { id: '14', name: 'BJORN', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280875/image_19_14_vrnkua.webp' },
  { id: '15', name: 'FRIGARD', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280875/image_19_15_m1yugr.webp' },
  { id: '16', name: 'VEGA', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280872/image_19_16_lwlhzb.webp' },
  { id: '17', name: 'BRIENNE', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280872/image_19_17_rzbzrb.webp' },
  { id: '18', name: 'RONIN', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160459/RONIN_1_ejhaez.webp' },
  { id: '19', name: 'CRAIG', image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160372/KRAG_1_cnmy9b.webp' },
]

function HeroCard({ hero }: { hero: Hero }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/hero/${hero.name.toLowerCase()}`)}
      className="group relative overflow-hidden rounded-2xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <div className="aspect-square">
        <img 
          src={hero.image}
          alt={`${hero.name} character portrait`}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <h3 className="text-lg font-bold text-white">{hero.name}</h3>
      </div>
      {hero.comingSoon && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <span className="rounded-full bg-primary px-4 py-2 text-sm font-semibold">Coming Soon</span>
        </div>
      )}
    </button>
  )
}

export default function ChooseYourHero() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])
  return (
    <div className="min-h-dvh w-full  text-white">
      <Helmet>
        <title>Choose Your Hero - Hero Selector</title>
        <meta name="description" content="Select your hero for epic battles in the game." />
      </Helmet>
      <Header />
      <main className="scroll-smooth pb-32">
        <section className="relative px-4 py-12 md:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-serif">
              CHOOSE YOUR HERO
            </h1>
            <p className="mx-auto mb-12 max-w-3xl text-lg text-gray-400">
              From magical healers to fierce fighters and cunning rogues, each hero is designed and perfectly diverse.
              Browse incredible abilities and devastating ultimates in your way to victory.
            </p>
            {/* <div className="mb-8 flex items-center justify-center gap-4">
              <Button variant="outline" className="rounded-full">
                All Heroes
              </Button>
              <Button variant="outline" className="rounded-full">
                Support
              </Button>
              <Button variant="outline" className="rounded-full">
                Tank
              </Button>
              <Button variant="outline" className="rounded-full">
                Fighter
              </Button>
            </div> */}
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-serif" >
            {heroes.map((hero) => (
              <HeroCard key={hero.id} hero={hero} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

