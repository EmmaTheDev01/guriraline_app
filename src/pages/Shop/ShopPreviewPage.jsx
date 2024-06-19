import React from 'react'
import styles from '../../styles/styles'
import ShopInfo from "../../components/Shop/ShopInfo";
import ShopProfileData from "../../components/Shop/ShopProfileData";
import BottomNav from '../../components/Layout/BottomNav';

const ShopPreviewPage = () => {
  const isSmallScreen = () => {
    return window.innerWidth <= 768; // Adjust this width as per your requirement
  };

  return (
    <div className={`${styles.section} bg-[#f5f5f5]`}>
         <div className="w-full 800px:flex py-10 justify-between">
          <div className="800px:w-[25%] bg-[#fff] rounded-[4px] shadow-sm 800px:overflow-y-scroll 800px:h-[90vh] 800px:sticky top-10 left-0 z-10">
            <ShopInfo isOwner={false} />
          </div>
          <div className="800px:w-[72%] mt-5 800px:mt-['unset'] rounded-[4px] mb-10">
            <ShopProfileData isOwner={false} />
          </div>
         </div>
     {/* Conditionally render BottomNav only on smaller screens */}
     {isSmallScreen() && <BottomNav />}
    </div>
  )
}

export default ShopPreviewPage