'use client'

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import style from './cartCounter.module.css';

import { useState } from 'react';
import { addOne, substractOne } from '@/store/counter/counterSlice';

enum Operation {
  Add,
  Substract
}

interface CartCounterProps {
  value: number;
}

export const CartCounter = ({ value = 0 }: CartCounterProps) => {
  const { count } = useAppSelector( state => state.counterReducer);
  const dispatch = useAppDispatch();
// const [count, setCount] = useState(value);
//   const handleOperationBy = (operation: Operation) => {
//     switch (operation) {
//       case Operation.Add:
//         setCount(count+1);
//         break;
// 
//       case Operation.Substract:
//         setCount(count-1);
//         break;
// 
//       default:
//         break;
//     }
// 
//   }
  return (
    <>
      <span className={ style.counter }>{ count }</span>

      <div className='flex'>
        <button 
          type="button"
          className={ style.button }
          onClick={ () => dispatch( substractOne() ) }
        >-1</button>
        <button 
          type="button"
          className={ style.button }
          onClick={ () => dispatch( addOne() ) }
        >+1</button>
      </div>
    </>
  )
}
