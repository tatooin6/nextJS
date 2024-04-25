
import { CartCounter } from '@/shopping-cart';
import style from './counter.page.module.css'

export const metadata = {
  title: 'Shopping Cart',
  description: 'Shopping Cart',
};

export default function CounterPage() {
  
  // Generated from server side
  // value can become from database
  return (
    <div className={ style['counter-page'] }>
      <span>Shopping cart products</span>
      <CartCounter value={ 30 } />
    </div>
  );
}
