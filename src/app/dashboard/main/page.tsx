'use client'

import { SimpleWidget } from "@/components";
import { useAppSelector } from "@/app/hooks";

// export const metadata = {
//   title: 'Admin Dashboard',
//   description: 'Admin Dashboard content.',
// };

export default function MainPage() {

  // const { whatIsOnTheInitialState } = useSelector( theBigState => theBigState.counterReducer ); 
  const { count } = useAppSelector( (store) => store.counterReducer );

  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">General Information</span>
      <span className="text-xl"> count on: { count } </span>
      <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget title={`${count}`} />
      </div>

    </div>
  );
}
