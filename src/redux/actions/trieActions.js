import { TRIE_INSERT } from './types';

export const trieInsert = (word) => (dispatch) => {
  dispatch({
    type: TRIE_INSERT,
    payload: word,
  });
};
