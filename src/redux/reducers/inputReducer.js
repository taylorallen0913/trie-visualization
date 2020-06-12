import { CHANGE_INPUT } from '../actions/types';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return action.payload;
    default:
      return state;
  }
};
