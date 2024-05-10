import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = (props) => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const showEmptyView = cartList.length === 0
      const onClickCheckout=()=>{
        const {history}=props;
        history.replace('/checkout')
      }
      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <CartListView />
                <button type="submit" className='checkout-btn' onClick={onClickCheckout}>Checkout</button>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
