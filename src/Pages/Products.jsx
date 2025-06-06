import { faker } from '@faker-js/faker';
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    const fakeProducts = Array.from({ length: 20 }).map(() => ({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      image: faker.image.url(),
    }));
    setProducts(fakeProducts);
  }, []);

  return (
    <div className='px-20 flex flex-col gap-10 justify-center'>
      <p className="text-[#195D2B] text-opacity-10 font-bold text-5xl">
        Explore Products
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>

  );
}
export default Products