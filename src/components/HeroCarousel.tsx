"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useNavigate } from 'react-router-dom'

interface Hero {
  id: number
  name: string
  image: string
}

const heroes: Hero[] = [
  { id: 1, name: "ZAP", image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740935624/Zap_pk1krd.webp" },
  {
    id: 2,
    name: "DRUID",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160246/DRUID_1_sxtwnz.webp",
  },
  {
    id: 3,
    name: "JEAN",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160370/JEAN_1_ixngfc.webp",
  },
  {
    id: 4,
    name: "AMUN",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740245569/image_261_1_rvn5tn.webp",
  },
  {
    id: 5,
    name: "VLADISLAV",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160462/VLADISLAV_1_awiznl.webp",
  },
  {
    id: 6,
    name: "MOIRA",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160458/MOIRA_1_dhacg5.webp",
  },
  {
    id: 7,
    name: "KARAS",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160230/KARAS_1_q2wpgv.webp",
  },
  {
    id: 8,
    name: "GAIL",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160455/GAIL_1_litgen.webp",
  },
  {
    id: 10,
    name: "CALLIE",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740935624/CALLIE_2_o06hcy.webp",
  },
  {
    id: 11,
    name: "TRUESHOT",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160370/ARCHER_1_dwe2sq.webp",
  },
  {
    id: 12,
    name: "DR. LUTZ",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160457/LUTZ_1_tvcmnw.webp",
  },
  {
    id: 13,
    name: "TARA",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160461/TARA_1_l4zw4f.webp",
  },
  {
    id: 14,
    name: "BLAZY",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160451/BLAIZY_1_simi1s.webp",
  },
  {
    id: 15,
    name: "BJORN",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740935624/BJORN_3_qdvhdu.webp",
  },
  {
    id: 16,
    name: "FRIGARD",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160454/FRIGARD_1_acxal4.webp",
  },
  {
    id: 17,
    name: "VEGA",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740935624/VEGA_3_sb9r02.webp",
  },
  {
    id: 18,
    name: "BRIENNE",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160370/Brienne_1_su9kbw.webp",
  },
  {
    id: 19,
    name: "CRAIG",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1741082672/KRAG_2_uioyzt.webp",
  },
  {
    id: 20,
    name: "RONIN",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160459/RONIN_1_ejhaez.webp",
  },
]

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(2)
  const [visibleCount, setVisibleCount] = useState(5)
  const [centerOffset, setCenterOffset] = useState(0)
  const [translateValue, setTranslateValue] = useState(320)
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1)
        setTranslateValue(0)
        setCenterOffset(0)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3)
        setTranslateValue(160)
        setCenterOffset(0)
      } else {
        setVisibleCount(5)
        setTranslateValue(200)
        setCenterOffset(0)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const moveLeft = () => {
    setActiveIndex((prev) => (prev === 0 ? heroes.length - 1 : prev - 1))
  }

  const moveRight = () => {
    setActiveIndex((prev) => (prev === heroes.length - 1 ? 0 : prev + 1))
  }

  const getVisibleHeroes = () => {
    const result = []
    const offset = Math.floor(visibleCount / 2)

    for (let i = -offset; i <= offset; i++) {
      let index = activeIndex + i
      if (index < 0) index = heroes.length + index
      if (index >= heroes.length) index = index - heroes.length
      result.push({ ...heroes[index], position: i })
    }
    return result.slice(0, visibleCount)
  }

  return (
    <div className="w-full bg-[#070B1A] flex flex-col items-center justify-center p-4 md:p-8">
      <div className="text-center mb-4">
        <button 
          className="mb-4 bg-cyan-200 text-cyan-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-cyan-300 transition-colors font-serif"
          onClick={() => navigate('/Chooseyourhero')}
        >
          GO TO ALL HEROES
        </button>
      
        <h2 className="text-white text-2xl md:text-3xl font-bold font-serif">CHOOSE ANOTHER HERO</h2>
      </div>

      <div className="relative w-full max-w-[1200px] h-[350px] md:h-[450px] mt-4">
        {/* Fixed height container for carousel */}
        <div className="absolute inset-0 flex items-center justify-center">
          {getVisibleHeroes().map((hero) => (
            <div
              key={hero.id}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${window.innerWidth < 768 ? centerOffset : hero.position * translateValue}px)`,
                zIndex: hero.position === 0 ? 10 : 5,
              }}
            >
              <div
                className={`transition-all duration-500 overflow-hidden rounded-2xl ${
                  hero.position === 0
                    ? "w-[240px] h-[320px] sm:w-48 sm:h-[340px] md:w-[260px] md:h-[420px] border-2 border-[#4BD5FF] sm:border-[#4BD5FF] scale-100"
                    : hero.position === -1 || hero.position === 1
                      ? "hidden sm:block sm:w-36 sm:h-[240px] md:w-[180px] md:h-[280px] opacity-60 blur-[1px] border border-[#1A2151] scale-95"
                      : "hidden sm:block sm:w-32 sm:h-[210px] md:w-[160px] md:h-[240px] opacity-40 blur-[2px] border border-[#1A2151] scale-90"
                }`}
              >
                <img
                  src={hero.image || "/placeholder.svg"}
                  alt={hero.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className={`text-white font-bold text-center font-serif ${hero.position === 0 ? "text-lg md:text-xl" : "text-sm md:text-base"}`}>{hero.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons - always visible but adjusted for screen sizes */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 sm:px-4 md:px-8 z-20">
          <button
            onClick={moveLeft}
            className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-white text-black flex items-center justify-center shadow-md"
          >
            <ChevronLeft className="w-6 h-6 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={moveRight}
            className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-white text-black flex items-center justify-center shadow-md"
          >
            <ChevronRight className="w-6 h-6 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Pagination dots - show only a subset on mobile */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1 overflow-hidden">
          {heroes.slice(0, window.innerWidth < 768 ? 7 : heroes.length).map((_, index) => {
            const adjustedIndex = index;
            const isActive = activeIndex === adjustedIndex || 
                            (window.innerWidth < 768 && index === 6 && activeIndex >= 7);
            return (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  isActive 
                    ? "w-6 bg-cyan-400" 
                    : "w-2 bg-gray-600"
                }`}
              />
            );
          })}
          {window.innerWidth < 768 && heroes.length > 7 && (
            <div className="w-4 text-gray-500 text-xs flex items-center justify-center">...</div>
          )}
        </div>
      </div>
    </div>
  )
}

