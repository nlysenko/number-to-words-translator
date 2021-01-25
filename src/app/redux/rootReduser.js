/**
 *
 * rootReduser
 *
 */
import initialState from './initialState'
import { TOGGLE_RU, TOGGLE_EN, TOGGLE_EN_US, TOGGLE_UK } from './constans'

const rootReduser = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_RU:
      return { ...state, lang: { ...state.lang, ru: !state.lang.ru } }

    case TOGGLE_EN:
      return { ...state, lang: { ...state.lang, en: !state.lang.en } }

    case TOGGLE_EN_US:
      return { ...state, lang: { ...state.lang, en_us: !state.lang.en_us } }

    case TOGGLE_UK:
      return { ...state, lang: { ...state.lang, uk: !state.lang.uk } }

    default:
      return state
  }
}

export default rootReduser
