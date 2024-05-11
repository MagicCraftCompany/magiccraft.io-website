// import Footer from '@/components/Footer/Footer'
// import Header from '@/components/Header/Header'

// import magiccraftCard from '@/assets/images/magiccraft-card.webp'
// import magic8ballCard from '@/assets/images/magic-8-ball-card.webp'
// import bg from '@/assets/images/Frigard foreground1 1.png'

// import backgroundimage from '@/assets/images/bg-1.png'
// import runnericon from '@/assets/images/runner.png'

// import steam from '@/assets/icons/icon-steam.svg'
// import AppleIcon from '@/assets/icons/icon-apple.svg'
// import googleicon from '@/assets/images/logo (1).png'









//  import Hero from "../components/Hero/Hero";
//   import DailyTaskCard from "./Magicrunner/DailyTaskCard";
// // import CountdownTimer from "../../components/CountdownEOD";
// import clockIcon from "../../assets/icons/icon-clock.svg";
//  import { useQuery } from "react-query";
//  import { useAppSelector } from "./../state/store";
// // import { getMagicRunnerData } from "../../api/utils/magicrunner";

// // import SimpleLoading from "../../components/SimpleLoading";
// // import { ConnectWalletBtn } from "../../components/Header/ConnectWalletBtn";
// // import { TailButton } from "../../components/Button/TailBtn";


 











// function Homepagemagicrunner() {


//    const { user } = useAppSelector((state: { currentUser: any }) => state.currentUser);

//    const { data, status, error } = useQuery(
//     ["magicrunnerData", user?.email],
//     async () => {
//        const response = await getMagicRunnerData(user?.email);
//        return response;
//     },
//     { refetchInterval: 60000, enabled: !!user }
//    );




//   const game_settings = data?.data?.game_settings;


//   return (
//     <>
//       <div className="min-h-dvh w-full text-white">
//         <Header />
//         <main className="scroll-smooth pb-32">
//           <section className="relative flex flex-wrap">
//             <div className="z-10 mx-10 flex rounded-lg p-52">
//               <div className="p-4 text-left">
//                 <h3 className="bg-gradient-to-b from-white to-white/75 bg-clip-text font-serif text-2xl text-transparent drop-shadow-xl">
//                   <span className="p-5 text-6xl font-bold">MAGIC RUNNER</span>
//                   <br />
//                   <span className="p-5 text-2xl font-bold">
//                     RISE, RUN, REDEEM
//                   </span>
//                 </h3>
//                 <p className="p-5">
//                   Haunted by tragedy, Frigard races against fate, the lone
//                   survivor of
//                   <br />
//                   Vladislav's wrath and the treachery of Karas. Now, every step
//                   is a<br />
//                   desperate sprint for survival, a relentless chase where the
//                   shadow of <br />
//                   Vladislav looms, fuelling Frigard's flight for justice.
//                 </p>

//                 <div className="m-2 block h-px w-5/12 bg-gradient-to-r from-transparent via-[#556DE0] to-transparent" />
//                 <button className="m-5 rounded-lg bg-[#98FFF9] p-2 text-black">
//                   Play Now
//                 </button>
//               </div>
//             </div>

//             <div className="absolute right-0 top-0 z-0 h-[700px] w-1/2 bg-mrback bg-cover bg-center"></div> 
//            <div className="mrback-bg-gradient absolute inset-0  h-full w-full"></div> 


//            <div className="relative z-10 flex w-full flex-wrap  rounded-4xl bg-[#0C0218]">
//               <div className="space-y-5 px-8 pb-10 pt-5 md:px-10 ">
//                 <div className="relative h-full w-full overflow-hidden rounded-[20px]  bg-gradient-to-r  to-90% px-8 py-4 md:p-10  ">
//                   <h4 className="font-serif text-lg md:text-[22px]">
//                     <span className="text-white">DOWNLOAD NEW BUILD</span>
//                   </h4>
//                   <div className="flex flex-wrap items-center ">
//                     <span className=" p-4">
//                       <img src={steam} className=" p-4"></img>
//                       Get it on
//                       <br />
//                       <p className="text-2xl font-bold">Steam</p>
//                     </span>

//                     <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />
//                     <span className=" p-4">
//                       <img src={AppleIcon} className=" p-4"></img>
//                       Get it on
//                       <br />
//                       <p className="text-2xl font-bold">App store</p>
//                     </span>
//                     <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />
//                     <span className=" p-4">
//                       <img src={googleicon} className=" p-4"></img>
//                       Get it on
//                       <br />
//                       <p className="text-2xl font-bold">Google Play</p>
//                     </span>
//                   </div>
//                 </div>
               
