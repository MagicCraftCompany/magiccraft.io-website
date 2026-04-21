import { useState } from 'react';
import { cn } from '@/lib/utils'

type Video = {
  id: number
  url: string
  duration: string
  title: string
  channel: string
  tag: string
}

const getYouTubeVideoId = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
};

const getYouTubeThumbnail = (url: string): string => {
  const id = getYouTubeVideoId(url);
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};

const videos: Video[] = [
  { id: 1, url: 'https://www.youtube.com/watch?v=s7osVU3NREI', duration: '8:41', title: 'Magic Craft $MCRT Project Review || New Generation PVP War Game', channel: 'Prime Investors', tag: 'Featured' },
  { id: 2, url: 'https://www.youtube.com/watch?v=LYL0BXnVMJA', duration: '9:15', title: 'MagicCraft เกมมือถือ Action 5v5 มีฮีโร่ 17 คน พ่วงระบบ P2E & NFT มาด้วย', channel: 'Shorty Bluejova', tag: 'Overview' },
  { id: 3, url: 'https://www.youtube.com/watch?v=azbMQ4VBSvs', duration: '0:44', title: 'MCRT MagicCraft Gameplay on PC - Windows7 -', channel: 'Marian Maniek', tag: 'Gameplay' },
  { id: 4, url: 'https://www.youtube.com/watch?v=3Py7cm3Duj8', duration: '16:44', title: 'THE METAVERSE IS MAKING CRYPTO MILLIONAIRES!!! | Magic Craft ($MCRT)', channel: 'DEFI JON', tag: 'Analysis' },
  { id: 5, url: 'https://www.youtube.com/watch?v=BlRGPN1Lv34', duration: '12:42', title: 'New 100X Gaming Token | 100X MCRT | Magiccraft Game NFTs | Cryptocurrency', channel: 'Cyber Tech', tag: 'Token' },
  { id: 6, url: 'https://www.youtube.com/watch?v=1sJHXQZcBOM', duration: '6:30', title: 'MAGIC CRAFT - Gameplay is REVEALED!!!! $MCRT ! PLAY to EARN ! DOTA DIABLO ! EPIC', channel: 'Professor Mende Show', tag: 'Reveal' },
  { id: 7, url: 'https://www.youtube.com/watch?v=lJSoz_gFl6o', duration: '2:10', title: 'MagicCraft - Karas', channel: 'Cryptoxian', tag: 'Hero' },
  { id: 8, url: 'https://www.youtube.com/watch?v=KZYBUH6A2PU', duration: '7:58', title: 'MagicCraft MCRT. The next Axie or Sand in 2022?', channel: 'Moon Guy Crypto', tag: 'Market' },
]

function GamePlay() {
  const [activeVideo, setActiveVideo] = useState(videos[0])
  const [playing, setPlaying] = useState(false)

  const activeId = getYouTubeVideoId(activeVideo.url)

  const handleSelect = (video: Video) => {
    setActiveVideo(video)
    setPlaying(true)
  }

  return (
    <section className="relative w-full py-12 md:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733751841/BG_1_ynaikk.webp"
          alt="MagicCraft gameplay background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03082f]/30 via-[#03082f]/75 to-[#020418]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white/90">Gameplay</h2>
          <p className="mt-2 text-sm sm:text-base text-white/70">
            Curated videos covering gameplay, $MCRT analysis, hero clips, and community coverage.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/55">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">8 curated videos</span>
            <span className="rounded-full border border-[#98FFF9]/20 bg-[#98FFF9]/10 px-3 py-1 text-[#98FFF9]">Featured first</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-5">
          {/* Main Video Player */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/70 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <div className="aspect-video w-full relative">
              {playing ? (
                <iframe
                  key={activeId}
                  src={`https://www.youtube-nocookie.com/embed/${activeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              ) : (
                /* Click-to-play poster — avoids loading YouTube JS until needed */
                <button
                  className="absolute inset-0 w-full h-full group"
                  onClick={() => setPlaying(true)}
                  aria-label={`Play ${activeVideo.title}`}
                >
                  <img
                    src={getYouTubeThumbnail(activeVideo.url)}
                    alt={activeVideo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF0000] flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.5)] group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-7 h-7 sm:w-9 sm:h-9 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  {/* YouTube logo badge */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/70 rounded px-2 py-1">
                    <svg className="w-4 h-3" viewBox="0 0 90 20" fill="none">
                      <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"/>
                      <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"/>
                    </svg>
                    <span className="text-[10px] text-white font-medium">YouTube</span>
                  </div>
                </button>
              )}
            </div>
            <div className="border-t border-white/10 bg-black/40 px-3 py-3 sm:px-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[#98FFF9]/25 bg-[#98FFF9]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#98FFF9]">
                  {activeVideo.tag}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/60">
                  {activeVideo.duration}
                </span>
                <span className="text-xs text-white/50">{activeVideo.channel}</span>
              </div>
              <div className="mt-2 flex items-start justify-between gap-3">
                <p className="line-clamp-2 text-sm text-white/85 sm:text-base">{activeVideo.title}</p>
                <a
                  href={activeVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap text-xs text-[#98FFF9]/70 transition-colors hover:text-[#98FFF9]"
                >
                  Open on YouTube ↗
                </a>
              </div>
            </div>
          </div>

          {/* Video Thumbnails */}
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible xl:grid-cols-5">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => handleSelect(video)}
                aria-label={`Select video: ${video.title}`}
                className={cn(
                  'group flex min-w-[220px] snap-start flex-col overflow-hidden rounded-xl border border-white/10 bg-black/40 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#98FFF9]/50 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] lg:min-w-0',
                  activeVideo.id === video.id && 'border-[#98FFF9] shadow-[0_0_0_1px_rgba(152,255,249,0.4)]'
                )}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black/60">
                  <img
                    src={getYouTubeThumbnail(video.url)}
                    alt=""
                    className="h-full w-full object-cover transition-transform group-hover:scale-[1.03]"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.opacity = '0' }}
                  />
                  {activeVideo.id === video.id && playing && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div className="w-6 h-6 rounded-full bg-[#98FFF9] flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#03082F]" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
                        </svg>
                      </div>
                    </div>
                  )}
                  {!(activeVideo.id === video.id && playing) && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-1.5 right-1.5 rounded-sm bg-black/80 px-1.5 py-0.5 text-[10px] text-white">
                    {video.duration}
                  </div>
                </div>
                <div className="px-2 py-2">
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#98FFF9]/70">{video.tag}</span>
                    <span className="text-[10px] text-white/45">{video.channel}</span>
                  </div>
                  <p className="line-clamp-2 text-[11px] leading-4 text-white/75">{video.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GamePlay;
