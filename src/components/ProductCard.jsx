function ProductCard({ product }) {
  const handleOrder = () => {
    const message = encodeURIComponent(
      `Hi Rudhra Milks & Sweets,
I want to order:
Product: ${product.name}
Price: ₹${product.price}
Quantity: 1`
    );

    window.open(
      `https://wa.me/919578518301?text=${message}`,
      "_blank"
    );
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>
      <button onClick={handleOrder}>Order Now</button>
    </div>
  );
}

export default ProductCard;
