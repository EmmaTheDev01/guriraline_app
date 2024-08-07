import React, { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../../redux/actions/wishlist";

const MobileProductCard = ({ data, isEvent }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  return (
    <>
      <div className="w-[150px] h-[210px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer overflow-hidden">
        <div className="flex justify-end">
          {/* Side options container */}
          <div className="bg-[#fdd69e] rounded-full shadow-md p-2 absolute top-2 right-2 z-10">
            {click ? (
              <AiFillHeart
                size={22}
                className="cursor-pointer"
                onClick={() => removeFromWishlistHandler(data)}
                color={click ? "red" : "#333"}
                title="Remove from wishlist"
              />
            ) : (
              <AiOutlineHeart
                size={22}
                className="cursor-pointer"
                onClick={() => addToWishlistHandler(data)}
                color={click ? "red" : "#333"}
                title="Add to wishlist"
              />
            )}
          </div>
        </div>
        <Link to={`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`}>
          <img
            src={`${data.images && data.images[0]?.url}`}
            alt=""
            className="w-full h-[100px] object-cover"
          />
        </Link>

        <Link to={`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`}>
          <span className="pb-3 overflow-hidden font-bold text-sm">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </span>

          <div className="py-2 flex items-center justify-between absolute bottom-0">
            <div className="flex">
              <span className={`${styles.productDiscountPrice} text-xs text-[#29625d]`}>
                RWF
                {data.originalPrice === 0
                  ? data.originalPrice
                  : data.discountPrice}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MobileProductCard;
