import React from 'react';
import { Container } from 'react-bootstrap';
import InputForm from './components/InputForm';
import TrieView from './components/TrieView';

const App = () => {
  return (
    <Container>
      <InputForm />
      <TrieView />
    </Container>
  );
};

export default App;
