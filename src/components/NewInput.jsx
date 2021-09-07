import React, { useState, useEffect } from "react";
import {
    useParams
  } from "react-router-dom";
function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function Array() {
    const [users, setUsers] = useState([{ id: 0, name: "Ruben" }]);

    const onClick = () => {
        setUsers([...users, { id: users.length, name: "Luis" }]);
      }; 
      return(
          <div>
        <input type="button" onClick={onClick} value="Update" />
       <div>
        {users.map((e) => (
          <div>
            {e.id} - {e.name}
          </div>
        ))}
      </div>
          </div>
      );
  }
  
  function Timer() {
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
  return(
    <div>
        <h1>{hours}:{minutes}:{seconds}</h1>
    </div>
);
  }
  
  function Params() {
    let { id } = useParams();
    return <div style={{ fontSize: "50px" }}>
             Now showing post {id}
           </div>;
  }

export {Home,Array,Timer,Params} ;