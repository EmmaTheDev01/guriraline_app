import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {categoriesData } from "../../../static/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MobileCategories = () => {
  const navigate = useNavigate();

  // Settings for react-slick slider
  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <>
      <div className="w-[97%] bg-[#29625d] p-1 rounded-lg mt-3 mb-3 ml-auto mr-auto" id="categories">
      <h6 className="text-[18px] font-[500] text-[#fed592] m-3">Categories</h6>
        <Slider {...sliderSettings}>
          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = () => {
                navigate(`/products?category=${i.title}`);
              };
              return (
                <div key={i.id} className="px-2 mt-2 w-[80px]">
                  <div className="w-100 h-[120px] block cursor-pointer overflow-hidden" onClick={handleSubmit}>
                    <img src={i.image_Url} className="w-[70px] h-[70px] bg-white rounded-[100%] object-cover" alt="" />
                    <h5 className={`w-20 gap-4 text-[14px] mt-1 text-[#fed592] font-[500] hover:text-[#fed592] leading-[1.3]`}>{i.title}</h5>
                  </div>

                </div>

              );
            })}
        </Slider>
        <Link>
          <span className="text-xs mr-2 flex items-end justify-end text-white hover:text-[#fed592]">See All</span>
        </Link>
      </div>
    </>
  );
};

export default MobileCategories;
