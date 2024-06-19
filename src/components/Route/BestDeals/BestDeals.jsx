import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../../Layout/Loader"; // Adjust import path as per your project structure

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);

  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      const allProductsData = [...allProducts];
      const sortedData = allProductsData.sort((a, b) => b.sold_out - a.sold_out);
      const firstFive = sortedData.slice(0, 5);
      setData(firstFive);
    }
  }, [allProducts]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show on larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Number of slides to show on tablets
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Number of slides to show on mobile devices
        },
      },
    ],
  };

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading} text-sm md:text-base lg:text-lg text-start`}>
          <h1 className="">Hot Deals</h1>
        </div>
        {allProducts ? (
          <Slider {...settings}>
            {data.map((product, index) => (
              <div key={index}>
                <ProductCard data={product} />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="flex justify-center items-center h-40">
            <Loader /> {/* Display loader while fetching products */}
          </div>
        )}
      </div>
    </div>
  );
};

export default BestDeals;
