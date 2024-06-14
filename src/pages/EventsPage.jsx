import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <div className="w-90 mt-10 py-10 flex justify-center flex-wrap gap-[20px]">
            <EventCard
              active={true}
              data={allEvents && allEvents[0]}
              className="w-90 py-10 mt-2"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EventsPage;
