import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/countSlice';

const Counter = () => {
  const { count, step } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleAdd = () => dispatch(actions.addCount(step));
  const handleSub = () => dispatch(actions.subCount(step));
  const handleStep = ({ target: { value } }) =>
    dispatch(actions.setStep(Number(value)));
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
      <input type="number" value={step} onChange={handleStep} />
    </div>
  );
};

export default Counter;
