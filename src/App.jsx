import products from "./data/productsData";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <h1>Rudhra Milks & Sweets</h1>
        <p>Fresh Milk • Butter • Ghee • Palkova</p>
      </div>

      <div className="section">
        <h2>Our Products</h2>

        <div className="products">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
