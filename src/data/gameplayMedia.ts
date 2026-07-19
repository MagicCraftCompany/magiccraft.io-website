export const GAMEPLAY_VIDEO = {
  src: 'https://res.cloudinary.com/dfzcr2ch4/video/upload/v1717166775/video_gokp2f.mp4',
  poster: '/gameplay/magiccraft-triple-kill.webp',
  title: 'Official MagicCraft gameplay video',
} as const

export const GAMEPLAY_SCREENSHOTS = {
  tripleKill: {
    src: '/gameplay/magiccraft-triple-kill.webp',
    alt: 'MagicCraft hero landing a triple kill during an arena battle',
  },
  capturePoint: {
    src: '/gameplay/magiccraft-capture-point.webp',
    alt: 'MagicCraft hero contesting objectives in Capture the Point mode',
  },
  teamBattle: {
    src: '/gameplay/magiccraft-team-battle.webp',
    alt: 'Two MagicCraft teams fighting around an arena objective',
  },
  battleStats: {
    src: '/gameplay/magiccraft-battle-stats.webp',
    alt: 'MagicCraft victory screen showing team battle statistics',
  },
} as const
