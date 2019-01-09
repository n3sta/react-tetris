import { INCREMENT_LEVEL } from './../actions';
import { DECREMENT_LEVEL } from './../actions';

const initialState = {
  level: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_LEVEL:
      if (state.level < 10) return Object.assign({}, state, {level: state.level + 1});
      return state;
    case DECREMENT_LEVEL:
      if (state.level > 1) return Object.assign({}, state, {level: state.level - 1});
      return state;
    default:
      return state
  }
}