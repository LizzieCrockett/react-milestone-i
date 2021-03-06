import React from 'react';


const Clock = () => {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function clear() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setDate(new Date());
  }

  return (
    <div id="clock">{date.toLocaleTimeString()} </div>
  );
}


export default Clock;