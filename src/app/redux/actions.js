/**
 *
 * actions
 *
 */

import { TOGGLE_RU, TOGGLE_EN, TOGGLE_EN_US, TOGGLE_UK } from './constans'

export const toggleRu = () => {
  return {
    type: TOGGLE_RU,
  }
}

export const toggleEn = () => {
  return {
    type: TOGGLE_EN,
  }
}

export const toggleEnUs = () => {
  return {
    type: TOGGLE_EN_US,
  }
}

export const toggleUk = () => {
  return {
    type: TOGGLE_UK,
  }
}
