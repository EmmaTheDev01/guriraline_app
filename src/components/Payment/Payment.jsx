import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import { useSelector } from "react-redux";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const Payment = () => {
  const [orderData, setOrderData] = useState([]);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("latestOrder")) || [];
    setOrderData(orderData);
  }, []);

  const cashOnDeliveryHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const order = {
      cart: orderData?.cart,
      shippingAddress: orderData?.shippingAddress,
      user: user && user,
      totalPrice: orderData?.totalPrice,
      paymentInfo: {
        type: "Cash On Delivery",
      },
    };

    try {
      await axios.post(`${server}/order/create-order`, order, config);
      toast.success("Order successful!");
      localStorage.setItem("cartItems", JSON.stringify([]));
      localStorage.setItem("latestOrder", JSON.stringify([]));
      navigate("/order/success");
    } catch (error) {
      toast.error("Failed to place order. Please try again.");
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
        <div className="w-full 800px:w-[65%]">
          <PaymentInfo cashOnDeliveryHandler={cashOnDeliveryHandler} />
        </div>
        <div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
          <CartData orderData={orderData} />
        </div>
      </div>
    </div>
  );
};

const PaymentInfo = ({ cashOnDeliveryHandler }) => {
  return (
    <div className="w-full 800px:w-[95%] bg-[#fff] rounded-md p-5 pb-8">
      <div className="flex w-full pb-5 border-b mb-2">
        <div className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center">
          <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
        </div>
        <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
          Cash on Delivery
        </h4>
      </div>

      <div className="w-full flex">
        <form className="w-full" onSubmit={cashOnDeliveryHandler}>
          <input
            type="submit"
            value="Confirm"
            className={`${styles.button} !bg-[#29625d] text-[#fff] h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`}
          />
        </form>
      </div>
    </div>
  );
};

const CartData = ({ orderData }) => {
  const shipping = orderData?.shipping?.toFixed(2);

  return (
    <div className="w-full bg-[#fff] rounded-md p-5 pb-8">
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">subtotal:</h3>
        <h5 className="text-[18px] font-[600]">RWF {orderData?.subTotalPrice}</h5>
      </div>
      <br />
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">shipping:</h3>
        <h5 className="text-[18px] font-[600]">RWF {shipping}</h5>
      </div>
      <br />
      <div className="flex justify-between border-b pb-3">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">Discount:</h3>
        <h5 className="text-[18px] font-[600]">
          {orderData?.discountPrice ? `RWF ${orderData.discountPrice}` : "-"}
        </h5>
      </div>
      <h5 className="text-[18px] font-[600] text-end pt-3">
        RWF {orderData?.totalPrice}
      </h5>
      <br />
    </div>
  );
};

export default Payment;
