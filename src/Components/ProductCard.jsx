import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
  return (
    <Link to="/details">
      <div className="bg-linear-to-r from-[#F38FFD] to-[#E8C6E7] rounded-2xl shadow-lg p-4 flex flex-col hover:scale-105 transition-transform duration-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
        <h2 className="text-lg font-semibold text-[#22185E] mb-2">{product.name}</h2>
        <p className="text-sm text-gray-600 flex-grow">{product.description}</p>
        <p className="text-lg font-bold text-pink-800 mt-4">Rs.{product.price}</p>
      </div></Link>
  );
};

export default ProductCard;
