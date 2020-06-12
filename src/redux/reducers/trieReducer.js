import { TRIE_INSERT } from '../actions/types';
import { Trie } from '../../utils/trie';

const initialState = { trie: new Trie() };

export default (state = initialState, action) => {
  switch (action.type) {
    case TRIE_INSERT:
      let trieWithNew = state.trie;
      trieWithNew.add(action.payload);
      return {
        trie: trieWithNew,
      };
    default:
      return state;
  }
};
