import React, { useEffect, useState } from 'react';
import pubsub from '../pubsub';

const Count = () => {

   const [count, setCount] = useState(0);

   useEffect(() => {
     // Subscribe to the 'countUpdated' event
     const handleCountUpdate = (newCount) => {
      console.log("Called!");
       setCount(newCount);
     };

     pubsub.subscribe("countUpdated", handleCountUpdate);

     return () => {
       // Unsubscribe when the component is unmounted
       pubsub.unsubscribe("countUpdated", handleCountUpdate);
     };
   }, []);

  return (
    <div>
      Count is {count}
    </div>
  );
};

export default Count;