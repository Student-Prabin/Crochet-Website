import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {

    const stored = JSON.parse(localStorage.getItem("products") || "[]");
    const selected = stored[parseInt(id)];
    setProduct(selected);
  }, [id]);

  if (!product) return <p className="p-4">Product not found</p>;

  return (
    <div className="p-10">
      <img src={product.image} alt={product.name} className="h-60 mb-4" />
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-green-600 mt-2 font-semibold">${product.price}</p>
      <Link to="/" className="text-blue-500 mt-4 block underline">← Back to Products</Link>
    </div>
  );
};

export default ProductDetail;
