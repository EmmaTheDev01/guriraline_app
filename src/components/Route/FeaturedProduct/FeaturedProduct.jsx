import React from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const { allProducts } = useSelector((state) => state.products);

  return (
    <div>
      <div className={`${styles.section} mb-20`}>
        <div
          className={`${styles.heading} text-sm md:text-base lg:text-lg text-start`}
        >
          <h1>Featured Products</h1>
        </div>
        {allProducts ? (
          <div className="flex justify-center flex-wrap gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-5">
            {allProducts.map((product, index) => (
              <div key={index}>
                <ProductCard data={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-40">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProduct;
