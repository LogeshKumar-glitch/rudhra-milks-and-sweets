import { products } from "../data/productsData";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <div className="products-page">
      <h2>Our Products</h2>

      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Products;
