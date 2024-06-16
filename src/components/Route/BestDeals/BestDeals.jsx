import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);

  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
    const firstFive = sortedData && sortedData.slice(0, 5);
    setData(firstFive);
  }, [allProducts]);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading} text-sm md:text-base lg:text-lg text-start`}>
          <h1 className="">Hot Deals</h1>
        </div>
        <div className="flex flex-wrap justify-start gap-[20px] sm:gap-[20px] md:gap-[25px] lg:gap-[25px] xl:gap-[30px] mb-12 border-0">
          {data && data.length !== 0 && (
            <>
              {data.map((i, index) => (
                <div key={index}>
                  <ProductCard data={i} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