//               </div>
//               <div className="h-30 my-10 block w-px bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />
//               <div className="space-y-5 px-8 pb-10 pt-5 md:px-10 ">
//                 <div className="relative h-full w-full overflow-hidden rounded-[20px]  bg-gradient-to-r  to-90% px-8 py-4 md:p-10  ">
//                   <h4 className="font-serif text-lg md:text-[22px] ">
//                     <span className="text-white ">STATISTICS</span>
//                   </h4>

//                   <div className="p-6">
//                     <span className=" my-4 py-4 text-[#98FFF9]">201</span>
//                     <br />
//                     <span className="my-4 py-4 text-white">
//                       {' '}
//                       Amount of Players
//                     </span>
//                     <br />
//                     <span className="my-4 py-4 text-[#98FFF9]">32,112</span>
//                     <br />
//                     <span className="my-4 py-4 text-white">
//                       Total MCRT earned
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="h-30 my-10 block w-px bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />
//               <div className="grid snap-x snap-mandatory auto-cols-min grid-flow-col gap-6 overflow-x-auto overscroll-contain overscroll-x-contain pt-12 px-4 mx-4">
//                 <a href="https://magiccraft.io" rel="noreferrer noopener">
//                   <div className="w-56 select-none snap-start">
//                     <img
//                       className="pointer-events-none select-none"
//                       src={magiccraftCard}
//                       alt="MagicCraft Game"
//                     />
//                   </div>
//                 </a>
//                 <div className="w-56 select-none snap-start ">
//                   <img
//                     className="pointer-events-noneselect-none"
//                     src={magic8ballCard}
//                     alt="Magic 8 Ball game"
//                   />
//                 </div>
//                 </div>
//             </div>
//           </section>

//           <section className="relative h-[700px] bg-center">
//             <img src={backgroundimage} />
//             <div className="absolute left-0 top-0 m-4 flex h-full w-full  flex-col  text-center">
//               <h2 className="text-balance font-serif text-4xl text-white">
//                 $ MCRT REWARDS
//               </h2>
//               <div className="flex w-11/12 flex-wrap">
//                 {/*carousel */}
//                 <div className="w-1/2"></div>
//                 {/*carousel */}
//                 <div className="my-4  w-6/12 rounded-lg bg-[#0A0917]  p-4">
//                   <div className="flex flex-wrap">
//                     <img src={runnericon} className="px-4"></img>
//                     <span className="p-5 text-4xl font-bold">how it works</span>
//                   </div>
//                   <div className="m-2 block h-px w-5/12 bg-gradient-to-r from-transparent via-[#556DE0] to-transparent" />

//                   <div className="p-4 text-left">
//                     <p className="p-5 ">
//                       As Frigard embarks on his harrowing journey, fleeing from{' '}
//                       <br />
//                       Vladislav, the magical essence of the MagicCraft universe
//                       <br />
//                       recognizes his valor and resilience. In this world where{' '}
//                       <br />
//                       magic and might intertwine, MagicCraft is a blessing and a{' '}
//                       <br />
//                       token of power granted by ancient guardians aligned
//                       <br />
//                       against the darkness Vladislav represents. These rewards{' '}
//                       <br />
//                       serve as crucial aids in Frigard’s journey, providing him
//                       with
//                       <br />
//                       the strength, speed, and resources needed to continue his{' '}
//                       <br />
//                       quest. Each completed daily task, a challenge set by these{' '}
//                       <br />
//                       unseen protectors, earns Frigard these mystical rewards,{' '}
//                       <br />
//                       support his quest for survival and justice.
//                     </p>

//                     <button className="m-5 rounded-lg  border-2 border-solid border-[#98FFF9] p-2 text-[#98FFF9] ">
//                       Play Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//           {/* {/* daily mission*/ }
//           <div className="relative space-y-10 pb-80 pt-14 outline-2 outline-lime-500">
//       <section className="mx-auto w-11/12 max-w-[1650px]">
//          <Hero /> 
//       </section>
//       {/* <section className="mx-auto w-11/12 max-w-[1650px] pt-20">
//         <div className="flex flex-col items-center gap-10 md:flex-row md:gap-20">
//           <h2 className="bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent lg:text-left lg:text-[42px]">
//             Statistics
//           </h2>

