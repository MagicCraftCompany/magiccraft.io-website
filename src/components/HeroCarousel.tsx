// "use client"

// import { useState } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// interface Hero {
//   id: number
//   name: string
//   image: string
// }






// const heroes: Hero[] = [
//   { id: 1, name: "ZAP", image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_z0ukji.webp" },
//   {
//     id: 2,
//     name: "DRUID",
//     image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_1_fzdlkt.webp",
//   },
//   {
//     id: 3,
//     name: "JEAN",
//     image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_2_mqz53g.webp",
//   },
//   {
//     id: 4,
//     name: "AMUN",
//     image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_3_ell268.webp",
//   },
//   {
//     id: 5,
//     name: "VLADISLAV",
//     image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_4_fqjech.webp",
//   },
//   {
//     id: 6,
//     name: "MOIRA",
//     image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280871/image_19_5_zkalot.webp",
//   },
//   {
//     id: 7,
//     name: "KARAS",
//     image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_6_stevwh.webp",
//   },
//   {
//     id: 8,
//     name: "GAIL",
//     image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_7_mn47kd.webp",
//   },
//   {
//     id: 9,
//     name: "LEILA",
//     image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280871/image_19_8_bi3mce.webp",
//   },
//   {
//     id: 10,
//     name: "CALLIE",
//     image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280871/image_19_9_lsrom5.webp",
//   },
//   {
//     id: 11,
//     name: "TRUESHOT",
//     image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280871/image_19_10_sz7eqb.webp",
//   },
//   {
//     id: 12,
//     name: "DR. LUTZ",
//     image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280871/image_19_11_ptqt4j.webp",
//   },
//   {
//     id: 13,
//     name: "TARA",
//     image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280874/image_19_12_uybthz.webp",
//   },
//   {
//     id: 14,
//     name: "BLAZY",
//     image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280873/image_19_13_a4vhmd.webp",
//   },
//   {
//     id: 15,
//     name: "BJORN",
//     image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280875/image_19_14_vrnkua.webp",
//   },
//   {
//     id: 16,
//     name: "FRIGARD",
//     image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280875/image_19_15_m1yugr.webp",
//   },
//   {
//     id: 17,
//     name: "VEGA",
//     image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280872/image_19_16_lwlhzb.webp",
//   },
//   {
//     id: 18,
//     name: "BRIENNE",
//     image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280872/image_19_17_rzbzrb.webp",
//   },
// ]

// export default function HeroCarousel() {
//   const [activeIndex, setActiveIndex] = useState(2)
 
//   const moveLeft = () => {
//     setActiveIndex((prev) => (prev === 0 ? heroes.length - 1 : prev - 1))
//   }

//   const moveRight = () => {
//     setActiveIndex((prev) => (prev === heroes.length - 1 ? 0 : prev + 1))
//   }

//   const getVisibleHeroes = () => {
//     const result = []
//     for (let i = -2; i <= 2; i++) {
//       let index = activeIndex + i
//       if (index < 0) index = heroes.length + index
//       if (index >= heroes.length) index = index - heroes.length
//       result.push({ ...heroes[index], position: i })
//     }
//     return result
//   }

  

//   return (
//       <div className="w-full min-h-screen bg-[#070B1A] flex flex-col items-center justify-center p-8 ">
//       <button className="mb-4 bg-cyan-200 text-cyan-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-cyan-300 transition-colors font-serif">
//         Go to all Heroes
//       </button>

//       <h2 className="text-white text-3xl font-bold mb-12 font-serif">CHOOSE ANOTHER HERO</h2>

