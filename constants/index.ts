export const PC_MIN_WIDTH: number = 800
export const PC_MAX_WIDTH: number = 2560
export const BREAK_POINT = 540
export const BREAK_POINT_TABLET = 834
export const HOST = 'https://www.creage.or.jp/plancheck'
export const RESERVE_URL = 'https://kensin.lifli.jp/creage/reserve/day?contract_code=00000001&contract_branch_code=0000'

export enum ENV {
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

export enum BODY_CLASS {
  OVERFLOW_HIDDEN = 'is-over-flow-hidden',
}

export enum DEVICE_TYPE {
  PC = 'pc',
  SP = 'sp',
}

export enum BASE_SIZE {
  PC = 1441,
  SP = 375,
}

export enum UI_TYPE {
  BUTTON = 'button',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
}

export enum PRIMARY_PLAN_OPTION_TYPE {
  BREST = 1,
  STOMACH = 2,
}
