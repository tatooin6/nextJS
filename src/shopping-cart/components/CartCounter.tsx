'use client'

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import style from './cartCounter.module.css';

import { addOne, initCounterState, resetCount, substractOne } from '@/store/counter/counterSlice';
import { useEffect } from 'react';

interface CartCounterProps {
  value: number;
}

export const CartCounter = ({ value = 0 }: CartCounterProps) => {
  const { count } = useAppSelector( state => state.counterReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch( initCounterState(value) );
  }, [dispatch, value])

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
