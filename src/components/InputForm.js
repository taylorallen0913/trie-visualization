import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Trie } from '../utils/trie';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput } from '../redux/actions/inputActions';
import { trieInsert } from '../redux/actions/trieActions';

const InputForm = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input);
  const [lastWord, setLastWord] = useState();

  const getWord = (word) => {
    if (word.substr(-1) === ' ') {
      const removeWhitespace = word.split(' ').filter((word) => word !== '');
      if (lastWord !== removeWhitespace[removeWhitespace.length - 1]) {
        const wordToAdd = removeWhitespace[removeWhitespace.length - 1];
        dispatch(trieInsert(wordToAdd));
      }

      setLastWord(removeWhitespace[removeWhitespace.length - 1]);
    }
  };

  return (
    <>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Input Form</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          value={input}
          onChange={(val) => {
            getWord(val.target.value);
            dispatch(changeInput(val.target.value));
          }}
        />
      </Form.Group>
      <button onClick={() => dispatch(trieInsert('hello'))}>Click</button>
    </>
  );
};

export default InputForm;
