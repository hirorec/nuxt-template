import { BREAK_POINT, BASE_SIZE } from '~/constants'

export const isPC = (): boolean => {
  if (process.client) {
    return !matchMedia(`(max-width: ${BREAK_POINT}px)`).matches
  }

  return false
}

export const isSP = (): boolean => {
  if (process.client) {
    return matchMedia(`(max-width: ${BREAK_POINT}px)`).matches
  }

  return false
}

export const px = (value: number): number => {
  if (isSP()) {
    return (value / BASE_SIZE.SP) * window.innerWidth
  } else {
    return (value / BASE_SIZE.PC) * window.innerWidth
  }
}

export const sleep = (duration: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(null)
    }, duration)
  })

export const hex2rgb = (hex: string) => {
  if (hex.slice(0, 1) === '#') {
    hex = hex.slice(1)
  }
  if (hex.length === 3) {
    hex = hex.slice(0, 1) + hex.slice(0, 1) + hex.slice(1, 2) + hex.slice(1, 2) + hex.slice(2, 3) + hex.slice(2, 3)
  }

  return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map(function (str) {
    return parseInt(str, 16)
  })
}

export const lerp = (start: number, end: number, multiplier: number) => {
  return (1 - multiplier) * start + multiplier * end
}
