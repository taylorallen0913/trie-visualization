import React from 'react';
import Tree from 'react-d3-tree';
import { Trie } from '../utils/trie';

const myTreeData = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];

const TrieView = () => {
  return <Tree data={myTreeData} />;
};

export default TrieView;
