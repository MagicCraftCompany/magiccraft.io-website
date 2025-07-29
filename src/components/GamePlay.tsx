import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import { cn } from '@/lib/utils'
import left from '@/assets/icons/left-preview.svg'
import right from '@/assets/icons/right-preview.svg'
import { useState } from 'react';


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
    },
    {
      id: 2,
      url: 'https://www.youtube.com/watch?v=6jTooJ2v-M8',
      duration: '6:34',
    },
    {
      id: 3,
      url: 'https://www.youtube.com/watch?v=I96iKLPcSPs',
      duration: '7:19',
    },
    {
      id: 4,
      url: 'https://www.youtube.com/watch?v=nqlqpT8WVCo',
      duration: '0:49',
    },
    {
        id: 5,
        url: 'https://www.youtube.com/watch?v=z47pne8Lq_E&t=41s',
        duration: '4:14',
      },
  ]
function GamePlay(){
    const [activeVideo, setActiveVideo] = useState(videos[0])

return(

<section className="relative md:mb-24 h-[50vh] md:h-full w-full overflow-hidden ">
{/* Background Image */}
<div className="absolute inset-0 z-0 h-full w-full object-cover object-center">
  <img
    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733751841/BG_1_ynaikk.webp"
    alt="Background"
    className="object-cover object-center"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020418]"></div>
</div>

{/* Content Container */}
<div className=" z-10">
  {/* Side Images */}
  <div className="pointer-events-none absolute  left-0 top-0 w-1/2 ">
    {/* <img
      src=" https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733134962/Group_306299_w9lhp1.webp"
      alt="Left character art"
      className="hidden object-contain lg:block "
    /> */}
  </div>
  <div className="pointer-events-none absolute right-0 top-0 w-1/2 ">
    {/* <img
      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733135221/2_2_zbxfw1.webp"
      alt="Right character art"
      className="hidden object-contain lg:block "
    /> */}
  </div>

  <div className=" mx-auto md:mt-[100px] mt-16 max-w-6xl px-4">
    {/* Title */}
    <h2 className="mb-12 text-center font-serif text-4xl text-white opacity-90">
      GAMEPLAY
    </h2>

    {/* Main Video Player */}
    <div className="relative mx-auto hidden h-[310px] w-full overflow-hidden rounded-lg bg-black lg:block lg:w-[560px] cursor-pointer">
      <ReactPlayer
        url={activeVideo.url}
        width="100%"
        height="100%"
        controls
        playing={false}
      />
    </div>

    {/* Video Thumbnails */}
    <div className=" mt-14 mb-20 hidden grid-cols-5 gap-4 lg:grid ">
      {videos.map((video) => (
        <button
          key={video.id}
          onClick={() => setActiveVideo(video)}
          className={cn(
            'group relative aspect-video w-full overflow-hidden rounded-lg transition-all hover:ring-2 hover:ring-white/50',
            activeVideo.id === video.id && 'ring-2 ring-white'
          )}
        >
          <img
            src={getYouTubeThumbnail(video.url)}
            alt={`Video thumbnail ${video.id}`}
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs text-white">
            {video.duration}
          </div>
        </button>
      ))}
    </div>

    <div className=" lg:hidden">
      <Swiper
        id="other-swiper"
        className="md:w-full "
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          prevEl: '.other-arrow-left',
          nextEl: '.other-arrow-right',
        }}
        autoHeight={true}
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id} className="cursor-pointer">
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-black/80">
                    <ReactPlayer
                      url={video.url}
                      width="100%"
                      height="100%"
                      controls
                      playing={false}
                    />
                  </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="other-arrow-left arrow  absolute left-0 top-[45%] z-10 cursor-pointer lg:-left-4  ">
        <img
          src={left}
          alt="MCRT Token"
          className="cursor-pointer"
        />
      </button>
      <button className="other-arrow-right arrow absolute right-0 top-[45%] z-10 cursor-pointer lg:-right-4 lg:top-[50%]  ">
        <img
          src={right}
          alt="MCRT Token"
          className="cursor-pointer"
        />
      </button>
    </div>
  </div>
</div>
</section>
)
}

export default GamePlay;
