import * as PropTypes from "prop-types";

const CartComponent = ({ cartItems, onAdd, onRemove, onDelete }) => {
  const totalPrice = cartItems.reduce((accum, item) => accum + item.price, 0);
  return (
    <div className="section_cart">
      <div className="cart_header">
        <h2 className="section_title">My Shopping Cart</h2>
      </div>
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
              <button title="Remove" disabled={item.qty===1} onClick={() => onRemove(item.id)} className="btn_minus">
                −
              </button>
              <input className="input_sum" type="text" value={item.qty}></input>
              <button title="Add" onClick={() => onAdd(item.id)} className="btn_plus">
                +
              </button>
              <div className="item_qty">Total: {item.price} $</div>
              <button title="Delete" onClick={() => onDelete(item.id)} className="btn_del">
                ☓
              </button>
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="item_price">
              <div className="item_total">
                <strong>Total Price:</strong>
                <strong className="item_cost">{totalPrice.toFixed(2)} $</strong>
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
  onDelete: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  accum: PropTypes.object.isRequired,
};

CartComponent.defaultProps = {
  item: {},
  accum: {},
};

export default CartComponent;
