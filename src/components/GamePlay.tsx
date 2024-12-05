import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import { cn } from '@/lib/utils'
import left from '@/assets/icons/left-preview.svg'
import right from '@/assets/icons/right-preview.svg'
import { useState } from 'react';


const videos = [
    {
      id: 1,
      url: 'https://www.youtube.com/watch?v=zXUtAyjfvcc',
      thumbnail:
        'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1725910423/12_yvxlug.webp',
        duration: '19:59',
      
    },
    {
      id: 2,
      url: 'https://www.youtube.com/watch?v=6jTooJ2v-M8',
      thumbnail:
        'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1725910421/1_1_qhmxrt.webp',
      duration: '6:34',
    },
    {
      id: 3,
      url: 'https://www.youtube.com/watch?v=I96iKLPcSPs',
      thumbnail:
        'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1725910421/14_n3epjx.webp',
      duration: '7:19',
    },
    {
      id: 4,
      url: 'https://www.youtube.com/watch?v=nqlqpT8WVCo',
      thumbnail:
        'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1725910421/15_d2kbtv.webp',
      duration: '6:22',
    },
    {
        id: 5,
        url: 'https://www.youtube.com/watch?v=nqlqpT8WVCo',
        thumbnail:
          'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1725910422/8_y93bo1.webp',
        duration: '0:48',
      },
  ]
function GamePlay(){
    const [activeVideo, setActiveVideo] = useState(videos[0])

return(
<section className="relative min-h-screen w-full overflow-hidden">
{/* Background Image */}
<div className="absolute inset-0 z-0 h-full w-full object-cover object-center">
  <img
    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717191953/bg-1_bx94ek.webp"
    alt="Background"
    className="h-full w-full object-cover object-center"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020418]"></div>
</div>

{/* Content Container */}
<div className=" z-10">
  {/* Side Images */}
  <div className="pointer-events-none absolute  left-0 top-0 w-1/2 ">
    <img
      src=" https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733134962/Group_306299_w9lhp1.webp"
      alt="Left character art"
      className="hidden object-contain lg:block "
    />
  </div>
  <div className="pointer-events-none absolute right-0 top-0 w-1/2 ">
    <img
      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733135221/2_2_zbxfw1.webp"
      alt="Right character art"
      className="hidden object-contain lg:block "
    />
  </div>

  <div className=" mx-auto mt-[170px] max-w-6xl px-4">
    {/* Title */}
    <h2 className="mb-12 text-center font-serif text-4xl text-white opacity-90">
      GAMEPLAY
    </h2>

    {/* Main Video Player */}
    <div className="relative mx-auto hidden h-[310px] w-full overflow-hidden rounded-lg bg-black lg:block lg:w-[560px]">
      <ReactPlayer
        url={activeVideo.url}
        width="100%"
        height="100%"
        controls
        playing={false}
        light={activeVideo.thumbnail}
      />
    </div>

    {/* Video Thumbnails */}
    <div className=" m-20 hidden grid-cols-5 gap-4 lg:grid ">
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
            src={video.thumbnail}
            alt={`Video thumbnail ${video.id}`}
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs text-white">
            {video.duration}
          </div>
        </button>
      ))}
    </div>

    <div className="mt-8 lg:hidden">
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
                      light={video.thumbnail}
                    />
                  </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="other-arrow-left arrow  absolute left-0 top-[50%] z-10 cursor-pointer lg:-left-4 lg:top-[50%] ">
        <img
          src={left}
          alt="MCRT Token"
          className="cursor-pointer"
        />
      </button>
      <button className="other-arrow-right arrow absolute right-0 top-[50%] z-10 cursor-pointer lg:-right-4 lg:top-[50%]  ">
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
