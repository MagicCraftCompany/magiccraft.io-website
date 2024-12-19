// games.ts

export interface Game {
    id: number;
    title: string;
    status?: "New game" | "Upcoming";
    image: string;
    about: string;
  }
  
  export const gamesData: Game[] = [
    {
      id: 1,
      title: "magicflutter",
      image:
        "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1724781917/WhatsApp_Image_2024-08-24_at_17.21.31_l2do0d.webp",
      about:"MagicFlutter is an addictive endless side-scroller where quick reflexes are your best friend. In this fast-paced tapping microgame, you’ll guide Dr. Lutz and his latest invention on a thrilling test flight through ancient ruins. Your mission: help him skillfully navigate through crumbling walls and towering pillars to achieve the highest score possible. How far can you soar before the ruins claim another victim?",
  
    },
    {
      id: 2,
      title: "runescribes",
      status: "New game",
      image:
        "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1726043298/Zap_-_MagicScribe_2_gjvuoq.webp",
        about:"RuneScribes is a fast-paced typing game that challenges your speed, reflexes, and accuracy. As the runes cascade down the screen, your task is to type them before they cross the danger line. The faster you type, the higher your score. Perfect for players looking to sharpen their typing abilities while enjoying an engaging challenge.",
  
    },
    {
      id: 4,
      title: "tetrablox",
      status: "New game",
      image:
        "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1724781918/WhatsApp_Image_2024-08-26_at_16.19.14_dfck72.webp",
        about:"TetraBlox brings a magical twist to the beloved Tetris formula, offering a fast-paced and addictive puzzle experience. In this reimagined classic, you'll stack and rotate falling shapes to form complete lines, clearing the board for high scores. Immerse yourself in the challenge and see how long you can keep the board clear as the pace intensifies.",
  
    },
    {
      id: 3,
      title: "magicrunner",
      image:
        "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1724781917/WhatsApp_Image_2024-08-24_at_17.56.06_awvhlm.webp",
        about:"MagicRunner is a high-speed 3D endless runner where you’ll need to maneuver through Vladislav’s domain. In this action-packed adventure, you'll dash, jump, and slide to avoid obstacles while collecting magical artifacts along the way. ",
  
    },
   
    {
      id: 5,
      title: "magicchess",
      status: "New game",
  
      image:
        "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1724781918/WhatsApp_Image_2024-08-20_at_15.13.54_dra6fl.webp",
        about:"MagicChess takes the classic gameplay of Chess into the mystical world of the Ashvales.  It’s a game beloved by the greatest minds of the realm. Test your wits and outmaneuver your opponents in a battle of intellect where every move could determine your place among the legends.", 
  
    },
    
  ];
// games.ts

