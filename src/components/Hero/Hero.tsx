import magiccraftBanner from "../../assets/magiccraft-banner.webp";

import { LuArrowUpRight } from "react-icons/lu";
import dailyTaskIcon from "../../assets/icons/daily-task-large.svg";
import mcrtIcon from "../../assets/mcrt.png";

import magicrunnerBanner from "../../assets/magicRunnerBannerNew.webp";
import magicballBanner from "../../assets/magicball-banner.webp";
import magiccraftCard from "../../assets/magiccraft-card.webp";
import magicrunnerCard from "../../assets/magicrunner-card.webp";
import magic8ballCard from "../../assets/magic8ball-card.webp";
import { Link, useLocation } from "react-router-dom";

function CurrentGameCards() {
  const location = useLocation();
  const currentPath = location.pathname;

  if (currentPath === "/magic-runner") {
    return (
      <>
        <div className="w-40 cursor-pointer">
          <Link to={"/"}>
            <img
              width={165}
              height={130}
              className="max-w-full"
              src={magiccraftCard}
              alt="MagicCraft Game"
            />
          </Link>
        </div>

        <div className="w-40 cursor-pointer">
          <Link to={"/magic-8ball"}>
            <img
              width={165}
              height={130}
              src={magic8ballCard}
              alt="Magic 8 Ball game"
            />
          </Link>
        </div>
      </>
    );
  } else if (currentPath === "/magic-8ball") {
    return (
      <>
        <div className="w-40 cursor-pointer">
          <Link to={"/"}>
            <img
              width={165}
              height={130}
              className="max-w-full"
              src={magiccraftCard}
              alt="MagicCraft Game"
            />
          </Link>
        </div>

        <div className="w-40 cursor-pointer">
          <Link to={"/magic-runner"}>
            <img
              width={165}
              height={130}
              src={magicrunnerCard}
              alt="MagicRunner Game"
            />
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="w-40 cursor-pointer">
          <Link to={"/magic-runner"}>
            <img
              width={165}
              height={130}
              src={magicrunnerCard}
              alt="MagicRunner Game"
            />
          </Link>
        </div>
        <div className="w-40 cursor-pointer">
          <Link to={"/magic-8ball"}>
            <img
              width={165}
              height={130}
              src={magic8ballCard}
              alt="Magic 8 Ball Game"
            />
          </Link>
        </div>
      </>
    );
  }
}

const getCurrentBanner = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  switch (currentPath) {
    case "/magic-runner":
      return magicrunnerBanner;
    case "/magic-8ball":
      return magicballBanner;
    default:
      return magiccraftBanner;
  }
};

export default function Home() {
  // const user = useAppSelector((state: { currentUser: { user: any; }; }) => state.currentUser.user);
  const location = useLocation();
  // const navigate = useNavigate();
  // const dailyTasks = useAppSelector((state: { dailyTasks: any; }) => state.dailyTasks);

  const currentBanner = getCurrentBanner();

  const currentPath = location.pathname;
  return (
    <>
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
        <div className="hidden w-full lg:block lg:w-[55%]">
          <div className="">
            <img
              width={950}
              height={370}
              src={currentBanner}
              className="max-w-full"
              alt="Magiccraft Game"
            />
          </div>
        </div>
        <div className="flex w-full flex-col-reverse content-between gap-y-2 text-white  md:flex-col lg:w-[40%] ">
          <div className="w-full flex-grow">
            <div className="flex items-center justify-between">
              <div className="flex w-[45%] items-center gap-1 py-4 pl-3 md:gap-2 md:p-3">
                <img
                  src={dailyTaskIcon}
                  className="pointer-events-none w-8 max-w-full md:w-12 "
                  alt="Daily tasks"
                />

                {currentPath === "/magic-runner" ? (
                  <div className="w-full">
                    <p className="text-sm font-semibold md:text-base">
                      Daily Missions
                    </p>
                    <h4 className="py-2 font-serif text-lg uppercase md:text-2xl ">
                      0 out of 5
                    </h4>

                    <Link
                      to={"/magic-runner"}
                      className="inline-flex cursor-pointer items-center gap-[6px] text-primary"
                    >
                      <span>Check</span>
                      <LuArrowUpRight />
                    </Link>
                  </div>
                ) : (
                  <div className="w-full">
                    <p className="text-sm font-semibold md:text-base">
                      Daily Tasks
                    </p>
                    <h4 className="py-2 font-serif text-lg uppercase md:text-2xl ">
                      {5} out of 5
                    </h4>

                    <Link
                      to={"/dailytasks"}
                      className="inline-flex cursor-pointer items-center gap-[6px] text-primary"
                    >
                      <span>Check</span>
                      <LuArrowUpRight />
                    </Link>
                  </div>
                )}
              </div>
              <div className="max-h-full w-px flex-shrink-0  self-stretch bg-gradient-to-b from-transparent via-blue-300 to-transparent"></div>
              <div className="flex w-[45%] items-center gap-3 py-4 md:p-3">
                <img
                  src={mcrtIcon}
                  alt="mcrt coin"
                  className="h-auto w-8 md:w-12"
                />

                <div>
                  <p className="text-sm font-semibold md:text-base">
                    MCRT Earned today
                  </p>
                  <h4 className="py-1 font-serif text-lg uppercase md:text-2xl">
                    0 MCRT
                  </h4>
                  <div className="inline-flex items-center gap-[6px] text-primary opacity-70">
                    <span>Check</span>
                    <LuArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="block w-full space-y-6">
            <div className="grid snap-x snap-mandatory auto-cols-min grid-flow-col gap-3 overflow-x-auto overscroll-contain overscroll-x-contain">
              <CurrentGameCards />
            </div>

            <div className="block lg:hidden">
              <img
                width={600}
                height={400}
                src={currentBanner}
                className="max-w-full"
                alt="Magiccraft Game"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}