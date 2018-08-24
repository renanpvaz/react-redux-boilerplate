import { handleActions } from 'redux-actions'

import { growlAdded, growlRemoved, } from './actions'

const initialState = {
  growls: [],
}

const hideAllGrowls = growls => growls.map(
  g => ({ ...g, hidden: true })
)

const hideGrowl = (target, growls) => growls.map(
  g => g === target
    ? ({ ...g, hidden: true })
    : g
)

const reducer = handleActions({
  [growlAdded]: (state, action) => ({
    ...state,
    growls: [
      ...hideAllGrowls(state.growls),
      action.payload,
    ],
  }),
  [growlRemoved]: (state, action) => ({
    ...state,
    growls: hideGrowl(action.payload, state.growls),
  }),
}, initialState)

export const getGrowls = state => state.ui.growls

export default reducer
