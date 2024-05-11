// import React, { useState } from "react";

// import { TailButton } from "../../components/Button/TailBtn";

// import noviceChestImage from "../../assets/img/magicrunner/novice-chest.png";
// import mythicChestImage from "../../assets/img/magicrunner/mythic-chest.png";
// import eternalChestImage from "../../assets/img/magicrunner/eternal-chest.png";
// import masterfulChestImage from "../../assets/img/magicrunner/masterful-chest.png";
// import legendaryChestImage from "../../assets/img/magicrunner/legendary-chest.png";
// import taskCompleteBg from "../../assets/bg-radial-daily-task.webp";
// import { cn } from "../../utils/common";
// import { setModal } from "../../components/Modal/Modal";
// import RewardModal from "./RewardModal";
// import gem from "../../assets/icons/icon-gem.svg";
// import mcrt from "../../assets/mcrt.png";
// import { useAppDispatch, useAppSelector } from "../../state/store";
// import { ChestType, Games, distributeRewards } from "../../api/utils/reward";
// import { throwSnack } from "../../components/SnackBar/SnackSimple";
// import { queryClient } from "../../components/ReactQueryProvider";
// import { AUTH_TOKEN_LOCAL_STORAGE_KEY } from "../../utils/constants";
// import { getCurrentUser } from "../../api/utils/lobby";
// import { setUser } from "../../state/currentUser/currentUserSlice";
// import { useMutation } from "react-query";

// export const getChestImage = ({ chestName }: { chestName: string }) => {
//   const chestNameInLower = chestName?.toLowerCase();

//   switch (chestNameInLower) {
//     case "novice":
//       return noviceChestImage;
//     case "mythic":
//       return mythicChestImage;
//     case "eternal":
//       return eternalChestImage;
//     case "masterful":
//       return masterfulChestImage;
//     case "legendary":
//       return legendaryChestImage;
//     default:
//       return noviceChestImage;
//   }
// };

// const getCurrentGame = (): Games => {
//   const url = window.location.pathname;
//   let currentGame;

//   switch (url) {
//     case "/magic-runner":
//       currentGame = Games.MAGIC_RUNNER;
//       break;
//     case "/magic-8ball":
//       currentGame = Games.MAGIC_8BALL;
//       break;
//     default:
//       currentGame = Games.UNKNOWN_GAME;
//   }

//   return currentGame;
// };

// export const areAllTasksComplete = (tasks: any[]) => {
//   const isCompleted = tasks?.every((task) => task.isCompleted);
//   // console.log(isCompleted);
//   // const totalGoal = tasks.reduce(
//   //   (total: Number, task: any) => total + task.goal,
//   //   0
//   // );

//   // const completedGoal = tasks.reduce(
//   //   (total: Number, task: any) => {total + task.currentProgress},
//   //   0
//   // );

//   // console.log(totalGoal);
//   // console.log(completedGoal);

//   // const areGoalsCompleted = totalGoal >= completedGoal;
//   // console.log(areGoalsCompleted);

//   return isCompleted;
// };

// const DailyTaskCard = (props: any) => {
//   const dispatch = useAppDispatch();

//   const { user } = useAppSelector((state) => state.currentUser);

//   const { tasks, isRedeemed, chestName, prizeCollected } = props;

//   const allTasksComplete = areAllTasksComplete(tasks);
//   const game = getCurrentGame();

//   const mutation = useMutation(
//     async ({ chestName }: { chestName: ChestType }) => {
//       const response = await distributeRewards({ chestType: chestName, game });
//       return response;
//     },
//     {
//       onSuccess: (data) => {
//         if (data?.response?.data?.error) {
//           const resData = data.response.data;
//           throwSnack("error", resData.error);
//         } else {
//           setModal({
//             title: "Rewards Collected!",
//             reward: true,
//             content: (props) => (
//               <RewardModal
//                 onClose={props.onClose}
//                 chest={chestName}
//                 data={data}
//               />
//             ),
//           });

//           setTimeout(() => {
//             if (game === Games.MAGIC_RUNNER) {
//               queryClient.invalidateQueries("magicrunnerData");
//             } else if (game === Games.MAGIC_8BALL) {
//               queryClient.invalidateQueries("magicBallData");
//             }

//             if (localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE_KEY)) {
//               getCurrentUser().then((user) => {
//                 dispatch(setUser(user));
//               });
//             }
//           }, 100);
//         }
//       },
//       onError: (data) => {
//         throwSnack(
//           "error",
//           "There was an error processing your rewards, please try again later"
//         );
//       },
//     }
//   );

//   const { status } = mutation;

