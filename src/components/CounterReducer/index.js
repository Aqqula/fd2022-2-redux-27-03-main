import React, { useReducer } from "react";
import reducer from "./reducer";

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
  const add = ()=>{dispatch({type:'add', payload: 5})}
  const sub = ()=>{dispatch({type:'sub', payload: 5})}
  return <div>
    <h2>count: {state.count}</h2>
    <button onClick={add}>+</button>
    <button onClick={sub}>-</button>
  </div>;
};

export default CounterReducer;
