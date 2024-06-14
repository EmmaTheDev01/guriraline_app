import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    id: 1,
    name: 'Fashion',
    price: 'Starting from RWF 3000.00',
    imageUrl: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 2,
    name: 'Electronics',
    price: 'Starting from RWF 20,000',
    imageUrl: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Home Decor',
    price: 'Starting from RWF 5000',
    imageUrl: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  // Add more products as needed
];

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Popular Products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-2">
            <div
              className="bg-cover bg-center bg-no-repeat rounded-lg shadow-lg p-4 flex flex-col justify-end items-center h-80 overflow-hidden"
              style={{ backgroundImage: `url(${product.imageUrl})` }}
            >
              <div className="bg-white bg-opacity-75 p-4 rounded-md w-full text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
