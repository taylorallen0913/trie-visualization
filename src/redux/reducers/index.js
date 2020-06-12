import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import trieReducer from './trieReducer';

export default combineReducers({
  input: inputReducer,
  trie: trieReducer,
});
