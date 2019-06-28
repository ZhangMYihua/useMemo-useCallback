import React, { useState, useCallback, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount1 = useCallback(() => setCount1(count1 + 1), [count1]);
  const incrementCount2 = useCallback(() => setCount2(count2 + 1), [count2]);

  const doSomethingComplicated = useMemo(() => {
    console.log('I am computing something complex');
    return ((count1 * 1000) % 12.4) * 51000 - 4000;
  }, [count1]);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        Count1: {count1}
        <button onClick={incrementCount1}>Increase Count1</button>
        Count2: {count2}
        <button onClick={incrementCount2}>Increase Count2</button>
        complexValue: {doSomethingComplicated}
      </header>
    </div>
  );
};

export default App;
