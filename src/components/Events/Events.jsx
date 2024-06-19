import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../styles/styles';
import EventCard from './EventCard';
import Loader from '../Layout/Loader';
const Events = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show on larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Number of slides to show on tablets
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Number of slides to show on mobile devices
        },
      },
    ],
  };

  return (
    <div>
      {!isLoading ? (
        <div className={`${styles.section} mb-2`}>
          <div className={`${styles.heading} text-sm mt-2 md:text-base lg:text-lg text-start`}>
            <h1>Scheduled Events</h1>
          </div>

          {allEvents.length !== 0 ? (
            <Slider {...settings} className="mb-12">
              {allEvents.map((event, index) => (
                <div key={index}>
                  <EventCard data={event} />
                </div>
              ))}
            </Slider>
          ) : (
            <h4 className="text-center mt-4">No Scheduled Events!</h4>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center h-40">
          <Loader /> {/* Display loader while fetching events */}
        </div>
      )}
    </div>
  );
};

export default Events;
