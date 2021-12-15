import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header_nav">
      <div>
        <Link to="/">
          <h1 className="nav_link">Shop</h1>
        </Link>
      </div>
      <div className="cart_block">
        <Link to="/cart">
          <img className="header_cart" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-shopping-cart-miscellaneous-kiranshastry-lineal-kiranshastry.png" alt="Cart" />
        </Link>
        <Link className="link_badge" to="/cart">
        {props.countCartItems ? (
          <button className="badge">{props.countCartItems}</button>
        ) : (
          ""
        )}
        </Link>
      </div>
    </header>
  );
}

export { Header };
