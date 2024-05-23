'use client'

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import style from './cartCounter.module.css';

import { addOne, initCounterState, resetCount, substractOne } from '@/store/counter/counterSlice';
import { useEffect } from 'react';

interface CartCounterProps {
  value: number;
}

interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async ():Promise<CounterResponse> => {
  const data = await fetch(`/api/counter`)
    .then( res => res.json ())
    .catch(e => console.error(e));

  return data satisfies CounterResponse;
}

export const CartCounter = ({ value = 0 }: CartCounterProps) => {
  const { count } = useAppSelector( state => state.counterReducer);
  const dispatch = useAppDispatch();

//  useEffect(() => {
//    dispatch( initCounterState(value) );
//  }, [dispatch, value])

  useEffect(() => {
    getApiCounter()
    .then( ({count}) => dispatch(initCounterState(count)) )
  }, [dispatch])

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
