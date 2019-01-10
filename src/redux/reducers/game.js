import { INCREMENT_LEVEL } from './../actions';
import { DECREMENT_LEVEL } from './../actions';
import { TOGGLE_PAUSE } from './../actions';

const initialState = {
  level: 1,
  pause: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_LEVEL:
      if (state.level < 10) return Object.assign({}, state, {level: state.level + 1});
      return state;
    case DECREMENT_LEVEL:
      if (state.level > 1) return Object.assign({}, state, {level: state.level - 1});
      return state;
    case TOGGLE_PAUSE:
      return Object.assign({}, state, {pause: !state.pause});
    default:
      return state
  }
}