import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../server";

const CountDown = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Check if timeLeft is empty (all fields are undefined)
      if (
        Object.keys(newTimeLeft).every((key) => typeof newTimeLeft[key] === "undefined")
      ) {
        // Perform delete operation
        deleteEvent();
      }
    }, 1000);

    // Clear timeout on component unmount
    return () => clearTimeout(timer);
  }, [data]); // Depend on 'data' to ensure useEffect runs when 'data' changes

  function calculateTimeLeft() {
    const difference = +new Date(data.Finish_Date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const deleteEvent = () => {
    axios.delete(`${server}/event/delete-shop-event/${data._id}`)
      .then(() => {
        console.log("Event deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting event:", error);
      });
  };

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <span key={interval} className="text-[18px] text-[#29625d] font-[500]">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-[red] text-[18px]">Event Timed out</span>
      )}
    </div>
  );
};

export default CountDown;
