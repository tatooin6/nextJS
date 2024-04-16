'use client'

import { useState } from 'react';
import style from './counter.page.module.css';

enum Operation {
  Add,
  Substract
}

export default function CounterPage() {

  const [counter, useCounter] = useState(0);

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
    <div className={ style['counter-page'] }>
      <span>Shopping cart products</span>
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
    </div>
  );
}
