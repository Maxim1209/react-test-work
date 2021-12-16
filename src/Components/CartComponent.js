import * as PropTypes from "prop-types";

const CartComponent = (
  { 
  cartItems,
  onAdd,
  onRemove}
  ) => {
  const totalPrice = cartItems.reduce((accum, item) => accum + item.price, 0);
  return (
    <div className="section_cart">
      <h2 className="section_name">Cart Items</h2>
      <div>
        <div className="cart_empty">
          {cartItems.length === 0 && (
            <div className="text_empty">
              Cart Is Empty
              <img
                className="img_empty"
                src="https://img.icons8.com/emoji/48/000000/pleading-face.png"
                alt="emoji"
              />
            </div>
          )}
        </div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart_product">
            <div className="item_name">{item.name}:</div>
            <div className="btn_control">
              <button onClick={() => onRemove(item.id)} className="btn_minus">
                -
              </button>
              <button onClick={() => onAdd(item.id)} className="btn_plus">
                +
              </button>
            </div>
            <div className="item_qty">
              {item.qty} kg: {item.price} $
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="item_price">
              <div className="item_total">
                <strong>Total Price:</strong>
              </div>
              <div>
                <strong>{totalPrice.toFixed(2)} $</strong>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

CartComponent.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  accum: PropTypes.object.isRequired
};

CartComponent.defaultProps = {
  item: {},
  accum: {}
};

export default CartComponent;
