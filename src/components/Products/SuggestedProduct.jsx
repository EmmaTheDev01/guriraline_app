import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";

const SuggestedProduct = ({ data }) => {
  const { allProducts } = useSelector((state) => state.products);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    if (data && allProducts) {
      const filteredProducts = allProducts.filter((product) => product.category === data.category);
      setProductData(filteredProducts);
    }
  }, [data, allProducts]);

  return (
    <div>
      {data ? (
        <div className={`p-4 ${styles.section} mb-20`}>
          <h2 className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}>
            Related Products
          </h2>
          <div className={`flex justify-start flex-wrap gap-4 ${styles.relatedProducts}`}>
            {productData.map((product, index) => (
              <ProductCard data={product} key={index} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SuggestedProduct;
