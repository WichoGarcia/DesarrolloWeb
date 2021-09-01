import "./App.css";
import "./index.css";
import React, { useState, useContext, useEffect } from "react";


function App() {
  
  const [date, setDate] = useState(new Date());
  var [seconds, setSeconds] = useState(0);
  var [minutes, setMinutes] = useState(0);
  var [hours, setHours] = useState(0);

  
  useEffect(() => {
    let interval = null;
    
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        if(seconds===59){
          setSeconds(seconds=>0)
          setMinutes(minutes=>minutes+1)
          if(minutes===59){
            setMinutes(seconds=>0)
            setHours(hours=>hours+1)
          }
        }
      }, 1000);
    
    return () => clearInterval(interval);
  });



  useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
  
    return function cleanup() {
        clearInterval(timerID);
      };
   });
  
     function tick() {
      setDate(new Date());
     }
  
     

  return (
    <div>
      <h1>{hours}:{minutes}:{seconds}</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
      
    </div>
  );
}

export default App;