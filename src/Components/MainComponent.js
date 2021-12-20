import ProductComponent from "./ProductComponent";
import * as PropTypes from "prop-types";

const MainComponent = ({ products, onAdd }) => {
  const renderProducts = products.map((product) => (
    <ProductComponent key={product.id} product={product} onAdd={onAdd} />
  ));

  return (
    <main className="main_section">
      <h2 className="section_name">Product</h2>
      <div className="product_list">{renderProducts}</div>
    </main>
  );
};

MainComponent.propTypes = {
  onAdd: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

MainComponent.defaultProps = {
  product: {},
};

export default MainComponent;
