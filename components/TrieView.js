import dynamic, { noSSR } from 'next/dynamic';
import React from 'react';
import Tree from 'react-d3-tree';
import { Trie } from '../utils/trie';
Tree = ReactD3Tree.default;

const canUseDOM = () => {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
};

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
  if (!canUseDOM()) return null;
  return <Tree data={myTreeData} />;
};

const TrieViewNoSSR = dynamic(() => TrieView, { ssr: false });

export default () => TrieViewNoSSR;
