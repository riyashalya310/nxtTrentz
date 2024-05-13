import Header from "../Header";
import CartContext from "../context/CartContext";
import "./index.css";

const Checkout = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartList } = value;
      let totalPrice = 0;
      cartList.forEach((eachCartItem) => {
        totalPrice += eachCartItem.quantity * eachCartItem.price;
      });
      console.log(totalPrice);
      return (
        <>
          <Header />
          <div className="container">
            <div className="checkout-heading"><h1>Checkout</h1></div>
            <div className="inner-container">
              <div className="">
                <h1>Billing Details</h1>
                <form>
                  <div className="horizontal-input">
                    <div className="input-container">
                      <label htmlFor="">First Name</label>
                      <input type="text" required />
                    </div>
                    <div className="input-container">
                      <label htmlFor="">Last Name</label>
                      <input type="text" required />
                    </div>
                  </div>
                  <div className="input-container">
                    <label htmlFor="">Phone Number</label>
                    <input type="number" required />
                  </div>
                  <div className="input-container">
                    <label htmlFor="">Country/Region</label>
                    <select
                      placeholder="Select a country or a region"
                      required
                    ></select>
                  </div>
                  <div className="input-container">
                    <label htmlFor="">Street Address</label>
                    <input
                      type="text"
                      placeholder="house number and street name"
                      required
                    />
                    <input
                      type="text"
                      placeholder="apartment,suite,unit,etc.(optional)"
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="">Town/City</label>
                    <input type="text" required />
                  </div>
                  <div className="input-container">
                    <label htmlFor="">State/Country</label>
                    <input type="text" required />
                  </div>
                  <div className="input-container">
                    <label htmlFor="">Zip Code</label>
                    <input type="number" required />
                  </div>
                </form>
              </div>
              <div className="vertical-input">
                <h1 className="your-order-heading">Your Order</h1>
                <table>
                  <tr>
                    <th>Product</th>
                    <th>Subtotal</th>
                  </tr>
                  {cartList.map((item) => (
                    <>
                      <tr>
                        <td>
                          {item.title}X{item.quantity}
                        </td>
                        <td>{item.price * item.quantity}</td>
                      </tr>
                    </>
                  ))}
                  <tr>
                    <td>Total</td>
                    <td>{totalPrice}</td>
                  </tr>
                </table>
                <button type="submit" className="place-order-btn">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }}
  </CartContext.Consumer>
);

export default Checkout;
