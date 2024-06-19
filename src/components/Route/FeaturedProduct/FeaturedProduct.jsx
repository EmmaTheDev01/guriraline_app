import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../../Layout/Loader"; // Adjust import path as per your project structure

const FeaturedProduct = () => {
  const { allProducts } = useSelector((state) => state.products);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading} text-sm md:text-base lg:text-lg text-start`}>
          <h1>Featured Products</h1>
        </div>
        {allProducts ? (
          <Slider {...settings} className="mb-12 border-0">
            {allProducts.map((product, index) => (
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

export default FeaturedProduct;
