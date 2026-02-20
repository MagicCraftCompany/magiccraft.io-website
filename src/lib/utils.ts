import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function titleKeyMaper(i: number){
  if(i===0) return 'Features'
  if(i===1) return 'Game Content'
  if(i===2) return 'WEB3 SERVICES'
}

export const openExternalLink = (url: string, target: '_blank' | '_self' = '_blank') => {
  if (target === '_blank') {
    window.open(url, target, 'noopener,noreferrer')
  } else {
    window.location.href = url
  }
}