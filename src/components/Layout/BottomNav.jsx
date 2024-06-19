import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import Wishlist from "../Wishlist/Wishlist";

const BottomNav = () => {
    const { isAuthenticated, user } = useSelector((state) => state.user);
    const { wishlist } = useSelector((state) => state.wishlist);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchData, setSearchData] = useState(null);
    const { allProducts } = useSelector((state) => state.products);
    const [openWishlist, setOpenWishlist] = useState(false);

    const containerStyle = {
        width: "100%",
        height: "100vh",
    };

    const sectionStyle = {
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
        zIndex: 10,
    };

    const tabStyle = {
        width: "25%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "10px",
        paddingBottom: "5px",
        color: "#000",
        textDecoration: "none",
    };

    const svgStyle = {
        display: "block",
        margin: "0 auto",
        marginBottom: "5px",
    };

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        const filteredProducts =
            allProducts &&
            allProducts.filter((product) =>
                product.name.toLowerCase().includes(term.toLowerCase())
            );
        setSearchData(filteredProducts);
    };

    return (
        <div style={containerStyle}>
            <section id="bottom-navigation" style={sectionStyle}>
                <div id="tabs" style={{ display: "flex", justifyContent: "space-between" }}>
                    <Link to="/" style={tabStyle}>
                        {/* Home tab */}
                        <svg
                            fill="#000000"
                            width="25px"
                            height="25px"
                            viewBox="0 0 32 32"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block mb-1"
                            style={svgStyle}
                        >
                            <path d="M30.814 13.051l-14.001-12c-0.217-0.187-0.502-0.3-0.813-0.3s-0.596 0.114-0.815 0.302l0.002-0.001-14 12c-0.268 0.23-0.437 0.57-0.437 0.948 0 0 0 0.001 0 0.001v-0 16c0 0.69 0.56 1.25 1.25 1.25h28c0.69-0.001 1.249-0.56 1.25-1.25v-16c-0-0.379-0.168-0.718-0.434-0.948l-0.002-0.001zM12.25 28.75v-4.75c0-2.071 1.679-3.75 3.75-3.75s3.75 1.679 3.75 3.75v0 4.75zM28.75 28.75h-6.5v-4.75c0-3.452-2.798-6.25-6.25-6.25s-6.25 2.798-6.25 6.25v0 4.75h-6.5v-14.175l12.75-10.929 12.75 10.929z"></path>
                        </svg>
                        <span className="tab tab-home block text-xs hover:text-green-700">Home</span>
                    </Link>
                    <Link to="/" style={tabStyle}>
                        {/* Categories tab */}
                        <svg
                            width="25px"
                            height="25px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block mb-1"
                            style={svgStyle}
                        >
                            <path d="M3 6C3 4.34315 4.34315 3 6 3H7C8.65685 3 10 4.34315 10 6V7C10 8.65685 8.65685 10 7 10H6C4.34315 10 3 8.65685 3 7V6Z" stroke="#000000" strokeWidth="2" /><path d="M14 6C14 4.34315 15.3431 3 17 3H18C19.6569 3 21 4.34315 21 6V7C21 8.65685 19.6569 10 18 10H17C15.3431 10 14 8.65685 14 7V6Z" stroke="#000000" strokeWidth="2" /><path d="M14 17C14 15.3431 15.3431 14 17 14H18C19.6569 14 21 15.3431 21 17V18C21 19.6569 19.6569 21 18 21H17C15.3431 21 14 19.6569 14 18V17Z" stroke="#000000" strokeWidth="2" /><path d="M3 17C3 15.3431 4.34315 14 6 14H7C8.65685 14 10 15.3431 10 17V18C10 19.6569 8.65685 21 7 21H6C4.34315 21 3 19.6569 3 18V17Z" stroke="#000000" strokeWidth="2" />
                        </svg>
                        <span className="tab tab-kategori block text-xs hover:text-green-700">Categories</span>
                    </Link>
                    <div style={tabStyle} onClick={() => setOpenWishlist(true)}>
                        {/* Wishlist tab */}
                        <div className="relative flex flex-col items-center">
                            <AiOutlineHeart size={25} />
                            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fed592] w-4 h-4 text-white font-mono text-[12px] leading-tight text-center">
                                {wishlist && wishlist.length}
                            </span>
                        </div>
                        <span className="tab tab-kategori block text-xs hover:text-green-700">Wishlist</span>
                    </div>
                    <div style={tabStyle} onClick={() => document.getElementById('searchModal').style.display = 'block'}>
                        {/* Search tab */}
                        <AiOutlineSearch size={25} />
                        <span className="tab tab-kategori block text-xs hover:text-green-700">Search</span>
                    </div>
                    <Link to={isAuthenticated ? "/profile" : "/login"} style={tabStyle}>
                        {/* My Account tab */}
                        {isAuthenticated ? (
                            <img
                                src={user?.avatar?.url}
                                className="w-[25px] h-[25px] rounded-full"
                                alt="User Avatar"
                            />
                        ) : (
                            <AiOutlineUser size={25} />
                        )}
                        <span className="tab tab-kategori block text-xs hover:text-green-700">My Account</span>
                    </Link>
                </div>
            </section>
            {/* Search Modal */}
            <div
                id="searchModal"
                style={{
                    display: "none",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 20,
                }}
                onClick={() => document.getElementById('searchModal').style.display = 'none'}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "90%",
                        backgroundColor: "#fff",
                        padding: "20px",
                        borderRadius: "10px",
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search products..."
                        style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
                    />
                    <div>
                        {searchData && searchData.length > 0 ? (
                            searchData.map((product) => (
                                <div key={product._id} style={{ padding: "10px 0", borderBottom: "1px solid #ddd" }}>
                                    <Link to={`/product/${product._id}`} onClick={() => document.getElementById('searchModal').style.display = 'none'}>
                                        {product.name}
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p>No products found</p>
                        )}
                    </div>
                </div>
            </div>
            {/* Wishlist Popup */}
            {openWishlist && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 30,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            width: "90%",
                            backgroundColor: "#fff",
                            padding: "20px",
                            borderRadius: "10px",
                        }}
                    >
                        <button
                            onClick={() => setOpenWishlist(false)}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                background: "none",
                                border: "none",
                                fontSize: "20px",
                                cursor: "pointer",
                            }}
                        >
                            &times;
                        </button>
                        <Wishlist setOpenWishlist={setOpenWishlist} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default BottomNav;
