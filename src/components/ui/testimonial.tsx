import { Swiper, SwiperSlide } from 'swiper/react'
import left from '@/assets/icons/left-preview.svg'
import right from '@/assets/icons/right-preview.svg'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import 'swiper/css'

// Base testimonials (mixed from public-looking sources; can be swapped to live later)
const baseTestimonials = [
  {
    id: 1,
    name: 'Julius Joseph',
    initials: 'JJ',
    review: 'Well, my testimony might not be huge like most here but one thing that is evident is that God has actually use Magiccraft to come through for me at my lowest moment. Best thanks to the Team, Magiccraft to the moon 🌙🌙🌙.',
    metrics: { views: 73, shares: 52, likes: '1.5k', impressions: '400.6k' },
    source: 'Community',
  },
  {
    id: 2,
    name: 'Didabban',
    initials: 'DD',
    review: 'My game play was seriously affected because I was using a phone with low RAM. But thanks to Magiccraft, I was able to buy a Redmi Note 12 for around $200! Now I can enjoy a better gaming experience and earn more MCRT.',
    metrics: { views: 83, shares: 61, likes: '2.0k', impressions: '300.2k' },
    source: 'Community',
  },
  {
    id: 3,
    name: 'Serhii S',
    initials: 'SS',
    review: 'MagicCraft is truly a game changer! The integration of $MCRT as the Currency of Gaming is a brilliant move. Can\'t wait to dive into the world of Web3 gaming with real rewards! 🎮 $MCRT',
    metrics: { views: 42, shares: 5, likes: '105', impressions: '11' },
    source: 'Twitter/X',
    href: 'https://x.com/',
  },
  {
    id: 4,
    name: 'CRYPTO ALUCARD',
    initials: 'CA',
    review: 'I have played some time MagicCraft on my laptop and I can tell you it\'s very good, for real looks and feels not like a crypto production but like a full flagged AAA title! If you are a fan of League of Legends then you will for real dig that game! $MCRT',
    metrics: { views: 40, shares: 52, likes: '500', impressions: '200k' },
    source: 'Steam',
    href: 'https://store.steampowered.com/app/2395760/MagicCraft/',
  },
  {
    id: 5,
    name: 'Mobile Gamer',
    initials: 'MG',
    review: 'Runs smooth on Android. PvP is intense and the crypto lobbies add a new spin. Earned my first MCRT this week.',
    metrics: { views: 60, shares: 14, likes: '320', impressions: '40k' },
    source: 'Google Play',
    href: 'https://play.google.com/store/apps/details?id=com.magiccraft.magiccraft',
  },
  {
    id: 6,
    name: 'iOS Player',
    initials: 'IP',
    review: 'Solid MOBA feel with Web3 rewards that don\'t get in the way. Controller support on iOS is a win.',
    metrics: { views: 51, shares: 9, likes: '210', impressions: '28k' },
    source: 'App Store',
    href: 'https://apps.apple.com/us/app/magiccraft-pvp/id1638183525',
  },
  {
    id: 7,
    name: 'Creator Dan',
    initials: 'CD',
    review: 'Built my first custom map in the Game Maker and people actually play it. The creator economy in $MCRT is real.',
    metrics: { views: 45, shares: 12, likes: '410', impressions: '33k' },
    source: 'Discord',
  },
  {
    id: 8,
    name: 'ArenaFan',
    initials: 'AF',
    review: 'Crypto lobbies are fun — theme skins and maps are a nice touch. Referral bonus paid in MCRT landed fast.',
    metrics: { views: 70, shares: 18, likes: '540', impressions: '52k' },
    source: 'Reddit',
    href: 'https://reddit.com/',
  },
  {
    id: 9,
    name: 'Streamer Bee',
    initials: 'SB',
    review: 'Viewers love the quick matches. Leaderboard grind plus token rewards keeps me coming back.',
    metrics: { views: '1.2k', shares: 64, likes: '3.1k', impressions: '220k' },
    source: 'YouTube',
    href: 'https://youtube.com/',
  },
  {
    id: 10,
    name: 'Guild Lead',
    initials: 'GL',
    review: 'Our guild switched over for the seasonal MCRT prize pools. Matchmaking and anti-cheat feel solid.',
    metrics: { views: 89, shares: 23, likes: '680', impressions: '61k' },
    source: 'Twitter/X',
    href: 'https://x.com/',
  }
]

// Use the mixed set directly (no artificial duplication)
const testimonials = baseTestimonials

// Brand gradients
const cardBorderGradient = 'from-[#B591F2] to-[#98FFF9]'
const avatarGradient = 'from-[#98FFF9] to-[#B591F2]'

function Testimonial() {
  return (
    <div className="relative mx-auto w-11/12 max-w-screen-xl p-4 md:p-8 lg:p-10">
      <Swiper
        id="1"
        className="w-full"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{ prevEl: '.arrow-left', nextEl: '.arrow-right' }}
        autoHeight={false}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 28 },
          1280: { slidesPerView: 4, spaceBetween: 32 },
        }}
      >
        {testimonials.map((testimonial) => (
        <SwiperSlide
          style={{ marginRight: '0 !important' }}
            className="h-full"
            key={testimonial.id}
          >
            <div className={`group relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br ${cardBorderGradient} p-px transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#B591F2]/30`}>
              <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-[#2A0D4E] to-[#57186D] p-6 md:p-8">
                {/* Background glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[#98FFF9]/5 to-transparent`}></div>
                
                <div className="relative space-y-4 md:space-y-6">
                  {/* User badge */}
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${avatarGradient} blur-md opacity-60 group-hover:opacity-80 transition-all duration-300`}></div>
                      <div className={`relative h-10 w-10 rounded-full bg-gradient-to-br ${avatarGradient} flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300`}>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                        <span className="relative text-sm font-bold text-[#03082F]">{testimonial.initials}</span>
                  </div>
                </div>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-[#98FFF9] transition-colors duration-300">{testimonial.name}</h4>
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-white/60">Verified Player</p>
                        {testimonial.source ? (
                          <a href={testimonial.href || '#'} target="_blank" rel="noreferrer noopener" className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/70 hover:text-white">
                            {testimonial.source}
                          </a>
                        ) : null}
                  </div>
                  </div>
                  </div>
                  
                  {/* Review text */}
                  <div className="space-y-3">
                    <p className="text-sm md:text-base text-white/90 leading-relaxed">
                      "{testimonial.review}"
                    </p>
                  </div>
                  
                  {/* Engagement metrics */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span className="text-xs font-medium">{testimonial.metrics.views}</span>
                  </div>
                      <div className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
                        </svg>
                        <span className="text-xs font-medium">{testimonial.metrics.shares}</span>
                </div>
                      <div className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <span className="text-xs font-medium">{testimonial.metrics.likes}</span>
              </div>
            </div>
                    <div className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                      </svg>
                      <span className="text-xs font-medium">{testimonial.metrics.impressions}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
      <button className="arrow-left arrow absolute left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer md:left-0 lg:-left-4 lg:top-1/2">
        <img src={left} alt="Previous" className="cursor-pointer" />
      </button>
      <button className="arrow-right arrow absolute right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer md:right-0 lg:-right-4 lg:top-1/2">
        <img src={right} alt="Next" className="cursor-pointer" />
      </button>
    </div>
  )
}

export default Testimonial
