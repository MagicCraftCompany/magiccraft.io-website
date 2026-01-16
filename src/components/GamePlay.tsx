import ReactPlayer from 'react-player';
import { useState } from 'react';
import { cn } from '@/lib/utils'


// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
};

// Helper function to get YouTube thumbnail
const getYouTubeThumbnail = (url: string): string => {
  const videoId = getYouTubeVideoId(url);
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

const videos = [
  {
    id: 1,
    url: 'https://www.youtube.com/watch?v=zXUtAyjfvcc',
    duration: '20:00',
    title: 'Friday Games (Full Session)',
  },
  {
    id: 2,
    url: 'https://www.youtube.com/watch?v=6jTooJ2v-M8',
    duration: '6:34',
    title: 'Vega Guide',
  },
  {
    id: 3,
    url: 'https://www.youtube.com/watch?v=I96iKLPcSPs',
    duration: '7:19',
    title: 'Frigard Guide',
  },
  {
    id: 4,
    url: 'https://www.youtube.com/watch?v=nqlqpT8WVCo',
    duration: '0:49',
    title: 'Gameplay Trailer',
  },
  {
    id: 5,
    url: 'https://www.youtube.com/watch?v=z47pne8Lq_E&t=41s',
    duration: '4:14',
    title: 'MagicCraft Session',
  },
  ]
function GamePlay(){
  const [activeVideo, setActiveVideo] = useState(videos[0])

return(

<section className="relative w-full py-12 md:py-16 overflow-hidden">
  {/* Background Image */}
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
        Watch recent matches, guides, and highlights.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-4 md:gap-5">
      {/* Main Video Player */}
      <div className="rounded-md border border-white/10 bg-black/70 overflow-hidden shadow-xl">
        <div className="aspect-video w-full">
          <ReactPlayer
            url={activeVideo.url}
            width="100%"
            height="100%"
            controls
            playing={false}
          />
        </div>
        <div className="px-3 py-2 border-t border-white/10 bg-black/40">
          <p className="text-sm text-white/80">{activeVideo.title}</p>
        </div>
      </div>

      {/* Video Thumbnails */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setActiveVideo(video)}
            className={cn(
              'group flex flex-col rounded-md border border-white/10 bg-black/40 overflow-hidden text-left hover:border-[#98FFF9]/50 transition-colors',
              activeVideo.id === video.id && 'border-[#98FFF9] shadow-[0_0_0_1px_rgba(152,255,249,0.4)]'
            )}
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src={getYouTubeThumbnail(video.url)}
                alt={video.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute bottom-2 right-2 rounded-sm bg-black/80 px-1.5 py-0.5 text-[11px] text-white">
                {video.duration}
              </div>
            </div>
            <div className="px-2 py-1.5">
              <p className="text-[11px] text-white/75 line-clamp-1">{video.title}</p>
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
