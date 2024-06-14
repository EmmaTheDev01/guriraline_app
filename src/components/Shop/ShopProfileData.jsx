import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";
import Ratings from "../Products/Ratings";
import { getAllEventsShop } from "../../redux/actions/event";

const ShopProfileData = ({ isOwner }) => {
  const { products } = useSelector((state) => state.products);
  const { events } = useSelector((state) => state.events);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(id));
    dispatch(getAllEventsShop(id));
  }, [dispatch, id]);

  const [active, setActive] = useState(1);

  const allReviews =
    products && products.map((product) => product.reviews).flat();

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <div className="w-full flex ">
          <div className="flex items-center" onClick={() => setActive(1)}>
            <h5
              className={`font-semibold text-base md:text-sm ${
                active === 1 ? "text-green-700" : "text-[#333]"
              } cursor-pointer pr-5`}
            >
              Shop Products
            </h5>
          </div>
          <div className="flex items-center" onClick={() => setActive(2)}>
            <h5
              className={`font-semibold text-base md:text-md ${
                active === 2 ? "text-green-700" : "text-[#333]"
              } cursor-pointer pr-5`}
            >
              Running Events
            </h5>
          </div>

          <div className="flex items-center" onClick={() => setActive(3)}>
            <h5
              className={`font-semibold text-base md:text-md ${
                active === 3 ? "text-green-700" : "text-[#333]"
              } cursor-pointer pr-5`}
            >
              Shop Reviews
            </h5>
          </div>
        </div>
        <div>
          {isOwner && (
            <div>
              <Link to="/dashboard">
                <div className={`${styles.button} block rounded-md h-10`}>
                  <span className="text-white">Go Dashboard</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      <br />
      {active === 1 && (
        <div className="flex flex-wrap justify-start gap-5 sm:gap-8 md:gap-10 lg:gap-12 mb-12">
          {products && products.map((product, index) => (
            <ProductCard data={product} key={index} isShop={true} />
          ))}
        </div>
      )}

      {active === 2 && (
        <div className="w-full">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
            {events && events.map((event, index) => (
              <ProductCard data={event} key={index} isShop={true} isEvent={true} />
            ))}
          </div>
          {events && events.length === 0 && (
            <h5 className="w-full text-center py-5 text-lg">
              No Events have for this shop!
            </h5>
          )}
        </div>
      )}

      {active === 3 && (
        <div className="w-full">
          {allReviews && allReviews.map((item, index) => (
            <div className="w-full flex my-4" key={index}>
              <img
                src={item.user.avatar?.url}
                className="w-12 h-12 rounded-full"
                alt=""
              />
              <div className="pl-2">
                <div className="flex w-full items-center">
                  <h1 className="font-semibold pr-2">{item.user.name}</h1>
                  <Ratings rating={item.rating} />
                </div>
                <p className="font-normal text-gray-700">{item?.comment}</p>
                <p className="text-gray-700 text-sm">2 days ago</p>
              </div>
            </div>
          ))}
          {allReviews && allReviews.length === 0 && (
            <h5 className="w-full text-center py-5 text-lg">
              No Reviews have for this shop!
            </h5>
          )}
        </div>
      )}
    </div>
  );
};

export default ShopProfileData;