//       <div className="relative w-full max-w-[1200px] mt-10">
//         <div className="flex items-center justify-center">
//           {getVisibleHeroes().map((hero) => (
//             <div
//               key={hero.id}
//               className="relative transition-all duration-500 ease-in-out"
//               style={{
//                 transform: `translateX(${hero.position * 5}rem)`,
//                 zIndex: hero.position === 0 ? 10 : 5,
//               }}
//             >
//               <div
//                 className={`transition-all duration-500 relative ${
//                   hero.position === 0 ? "w-80 h-96 scale-100" : "w-48 h-48 scale-90 opacity-50"
//                 }`}
//               >
//                 <img
//                   src={hero.image || "/placeholder.svg"}
//                   alt={hero.name}
//                   className="w-full h-full object-cover rounded-2xl"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl font-serif">
//                   <h3 className="text-white font-bold text-center">{hero.name}</h3>
//                   {hero.position === 0 && <p className="text-gray-300 text-sm text-center mt-1">Damage Dealer</p>}
//                 </div>
//                 {hero.position === 0 && (
//                   <>
//                     <button
//                       onClick={moveLeft}
//                       className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
//                     >
//                       <ChevronLeft className="w-5 h-5" />
//                     </button>
//                     <button
//                       onClick={moveRight}
//                       className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
//                     >
//                       <ChevronRight className="w-5 h-5" />
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center gap-1 mt-8">
//           {heroes.map((_, index) => (
//             <div
//               key={index}
//               className={`h-2 rounded-full transition-all ${
//                 activeIndex === index ? "w-4 bg-cyan-400" : "w-2 bg-gray-600"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

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
  { id: 1, name: "ZAP", image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_z0ukji.webp" },
  {
    id: 2,
    name: "DRUID",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_1_fzdlkt.webp",
  },
  {
    id: 3,
    name: "JEAN",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_2_mqz53g.webp",
  },
  {
    id: 4,
    name: "AMUN",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_3_ell268.webp",
  },
  {
    id: 5,
    name: "VLADISLAV",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_4_fqjech.webp",
  },
  {
    id: 6,
    name: "MOIRA",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280871/image_19_5_zkalot.webp",
  },
  {
    id: 7,
    name: "KARAS",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_6_stevwh.webp",
  },
  {
    id: 8,
    name: "GAIL",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_7_mn47kd.webp",
  },
  // {
  //   id: 9,
  //   name: "LEILA",
  //   image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280871/image_19_8_bi3mce.webp",
  // },
  {
    id: 10,
    name: "CALLIE",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280871/image_19_9_lsrom5.webp",
  },
  {
    id: 11,
    name: "TRUESHOT",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280871/image_19_10_sz7eqb.webp",
  },
  {
    id: 12,
    name: "DR. LUTZ",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280871/image_19_11_ptqt4j.webp",
  },
  {
    id: 13,
    name: "TARA",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280874/image_19_12_uybthz.webp",
  },
  {
    id: 14,
    name: "BLAZY",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280873/image_19_13_a4vhmd.webp",
  },
  {
    id: 15,
    name: "BJORN",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280875/image_19_14_vrnkua.webp",
  },
  {
    id: 16,
    name: "FRIGARD",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280875/image_19_15_m1yugr.webp",
  },
  {
    id: 17,
    name: "VEGA",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280872/image_19_16_lwlhzb.webp",
  },
  {
    id: 18,
    name: "BRIENNE",
    image: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280872/image_19_17_rzbzrb.webp",
  },
]

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(2)
  const [visibleCount, setVisibleCount] = useState(5)
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3)
      } else {
        setVisibleCount(5)
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
    <div className="w-full min-h-screen bg-[#070B1A] flex flex-col items-center justify-center p-4 md:p-8">
      <div className="text-center mb-4">
        <button 
          className="mb-4 bg-cyan-200 text-cyan-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-cyan-300 transition-colors font-serif mt-10"
          onClick={() => navigate('/Chooseyourhero')}
        >
          Go to all Heroes
        </button>
      
        <h2 className="text-white text-2xl md:text-3xl font-bold font-serif">CHOOSE ANOTHER HERO</h2>
      </div>

      <div className="relative w-full max-w-[1200px] h-[500px] mt-8">
        {/* Fixed height container for carousel */}
        <div className="absolute inset-0 flex items-center justify-center">
          {getVisibleHeroes().map((hero) => (
            <div
              key={hero.id}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${hero.position * (window.innerWidth < 768 ? 0 : window.innerWidth < 1024 ? 240 : 320)}px)`,
                zIndex: hero.position === 0 ? 10 : 5,
              }}
            >
              <div
                className={`transition-all duration-500 ${
                  hero.position === 0
                    ? "w-64 h-[420px] md:w-[320px] md:h-[480px]"
                    : "w-48 h-[280px] md:w-64 md:h-[320px] opacity-50"
                }`}
              >
                <img
                  src={hero.image || "/placeholder.svg"}
                  alt={hero.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl">
                  <h3 className="text-white font-bold text-center text-lg md:text-xl">{hero.name}</h3>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons - always visible but adjusted for screen sizes */}
        <button
          onClick={moveLeft}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center  z-20"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={moveRight}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center z-20"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Pagination dots */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1">
          {heroes.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index ? "w-4 bg-cyan-400" : "w-2 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

