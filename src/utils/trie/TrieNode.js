export default class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }

  setChildren(children) {
    this.children = children;
  }

  setIsEndOfWord() {
    this.isEndOfWord = true;
  }
}
