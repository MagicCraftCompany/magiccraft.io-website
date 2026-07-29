export const homePrimaryActionClass = [
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full',
  'bg-gradient-to-r from-[#98FFF9] to-[#B591F2] px-6 py-3',
  'text-base font-bold text-[#03082f] no-underline',
  'shadow-[0_16px_45px_rgba(152,255,249,0.18)]',
  'transition-[transform,filter,box-shadow] duration-200',
  'hover:-translate-y-0.5 hover:brightness-105 hover:no-underline',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white',
  'focus-visible:ring-offset-2 focus-visible:ring-offset-[#03082f]',
  'motion-reduce:transform-none motion-reduce:transition-none',
].join(' ')

export const homeSecondaryActionClass = [
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full',
  'border border-white/20 bg-white/[0.07] px-6 py-3',
  'text-base font-semibold text-white no-underline backdrop-blur-xl',
  'transition-[transform,background-color,border-color] duration-200',
  'hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.11]',
  'hover:no-underline focus-visible:outline-none',
  'focus-visible:ring-2 focus-visible:ring-[#98FFF9]',
  'motion-reduce:transform-none motion-reduce:transition-none',
].join(' ')

export const homeQuietActionClass = [
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-3',
  'text-sm font-semibold text-white no-underline',
  'transition-[color,background-color] duration-200',
  'hover:bg-white/[0.06] hover:text-[#98FFF9] hover:no-underline',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]',
  'motion-reduce:transition-none',
].join(' ')

export const homeSurfaceClass = [
  'border border-white/10 bg-white/[0.035]',
  'shadow-[0_28px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl',
].join(' ')
