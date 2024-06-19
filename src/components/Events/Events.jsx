import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import styles from '../../styles/styles'
import EventCard from "./EventCard";

const Events = () => {
  const {allEvents,isLoading} = useSelector((state) => state.events);  
   
  return (
    <div>
     {
      !isLoading && (
        <div className={`${styles.section}`}>
      <div className={`${styles.heading} text-sm mt-2 md:text-base lg:text-lg text-start`}>
        <h1>Sheduled Events</h1>
      </div>

      <div className="w-full flex justify-center flex-wrap">
         {
          allEvents.length !== 0 && (
            <EventCard data={allEvents && allEvents[0]} />
          )
         }
         <h4 className='mb-2'>{
           allEvents?.length === 0 && (
            'No Scheduled Events !'
           )
          }

         </h4>
      </div>
     
    </div>
      )
     }
  </div>
  )
}

export default Events