//   return (
//     <div className="relative w-[350px]">
//       <div className="daily-task-heading-clip2 absolute -top-2 left-0 z-10 w-full bg-gradient-to-br  from-[#9AD4FD] to-[#8DC4FE]/40 p-px">
//         <div className="daily-task-heading-clip w-full bg-[#202660] px-6 pb-6 pt-4">
//           <h3 className="bg-gradient-to-b from-white to-white/75 bg-clip-text text-left font-serif text-2xl text-transparent lg:text-3xl lg:leading-8">
//             {props?.chestName} <br />
//             <span className="text-xl">chest</span>
//           </h3>
//         </div>
//       </div>
//       <div className="magicrunner-daily-task-clip mx-auto h-full min-h-[450px] w-[calc(100%-1.5rem)] bg-gradient-to-b from-[#9AD4FD] to-[#8DC4FE]/40 p-[1.5px]">
//         <div className="magicrunner-daily-task-clip mx-auto h-full min-h-[450px] w-full bg-gradient-to-b from-[#2483C9] to-[#0039CB]">
//           {allTasksComplete && isRedeemed ? (
//             <>
//               <div className="flex h-full flex-col content-center justify-center space-y-6 px-4 text-white">
//                 <div>
//                   <img
//                     width={180}
//                     height={120}
//                     src={getChestImage(props)}
//                     alt={`${chestName} chest`}
//                     className="mx-auto drop-shadow-lg"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   {chestName.toLowerCase() === "novice" && (
//                     <p className="pb-4 text-center text-lg font-bold tracking-wider text-white">
//                       You have collected all the Novice Chests for today.
//                     </p>
//                   )}

//                   <p className="text-center text-lg font-bold tracking-wider text-white">
//                     Prize Collected:
//                   </p>

//                   <div className="flex flex-wrap items-center justify-center gap-2">
//                     {Object.entries(prizeCollected).map(
//                       ([key, value]) =>
//                         value !== 0 && (
//                           <div
//                             key={key}
//                             className="rounded-full bg-gradient-to-r from-transparent via-white to-transparent p-px"
//                           >
//                             <div className="flex min-w-[75px] items-center gap-1 rounded-full bg-gradient-to-t from-[#634299] to-[#4148E9] to-50% p-2 text-white shadow-lg">
//                               <img
//                                 width={25}
//                                 height={25}
//                                 src={key === "mcrt" ? mcrt : gem}
//                                 alt="MCRT"
//                               />
//                               <span className="font-bold">
//                                 +{String(value)}
//                               </span>
//                             </div>
//                           </div>
//                         )
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </>
//           ) : allTasksComplete ? (
//             <div className="relative z-10 flex h-full flex-col content-center justify-center space-y-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-[#1140AD] px-8 pb-14 pt-24 ">
//               <img
//                 src={taskCompleteBg}
//                 className="absolute inset-0 -z-10 my-auto h-[80%] w-full"
//               />
//               <p className="text-center text-lg font-bold tracking-wider text-white">
//                 All missions complete!
//               </p>

//               <div className="relative">
//                 <img
//                   width={180}
//                   height={120}
//                   src={getChestImage(props)}
//                   alt={props?.chestName}
//                   className="mx-auto drop-shadow-xl"
//                 />
//               </div>

//               <ProgressBar
//                 className="shadow-progressComplete"
//                 taskData={tasks}
//               />

//               <div className="text-center">
//                 <TailButton
//                   loading={status === "loading"}
//                   onClick={() =>
//                     mutation.mutate({
//                       chestName: chestName,
//                     })
//                   }
//                 >
//                   Collect Now
//                 </TailButton>
//               </div>
//             </div>
//           ) : (
//             <div className="flex h-full flex-col content-center justify-center space-y-4 px-8 pb-14 pt-24 ">
//               <img
//                 width={170}
//                 height={120}
//                 src={getChestImage(props)}
//                 alt={props?.chestName}
//                 className="mx-auto drop-shadow-xl"
//               />

//               <div className="space-y-4 ">
//                 <ProgressBar taskData={tasks} />

//                 <div className="col-auto grid grid-cols-magic-runner-chest gap-1">
//                   {tasks.map((task: any) => (
//                     <React.Fragment key={task.description}>
//                       <div className="">
//                         <p
//                           className={cn("text-lg font-medium text-white", {
//                             "opacity-50": task.isCompleted,
//                           })}
//                         >
//                           {task.description}:
//                         </p>
//                       </div>
//                       <div>
//                         <span
//                           className={cn("text-lg font-bold text-primary", {
//                             "text-white/50": task.isCompleted,
//                           })}
//                         >
//                           {task.currentProgress > task.goal
//                             ? task.goal
//                             : task.currentProgress}
//                           /{task.goal}
//                         </span>
//                       </div>
//                     </React.Fragment>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export const ProgressBar = ({
//   taskData,
//   className,
// }: {
//   taskData: any;
//   className?: string;
// }) => {
//   const noOfTasks = taskData.length;
//   const completedTasks = taskData.reduce(
//     (total: number, task: any) => (task.isCompleted ? total + 1 : total),
//     0
//   );

//   const progressInPercentage = (completedTasks / noOfTasks) * 100;

//   const progress = progressInPercentage.toFixed(1);

//   return (
//     <div
//       className={cn(
//         "min-h-[10px] w-full rounded-full bg-gradient-to-r from-transparent via-[#5377BD] to-transparent p-[2px]",
//         className
//       )}
//     >
//       <div className="h-[10px] w-full rounded-full bg-[#1A1A51]">
//         <div
//           style={{ width: `${progress}%` }}
//           className="h-full max-w-full rounded-full bg-primary transition"
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default DailyTaskCard;
