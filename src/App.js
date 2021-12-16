import Header from "./Components/HeaderComponent";
import Basket from "./Components/CartComponent";
import data from "./configs/products";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import MainComponent from "./Components/MainComponent";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const isPapaya = (name) => name === "Papaya";
  const generatePriceWithDiscount = (product, quantity) => {
    return isPapaya(product.name) && quantity % 3 === 0
      ? product.price - 5
      : product.price;
  };

  const onAdd = (productId) => {
    const existingCartProduct = cartItems.find((item) => item.id === productId);
    const currentProduct = products.find((item) => item.id === productId);

    if (existingCartProduct) {
      const updatedCart = cartItems.map((item) => {
        const quantity = existingCartProduct.qty + 1;
        const updatedProduct = {
          name: existingCartProduct.name,
          image: existingCartProduct.name,
          id: existingCartProduct.id,
          qty: quantity,
          price:
            existingCartProduct.price +
            generatePriceWithDiscount(currentProduct, quantity),
        };

        return item.id === productId ? updatedProduct : item;
      });

      setCartItems(updatedCart);
    } else {
      const newProduct = {
        name: currentProduct.name,
        price: currentProduct.price,
        image: currentProduct.image,
        id: currentProduct.id,
        qty: 1,
      };

      setCartItems([...cartItems, newProduct]);
    }
  };

  const onRemove = (productId) => {
    const existingCartProduct = cartItems.find((item) => item.id === productId);
    const currentProduct = products.find((item) => item.id === productId);

    if (existingCartProduct.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== productId));
    } else {
      setCartItems(
        cartItems.map((item) => {
          const quantity = existingCartProduct.qty;
          const updatedProduct = {
            name: existingCartProduct.name,
            image: existingCartProduct.name,
            id: existingCartProduct.id,
            qty: quantity - 1,
            price:
              existingCartProduct.price -
              generatePriceWithDiscount(currentProduct, quantity),
          };

          return item.id === productId ? updatedProduct : item;
        })
      );
    }
  };
  return (
    <div className="container">
      <Header countCartItems={cartItems.length} />
      <div className="">
        <Routes>
          <Route
            exact
            path="/"
            element={<MainComponent products={products} onAdd={onAdd}></MainComponent>}
          />
          <Route
            exact
            path="/cart"
            element={
              <Basket
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              ></Basket>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
export default App;
