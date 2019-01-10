export const INCREMENT_LEVEL = 'INCREMENT_LEVEL';
export const DECREMENT_LEVEL = 'DECREMENT_LEVEL';
export const TOGGLE_PAUSE = 'TOGGLE_PAUSE';

export const incrementLevel = () => ({
  type: INCREMENT_LEVEL
});

export const decrementLevel = () => ({
  type: DECREMENT_LEVEL
});

export const togglePause = () => ({
  type: TOGGLE_PAUSE
})