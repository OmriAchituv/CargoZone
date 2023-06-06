import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

interface CounterProps {
  number: number;
  increment: () => void;
  decrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ number, increment, decrement }) => {
  return (
    <div className='counter' >
      <button className='btn btn-primary' onClick={decrement}>-</button>
      <input type="text" value={number.toString()} readOnly />
      <button className="btn btn-primary" onClick={increment}>+</button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    number: state.number,
  };
};

export default connect(mapStateToProps, { increment, decrement })(Counter);