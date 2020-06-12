import { CHANGE_INPUT } from './types';

export const changeInput = (input) => (dispatch) => {
  dispatch({
    type: CHANGE_INPUT,
    payload: input,
  });
};
