import TrieNode from './TrieNode';
import isEmpty from 'is-empty';

export default class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  add(input) {
    let node = this.root;

    for (var i = 0; i < input.length; i++) {
      if (!node.children[input[i]]) {
        node.children[input[i]] = new TrieNode(input[i]);
        node.children[input[i]].parent = node;
      }

      node = node.children[input[i]];

      if (i == input.length - 1) {
        node.setIsEndOfWord();
      }
    }
  }

  doAdd(input, node) {
    console.log('here');
    // If end of word (0 letters passed in)
    if (input.length === 0) {
      node.setIsEndOfWord();
    } else if (node == undefined) console.log('here');
    // If node does not have a character the same as input
    else if (
      Object.keys(node.children).length > 0 &&
      Object.keys(node.children).includes(input.charAt(0))
    ) {
      node.children.set([input.charAt(0)], new TrieNode());
      node = node.children[input.charAt(0)];
      return this.doAdd(input.substring(1), node);
    }

    // If there is already a character in a trie, add character to children
    else {
      node = node.children[input.charAt(0)];
      return this.doAdd(input.substring(1), node);
    }
  }
}