//           <div className="w-full rounded-[10px] border border-[#3F3F7A] bg-[#412D92]/30 backdrop-blur-xl md:w-fit">
//             <div className="flex w-full flex-col gap-10 p-10 text-white sm:items-center md:w-fit md:flex-row">
//               <div className="flex items-center gap-4">
//                 <p className="text-lg font-medium">Amount of games:</p>
//                 <div className="flex items-center gap-2 text-primary">
//                   <LuHeart size={25} />
//                   <p className="text-2xl font-medium">
//                     {game_settings?.lifetimeRuns ?? 0}
//                   </p>
//                 </div>
//               </div>
//               <div className="hidden w-px self-stretch bg-gradient-to-b from-transparent via-[#556DE0] to-transparent md:block"></div>

//               <div className="flex items-center gap-4">
//                 <p className="text-lg font-medium">Total MCRT earned:</p>
//                 <div className="flex items-center gap-2 text-primary">
//                   <img src={mcrtCoin} className="h-5 w-5" alt="MCRT coin" />
//                   <p className="text-xl font-medium">
//                     {game_settings?.coins ?? 0}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       <section className="mx-auto w-11/12 max-w-[1650px] space-y-12 pt-20">
//         <div className="flex flex-col items-center gap-8 md:flex-row">
//           <h2 className="bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent lg:text-left lg:text-[42px]">
//             Daily Missions
//           </h2>
//           <div>
//             <div className="mx-auto flex w-fit min-w-[250px] items-center gap-2 rounded-full bg-[#4457B84D] p-2 backdrop-blur-xl sm:min-w-[340px]">
//               <div className="flex items-center gap-2 rounded-full bg-[#98FFF9] py-2 pl-2 pr-6">
//                 <img
//                   width={55}
//                   height={55}
//                   src={clockIcon}
//                   alt="Countdown clock"
//                 />
//                 <p className="text-base font-medium text-blue-900 sm:text-xl">
//                   Ends In:
//                 </p>
//               </div>
//               {/* <CountdownTimer /> */}
//             </div>
//           </div>
//         </div>

//         {/* <div className="space-y-6 pt-10">
//           <h3 className="bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-xl text-transparent lg:text-3xl">
//             Chest rewards are getting an upgrade. <br /> We will be back soon.
//           </h3>

//           <h5 className="bg-gradient-to-b from-white to-white/75 bg-clip-text text-center text-lg text-transparent lg:text-2xl">
//             Thank you for your patience
//           </h5>
//         </div> */}

//         <div className=" w-full rounded-[10px] bg-gradient-to-b from-[#3F3F7A] to-transparent p-px shadow-lg">
//           <div className="h-full  w-full rounded-[10px] bg-gradient-to-br from-[#171749] to-[#1D1D5F]">
//             {!user ? (
//               <div className="space-y-6 px-6 py-10 text-center">
//                 <h3 className="mx-auto w-fit bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-3xl text-transparent lg:text-center lg:text-4xl">
//                   Login to view your Daily mission progress
//                 </h3>
//                 <ConnectWalletBtn withLogin />
//               </div>
//             ) : status === "loading" ? (
//               <div className="flex min-h-[350px] w-full justify-center">
//                 <SimpleLoading />
//               </div>
//             ) : !game_settings ? (
//               <div className="mx-auto w-full space-y-10 px-4 py-10 text-center">
//                 <h4 className="mx-auto max-w-xl bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-sans text-2xl text-transparent lg:text-3xl">
//                   Download Magic Runner game on your Android device to track
//                   daily missions and collect exciting rewards
//                 </h4>

//                 <p className="text-lg text-neutral-100">
//                   Coming soon on Google Play Store and App Store
//                 </p>
//               </div>
//             ) : (
//               <div className="grid w-full snap-x auto-cols-max grid-flow-col gap-6 overflow-x-auto overscroll-x-contain px-6 py-10">
//                 {game_settings?.chests?.map((chest: any) => {
//                   return <DailyTaskCard key={chest.id} {...chest} />;
//                 })}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="pt-10 text-center">
//           <TailButton>
//             <a
//               className="text-base sm:text-lg"
//               href="https://drive.google.com/uc?export=download&id=1jh9gP-W1Y_nIMLE3TbYxAwNJDJrByIKl"
//               target="_blank"
//               rel="noreferrer noopener"
//             >
//               Download Magic Runner APK
//             </a>
//           </TailButton>
//         </div>
//       </section>
//     </div>
//           {/* daily mission*/ } */}
//         </main>
//         <Footer />
//       </div>
//     </>
//   )
// }
// export default Homepagemagicrunner
