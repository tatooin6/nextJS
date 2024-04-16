'use client'

import style from './cartCounter.module.css';

import { useState } from 'react';

enum Operation {
  Add,
  Substract
}

interface CartCounterProps {
  value: number;
}

export const CartCounter = ({ value = 0 }: CartCounterProps) => {
  const [counter, useCounter] = useState(value);
  const handleOperationBy = (operation: Operation) => {
    switch (operation) {
      case Operation.Add:
        useCounter(counter+1);
        break;

      case Operation.Substract:
        useCounter(counter-1);
        break;

      default:
        break;
    }

  }
  return (
    <>
      <span className={ style.counter }>{ counter }</span>

      <div className='flex'>
        <button 
          type="button"
          className={ style.button }
          onClick={ () => handleOperationBy(Operation.Add) }
        >+1</button>
        <button 
          type="button"
          className={ style.button }
          onClick={ () => handleOperationBy(Operation.Substract) }
        >-1</button>
      </div>
    </>
  )
}
