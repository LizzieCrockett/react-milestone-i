import React from 'react';


const Clock = (props) => {
    const [date, setDate] = React.useState(new Date());
  
   React.useEffect(() => {
    const timerID = setInterval( () => tick(), 1000 );
    return function cleanup() {
        clearInterval(timerID);
      };
   });
  
     const tick = () => {
      setDate(new Date());
     }
  
     return (
         <>{date.toLocaleTimeString()}. </>
      );
  }
  
  
export default Clock;