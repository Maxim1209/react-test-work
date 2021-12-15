import { Product } from "./Product";

export default function Main({products, onAdd}) {

    const renderProducts = products.map((product) => (
        <Product
            key={product.id}
            product={product}
            onAdd={onAdd}
        />
    ));

    return (
        <main className="main_section">
            <h2 className="section_name">Product</h2>
            <div className="product_list">
                {renderProducts}
            </div>
        </main>
    );

}

export {Main};