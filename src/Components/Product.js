export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="product_item">
      <img className="product_img" src={product.image} alt={product.name} />
      <h3 className="product_name">{product.name}</h3>
      <div className="product_block">
        <div className="product_price">{product.price} $</div>
        <div>
          <img className="product_cart_img"
            onClick={() => onAdd(product.id)}
            src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-shopping-cart-miscellaneous-kiranshastry-lineal-kiranshastry.png"
            alt="Add To Cart"
          />
        </div>
      </div>
    </div>
  );
}

export { Product };
