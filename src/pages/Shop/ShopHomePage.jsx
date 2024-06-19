import React from 'react';
import styles from '../../styles/styles';
import ShopInfo from "../../components/Shop/ShopInfo";
import ShopProfileData from "../../components/Shop/ShopProfileData";
import BottomNav from '../../components/Layout/BottomNav';

const ShopHomePage = () => {
  const isSmallScreen = () => {
    return window.innerWidth <= 768; // Adjust this width as per your requirement
  };

  return (
    <div className={`${styles.section} bg-gray-100`}>
      <div className="flex flex-col md:flex-row justify-center w-full py-10 space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-1/4 bg-white rounded-md shadow-md overflow-y-auto max-h-[90vh] top-0">
          <ShopInfo isOwner={true} />
        </div>
        <div className="w-full flex flex-wrap justify-center gap-4 md:gap-6 mt-6 md:mt-0 mb-10">
          <ShopProfileData isOwner={true} />
        </div>
      </div>
      {/* Conditionally render BottomNav only on smaller screens */}
      {isSmallScreen() && <BottomNav />}
    </div>
  )
}

export default ShopHomePage;
