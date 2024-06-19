import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AllProducts from "../components/Admin/AllProducts";
import BottomNav from "../components/Layout/BottomNav";
const AdminDashboardProducts = () => {
  return (
    <div>
    <AdminHeader />
    <div className="w-full flex">
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <AdminSideBar active={5} />
        </div>
        <AllProducts />
      </div>
    </div>
    <BottomNav />
  </div>
  )
}

export default AdminDashboardProducts