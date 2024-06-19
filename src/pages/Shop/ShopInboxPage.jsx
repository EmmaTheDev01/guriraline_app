import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import DashboardMessages from "../../components/Shop/DashboardMessages";
import BottomNav from '../../components/Layout/BottomNav';

const ShopInboxPage = () => {
  const isSmallScreen = () => {
    return window.innerWidth <= 768; // Adjust this width as per your requirement
  };

  return (
    <div>
      <DashboardHeader />
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px] mb-10">
          <DashboardSideBar active={8} />
        </div>
        <div className="mb-10">
          <DashboardMessages />
        </div>
      </div>
      {/* Conditionally render BottomNav only on smaller screens */}
      {isSmallScreen() && <BottomNav />}
    </div>
  )
}

export default ShopInboxPage