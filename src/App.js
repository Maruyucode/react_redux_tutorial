import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from './actions';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello Redux !!</h1>
      <p>{counter}</p>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(signIn())}>
        {isLogged ? 'LOGOUT' : 'LOGIN'}
      </button>

      {isLogged ? <h3>LOGIN!!</h3> : "false"}
    </div>
  );
}

export default App;
