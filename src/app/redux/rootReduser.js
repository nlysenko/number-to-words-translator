/**
 *
 * rootReduser
 *
 */
import initialState from './initialState'
import { TOGGLE_EN, TOGGLE_EN_US, TOGGLE_RU, TOGGLE_UK } from './constans'

const rootReduser = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_EN:
      return { ...state, en: { ...state.en, enabled: !state.en.enabled } }

    case TOGGLE_EN_US:
      return {
        ...state,
        en_us: { ...state.en_us, enabled: !state.en_us.enabled },
      }

    case TOGGLE_RU:
      return { ...state, ru: { ...state.ru, enabled: !state.ru.enabled } }

    case TOGGLE_UK:
      return { ...state, uk: { ...state.uk, enabled: !state.uk.enabled } }

    default:
      return state
  }
}

export default rootReduser
