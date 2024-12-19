import { Game } from "@/data/game";
import React from "react";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { title, status, image } = game;
  const isNewGame = status === "New game";
  const isUpcoming = status === "Upcoming";

  return (
    <Link
      to={`https://games.magiccraft.io/gamepage/${title}`}
      className="relative flex flex-col items-start cursor-pointer rounded-[20.723px] border-[0.691px] border-[#3F3F7A] bg-[#11113A] shadow-[0px_2.763px_27.631px_0px_rgba(10,9,23,0.60)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(52,14,65,1)] overflow-hidden w-full"
    >
      <div className="relative w-full pb-[130%]"> {/* 4:3 aspect ratio */}
        <img 
          src={image} 
          alt={title} 
          className={`absolute top-0 left-0 w-full h-full object-cover ${isNewGame ? "opacity-100" : "opacity-100"}`} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E001F] via-transparent to-transparent"></div>

        <span className={`absolute left-[5%] top-[5%] rounded-full px-2 py-1 font-sans text-xs sm:text-sm font-bold ${
          isNewGame 
            ? "bg-[#1C1B24] text-[#98FFF9] " 
            : isUpcoming
              ? "bg-white text-black"
              : "hidden"
        }`}>
          {isNewGame ? "New game" : isUpcoming ? "Upcoming" : ""}
        </span>

        <div className="absolute bottom-[7%] left-[7%] right-[7%] text-white">
          <h2 className="font-medium font-serif text-lg md:text-base  xl:text-xl text-center">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;