import { Swiper, SwiperSlide } from 'swiper/react'
import frame1 from '@/assets/icons/Frame (1).svg'
import frame2 from '@/assets/icons/Frame (2).svg'
import frame3 from '@/assets/icons/Frame (3).svg'
import frame4 from '@/assets/icons/Frame (4).svg'
import left from '@/assets/icons/left-preview.svg'
import right from '@/assets/icons/right-preview.svg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
function Testimonial() {
  return (
    <div className="relative mx-auto w-full max-w-[400px] p-4 md:mx-0 md:max-w-[538px] md:p-10 lg:ml-4">
      <Swiper
        id="1"
        className="md:w-full "
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{ prevEl: '.arrow-left', nextEl: '.arrow-right' }}
        autoHeight={true}
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        <SwiperSlide
          style={{ marginRight: '0 !important' }}
          className="h-full w-10/12"
          key="testimonial-1"
        >
          <div className="testimonials  flex h-full w-full flex-col items-start justify-start self-stretch rounded-3xl border-[1px] border-solid ">
            <div className="rounded-3xl bg-[#151149]   bg-opacity-70 bg-gradient-to-r">
              <div className="  rounded-3xl bg-gradient-to-b from-[#151149]  to-[#190E29] to-80% p-4  md:max-w-none">
                <button className=" z-[3] flex cursor-pointer flex-row items-start justify-start gap-[9px] rounded-3xl border-[1px] border-solid bg-[transparent] px-[12px] [backdrop-filter:blur(23px)] [background:linear-gradient(97.86deg,_#3f107a,_#740fb1),_linear-gradient(255.08deg,_#57186d,_#2a0d4e),_rgba(45,_44,_134,_0.8)]">
                  <div className="font-futura relative m-0 inline-block !bg-clip-text p-0 text-right text-base font-medium text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">{`Julius Joseph`}</div>
                </button>
                <div className=" relative z-[3] h-[21px] w-5 " />
                <div className="rounded-39xl z-[3] flex max-w-full flex-row items-start justify-start gap-[9px] self-stretch [backdrop-filter:blur(23px)] ">
                  <div className="relative inline-block max-w-full  flex-1 !bg-clip-text  font-medium [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))] lg:mt-4">
                    Well, my testimony might not be huge like most here but one
                    thing that is evident is that God has actually use
                    Magiccraft to come through for me at my lowest moment. Best
                    thanks to the Team, Magiccraft to the moon 🌙🌙🌙.
                  </div>
                </div>
                <div className="flex flex-row gap-10 lg:mt-5">
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame1} className="mr-2" alt="Icon" />
                    73
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame2} className="mr-2" alt="Icon" />
                    52
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame3} className="mr-2" alt="Icon" />
                    1.5k
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame4} className="mr-2" alt="Icon" />
                    400.6k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ marginRight: '0 !important' }}
          className="h-full w-10/12"
          key="testimonial-2"
        >
          <div className="testimonials flex h-full w-full flex-col items-start justify-start self-stretch rounded-3xl border-[1px] border-solid">
            <div className="rounded-3xl bg-[#151149]    bg-opacity-70 bg-gradient-to-r">
              <div className="   rounded-3xl bg-gradient-to-b from-[#151149]  to-[#190E29] to-80% p-4  md:max-w-none">
                <button className=" z-[3] flex cursor-pointer flex-row items-start justify-start gap-[9px] rounded-3xl border-[1px] border-solid bg-[transparent] px-[12px] [backdrop-filter:blur(23px)] [background:linear-gradient(97.86deg,_#3f107a,_#740fb1),_linear-gradient(255.08deg,_#57186d,_#2a0d4e),_rgba(45,_44,_134,_0.8)]">
                  <div className="font-futura relative m-0 inline-block !bg-clip-text p-0 text-right text-base font-medium text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">{`Didabban`}</div>
                </button>
                <div className=" relative z-[3] h-[21px] w-5 " />
                <div className="rounded-39xl z-[3] flex max-w-full flex-row items-start justify-start gap-[9px] self-stretch [backdrop-filter:blur(23px)] ">
                  <div className="relative inline-block max-w-full flex-1 !bg-clip-text  font-medium [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))] lg:mt-4">
                    My game play was seriously affected because I was using a
                    phone with low RAM. But thanks to Magiccraft, I was able to
                    buy a Redmi Note 12 for around $200! Now I can enjoy a
                    better gaming experience and earn more MCRT.
                  </div>
                </div>
                <div className="flex flex-row gap-10 lg:mt-5">
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame1} className="mr-2" alt="Icon" />
                    83
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame2} className="mr-2" alt="Icon" />
                    61
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame3} className="mr-2" alt="Icon" />
                    2.0k
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame4} className="mr-2" alt="Icon" />
                    308.6k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ marginRight: '0 !important' }}
          className="h-full w-10/12"
          key="testimonial-1"
        >
          <div className="testimonials  flex h-full w-full flex-col items-start justify-start self-stretch rounded-3xl border-[1px] border-solid ">
            <div className="rounded-3xl bg-[#151149]   bg-opacity-70 bg-gradient-to-r">
              <div className="  rounded-3xl bg-gradient-to-b from-[#151149]  to-[#190E29] to-80% p-4  md:max-w-none">
                <button className=" z-[3] flex cursor-pointer flex-row items-start justify-start gap-[9px] rounded-3xl border-[1px] border-solid bg-[transparent] px-[12px] [backdrop-filter:blur(23px)] [background:linear-gradient(97.86deg,_#3f107a,_#740fb1),_linear-gradient(255.08deg,_#57186d,_#2a0d4e),_rgba(45,_44,_134,_0.8)]">
                  <div className="font-futura relative m-0 inline-block !bg-clip-text p-0 text-right text-base font-medium text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">{`Serhii S`}</div>
                </button>
                <div className=" relative z-[3] h-[21px] w-5 " />
                <div className="rounded-39xl z-[3] flex max-w-full flex-row items-start justify-start gap-[9px] self-stretch [backdrop-filter:blur(23px)] ">
                  <div className="relative inline-block max-w-full  flex-1 !bg-clip-text  font-medium [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))] lg:mt-4">
                    MagicCraft is truly a game changer! The integration of $MCRT
                    as the Currency of Gaming is a brilliant move. Can't wait to
                    dive into the world of Web3 gaming with real rewards! 🎮
                    $MCRT
                  </div>
                </div>
                <div className="flex flex-row gap-10 lg:mt-5">
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame1} className="mr-2" alt="Icon" />
                    42
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame2} className="mr-2" alt="Icon" />5
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame3} className="mr-2" alt="Icon" />
                    105
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame4} className="mr-2" alt="Icon" />
                    11
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ marginRight: '0 !important' }}
          className="h-full w-10/12"
          key="testimonial-1"
        >
          <div className="testimonials  flex h-full w-full flex-col items-start justify-start self-stretch rounded-3xl border-[1px] border-solid ">
            <div className="rounded-3xl bg-[#151149]   bg-opacity-70 bg-gradient-to-r">
              <div className="  rounded-3xl bg-gradient-to-b from-[#151149]  to-[#190E29] to-80% p-4  md:max-w-none">
                <button className=" z-[3] flex cursor-pointer flex-row items-start justify-start gap-[9px] rounded-3xl border-[1px] border-solid bg-[transparent] px-[12px] [backdrop-filter:blur(23px)] [background:linear-gradient(97.86deg,_#3f107a,_#740fb1),_linear-gradient(255.08deg,_#57186d,_#2a0d4e),_rgba(45,_44,_134,_0.8)]">
                  <div className="font-futura relative m-0 inline-block !bg-clip-text p-0 text-right text-base font-medium text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">{`CRYPTO ALUCARD`}</div>
                </button>
                <div className=" relative z-[3] h-[21px] w-5 " />
                <div className="rounded-39xl z-[3] flex max-w-full flex-row items-start justify-start gap-[9px] self-stretch [backdrop-filter:blur(23px)] ">
                  <div className="relative inline-block max-w-full  flex-1 !bg-clip-text  font-medium [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))] lg:mt-4">
                    I have played some time MagicCraft on my laptop and I can
                    tell you it`s very good, for real looks and feels not like a
                    crypto production but like a full flagged AAA title!
                    Recorded a small gameplay to show you how it looks:) If you
                    are a fan of League of Legends then you will for real dig
                    that game! The game is on: - PC - Android - iOS - Steam That
                    alone is a great achievement! $MCRT
                  </div>
                </div>
                <div className="flex flex-row gap-10 lg:mt-5">
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame1} className="mr-2" alt="Icon" />
                    40
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame2} className="mr-2" alt="Icon" />
                    52
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame3} className="mr-2" alt="Icon" />
                    500
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame4} className="mr-2" alt="Icon" />
                    100.6k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ marginRight: '0 !important' }}
          className="h-full w-10/12"
          key="testimonial-1"
        >
          <div className="testimonials  flex h-full w-full flex-col items-start justify-start self-stretch rounded-3xl border-[1px] border-solid ">
            <div className="rounded-3xl bg-[#151149]   bg-opacity-70 bg-gradient-to-r">
              <div className="  rounded-3xl bg-gradient-to-b from-[#151149]  to-[#190E29] to-80% p-4  md:max-w-none">
                <button className=" z-[3] flex cursor-pointer flex-row items-start justify-start gap-[9px] rounded-3xl border-[1px] border-solid bg-[transparent] px-[12px] [backdrop-filter:blur(23px)] [background:linear-gradient(97.86deg,_#3f107a,_#740fb1),_linear-gradient(255.08deg,_#57186d,_#2a0d4e),_rgba(45,_44,_134,_0.8)]">
                  <div className="font-futura relative m-0 inline-block !bg-clip-text p-0 text-right text-base font-medium text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">{`Charlie Boy`}</div>
                </button>
                <div className=" relative z-[3] h-[21px] w-5 " />
                <div className="rounded-39xl z-[3] flex max-w-full flex-row items-start justify-start gap-[9px] self-stretch [backdrop-filter:blur(23px)] ">
                  <div className="relative inline-block max-w-full  flex-1 !bg-clip-text  font-medium [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))] lg:mt-4">
                    Had an absolute blast @socialsrising yesterday in the 🎮
                    game night of @MagicCraftGame Magiccraft was too fun to play
                    and was fire 🔥.The characters were very cool to play with
                    their immense fighting style. @MagicCraftGame @socialsrising
                  </div>
                </div>
                <div className="flex flex-row gap-10 lg:mt-5">
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame1} className="mr-2" alt="Icon" />7
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame2} className="mr-2" alt="Icon" />5
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame3} className="mr-2" alt="Icon" />
                    15
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame4} className="mr-2" alt="Icon" />
                    3.6k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ marginRight: '0 !important' }}
          className="h-full w-10/12"
          key="testimonial-1"
        >
          <div className="testimonials  flex h-full w-full flex-col items-start justify-start self-stretch rounded-3xl border-[1px] border-solid ">
            <div className="rounded-3xl bg-[#151149]   bg-opacity-70 bg-gradient-to-r">
              <div className="  rounded-3xl bg-gradient-to-b from-[#151149]  to-[#190E29] to-80% p-4  md:max-w-none">
                <button className=" z-[3] flex cursor-pointer flex-row items-start justify-start gap-[9px] rounded-3xl border-[1px] border-solid bg-[transparent] px-[12px] [backdrop-filter:blur(23px)] [background:linear-gradient(97.86deg,_#3f107a,_#740fb1),_linear-gradient(255.08deg,_#57186d,_#2a0d4e),_rgba(45,_44,_134,_0.8)]">
                  <div className="font-futura relative m-0 inline-block !bg-clip-text p-0 text-right text-base font-medium text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">{`Dopies`}</div>
                </button>
                <div className=" relative z-[3] h-[21px] w-5 " />
                <div className="rounded-39xl z-[3] flex max-w-full flex-row items-start justify-start gap-[9px] self-stretch [backdrop-filter:blur(23px)] ">
                  <div className="relative inline-block max-w-full  flex-1 !bg-clip-text  font-medium [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))] lg:mt-4">
                    MagicCraft games and staking are next lvl, I should've
                    locked longer for a bigger staking bonus, should've,
                    would've, could've 😝🤑😝🔮 @MagicCraftGame #EARNMCRT $MCRT
                  </div>
                </div>
                <div className="flex flex-row gap-10 lg:mt-5">
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame1} className="mr-2" alt="Icon" />
                    32
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame2} className="mr-2" alt="Icon" />
                    53
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame3} className="mr-2" alt="Icon" />
                    1.0k
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame4} className="mr-2" alt="Icon" />
                    1.6k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ marginRight: '0 !important' }}
          className="h-full w-10/12"
          key="testimonial-1"
        >
          <div className="testimonials  flex h-full w-full flex-col items-start justify-start self-stretch rounded-3xl border-[1px] border-solid ">
            <div className="rounded-3xl bg-[#151149]   bg-opacity-70 bg-gradient-to-r">
              <div className="  rounded-3xl bg-gradient-to-b from-[#151149]  to-[#190E29] to-80% p-4  md:max-w-none">
                <button className=" z-[3] flex cursor-pointer flex-row items-start justify-start gap-[9px] rounded-3xl border-[1px] border-solid bg-[transparent] px-[12px] [backdrop-filter:blur(23px)] [background:linear-gradient(97.86deg,_#3f107a,_#740fb1),_linear-gradient(255.08deg,_#57186d,_#2a0d4e),_rgba(45,_44,_134,_0.8)]">
                  <div className="font-futura relative m-0 inline-block !bg-clip-text p-0 text-right text-base font-medium text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">{`Nicco`}</div>
                </button>
                <div className=" relative z-[3] h-[21px] w-5 " />
                <div className="rounded-39xl z-[3] flex max-w-full flex-row items-start justify-start gap-[9px] self-stretch [backdrop-filter:blur(23px)] ">
                  <div className="relative inline-block max-w-full  flex-1 !bg-clip-text  font-medium [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))] lg:mt-4">
                    #Magiccraft is definitely one of the best Mobile/Pc games
                    you can engage with and have fun. But wait, you don't just
                    have fun but also earn cool money in $MCRT 💰 while playing
                    🎮😄. GAME ON !! @MagicCraftGame , Niccovirtual awaits 😎
                  </div>
                </div>
                <div className="flex flex-row gap-10 lg:mt-5">
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame1} className="mr-2" alt="Icon" />
                    83
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame2} className="mr-2" alt="Icon" />
                    30
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame3} className="mr-2" alt="Icon" />
                    700
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame4} className="mr-2" alt="Icon" />
                    4.6k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ marginRight: '0 !important' }}
          className="h-full w-10/12"
          key="testimonial-1"
        >
          <div className="testimonials  flex h-full w-full flex-col items-start justify-start self-stretch rounded-3xl border-[1px] border-solid ">
            <div className="rounded-3xl bg-[#151149]   bg-opacity-70 bg-gradient-to-r">
              <div className="  rounded-3xl bg-gradient-to-b from-[#151149]  to-[#190E29] to-80% p-4  md:max-w-none">
                <button className=" z-[3] flex cursor-pointer flex-row items-start justify-start gap-[9px] rounded-3xl border-[1px] border-solid bg-[transparent] px-[12px] [backdrop-filter:blur(23px)] [background:linear-gradient(97.86deg,_#3f107a,_#740fb1),_linear-gradient(255.08deg,_#57186d,_#2a0d4e),_rgba(45,_44,_134,_0.8)]">
                  <div className="font-futura relative m-0 inline-block !bg-clip-text p-0 text-right text-base font-medium text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">{`Victor Agunego`}</div>
                </button>
                <div className=" relative z-[3] h-[21px] w-5 " />
                <div className="rounded-39xl z-[3] flex max-w-full flex-row items-start justify-start gap-[9px] self-stretch [backdrop-filter:blur(23px)] ">
                  <div className="relative inline-block max-w-full  flex-1 !bg-clip-text  font-medium [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))] lg:mt-4">
                    This is the future of gaming! @MagicCraftGame combines the
                    thrill of gameplay with real-world rewards and true
                    ownership of assets, by empowering players through
                    blockchain, community governance, and a sustainable
                    ecosystem is a game-changer. #MCRT"
                  </div>
                </div>
                <div className="flex flex-row gap-10 lg:mt-5">
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame1} className="mr-2" alt="Icon" />
                    33
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame2} className="mr-2" alt="Icon" />
                    20
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame3} className="mr-2" alt="Icon" />
                    400
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame4} className="mr-2" alt="Icon" />
                    2.6k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ marginRight: '0 !important' }}
          className="h-full w-10/12"
          key="testimonial-1"
        >
          <div className="testimonials  flex h-full w-full flex-col items-start justify-start self-stretch rounded-3xl border-[1px] border-solid ">
            <div className="rounded-3xl bg-[#151149]   bg-opacity-70 bg-gradient-to-r">
              <div className="  rounded-3xl bg-gradient-to-b from-[#151149]  to-[#190E29] to-80% p-4  md:max-w-none">
                <button className=" z-[3] flex cursor-pointer flex-row items-start justify-start gap-[9px] rounded-3xl border-[1px] border-solid bg-[transparent] px-[12px] [backdrop-filter:blur(23px)] [background:linear-gradient(97.86deg,_#3f107a,_#740fb1),_linear-gradient(255.08deg,_#57186d,_#2a0d4e),_rgba(45,_44,_134,_0.8)]">
                  <div className="font-futura relative m-0 inline-block !bg-clip-text p-0 text-right text-base font-medium text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">{`dominadata`}</div>
                </button>
                <div className=" relative z-[3] h-[21px] w-5 " />
                <div className="rounded-39xl z-[3] flex max-w-full flex-row items-start justify-start gap-[9px] self-stretch [backdrop-filter:blur(23px)] ">
                  <div className="relative inline-block max-w-full  flex-1 !bg-clip-text  font-medium [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))] lg:mt-4">
                    magiccraft unlike normal games, embraces crypto via $mcrt.
                    players earn multi-crypto rewards. not just a moba, it's
                    your real money maker.
                  </div>
                </div>
                <div className="flex flex-row gap-10 lg:mt-5">
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame1} className="mr-2" alt="Icon" />
                    23
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame2} className="mr-2" alt="Icon" />
                    60
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame3} className="mr-2" alt="Icon" />
                    300
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame4} className="mr-2" alt="Icon" />
                    2.6k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ marginRight: '0 !important' }}
          className="h-full w-10/12"
          key="testimonial-1"
        >
          <div className="testimonials  flex h-full w-full flex-col items-start justify-start self-stretch rounded-3xl border-[1px] border-solid ">
            <div className="rounded-3xl bg-[#151149]   bg-opacity-70 bg-gradient-to-r">
              <div className="  rounded-3xl bg-gradient-to-b from-[#151149]  to-[#190E29] to-80% p-4  md:max-w-none">
                <button className=" z-[3] flex cursor-pointer flex-row items-start justify-start gap-[9px] rounded-3xl border-[1px] border-solid bg-[transparent] px-[12px] [backdrop-filter:blur(23px)] [background:linear-gradient(97.86deg,_#3f107a,_#740fb1),_linear-gradient(255.08deg,_#57186d,_#2a0d4e),_rgba(45,_44,_134,_0.8)]">
                  <div className="font-futura relative m-0 inline-block !bg-clip-text p-0 text-right text-base font-medium text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">{`Jack Lewis`}</div>
                </button>
                <div className=" relative z-[3] h-[21px] w-5 " />
                <div className="rounded-39xl z-[3] flex max-w-full flex-row items-start justify-start gap-[9px] self-stretch [backdrop-filter:blur(23px)] ">
                  <div className="relative inline-block max-w-full  flex-1 !bg-clip-text  font-medium [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))] lg:mt-4">
                    With almost 1000 games on CARV Play, it became my go to
                    place when I want to find a new Web3 game to play 😁. I
                    recently discovered MagicCraft there and I'm having a lot of
                    fun!
                  </div>
                </div>
                <div className="flex flex-row gap-10 lg:mt-5">
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame1} className="mr-2" alt="Icon" />
                    93
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame2} className="mr-2" alt="Icon" />
                    70
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame3} className="mr-2" alt="Icon" />
                    3k
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame4} className="mr-2" alt="Icon" />
                    2k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ marginRight: '0 !important' }}
          className="h-full w-10/12"
          key="testimonial-1"
        >
          <div className="testimonials  flex h-full w-full flex-col items-start justify-start self-stretch rounded-3xl border-[1px] border-solid ">
            <div className="rounded-3xl bg-[#151149]   bg-opacity-70 bg-gradient-to-r">
              <div className="  rounded-3xl bg-gradient-to-b from-[#151149]  to-[#190E29] to-80% p-4  md:max-w-none">
                <button className=" z-[3] flex cursor-pointer flex-row items-start justify-start gap-[9px] rounded-3xl border-[1px] border-solid bg-[transparent] px-[12px] [backdrop-filter:blur(23px)] [background:linear-gradient(97.86deg,_#3f107a,_#740fb1),_linear-gradient(255.08deg,_#57186d,_#2a0d4e),_rgba(45,_44,_134,_0.8)]">
                  <div className="font-futura relative m-0 inline-block !bg-clip-text p-0 text-right text-base font-medium text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">{`ReignYerr`}</div>
                </button>
                <div className=" relative z-[3] h-[21px] w-5 " />
                <div className="rounded-39xl z-[3] flex max-w-full flex-row items-start justify-start gap-[9px] self-stretch [backdrop-filter:blur(23px)] ">
                  <div className="relative inline-block max-w-full  flex-1 !bg-clip-text  font-medium [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))] lg:mt-4">
                    Love MOBA games ever since I started playing Dota since 6
                    years old, and what I love about MagicCraft is its very
                    unique characters, fun game modes, and definitely the
                    community. Kudos to @MagicCraftGame $MCRT
                  </div>
                </div>
                <div className="flex flex-row gap-10 lg:mt-5">
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame1} className="mr-2" alt="Icon" />
                    33
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame2} className="mr-2" alt="Icon" />
                    77
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame3} className="mr-2" alt="Icon" />
                    2k
                  </div>
                  <div className=" m-2 flex flex-wrap">
                    <img src={frame4} className="mr-2" alt="Icon" />
                    1k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <button className="arrow-left arrow  absolute -left-4 top-[40%] z-10 cursor-pointer md:left-0 lg:-left-4 lg:top-[50%] ">
        <img src={left} alt="MCRT Token" className="cursor-pointer" />
      </button>
      <button className="arrow-right arrow absolute -right-4 top-[40%] z-10 cursor-pointer md:right-0 lg:-right-4 lg:top-[50%]  ">
        <img src={right} alt="MCRT Token" className="cursor-pointer" />
      </button>
    </div>
  )
}
export default Testimonial
