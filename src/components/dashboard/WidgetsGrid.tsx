'use client'

import { useAppSelector } from "@/app/hooks";

import { IoCartOutline } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"

export const WidgetsGrid = () => {
  // const { whatIsOnTheInitialState } = useSelector( theBigState => theBigState.counterReducer ); 
  const { count } = useAppSelector( (store) => store.counterReducer );
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget 
        title={ 'Counter' }
        subTitle={ 'Added Products' }
        label={ `${ count }` }
        icon={ <IoCartOutline size={ 50 } className="text-blue-500" /> }
        href={ 'counter' }
      />
      <SimpleWidget 
        label={ 'Other' }
      />
    </div>
  )
}
