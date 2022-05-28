import React from 'react';
import {useState, useEffect} from 'react';

const Customtimer = (props) => {
  let {operationalTime} = props;
  const calculateTimeLeft = () => {
    const currentTime = new Date(operationalTime);
    let totalOperationalHours = {};
    totalOperationalHours = {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
    };
    return totalOperationalHours;
  };

  const [opertionalHours, setOperationalHours] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setOperationalHours(calculateTimeLeft());
    }, 1000);
  });

  return (
    <p>
      <span className="text-[#f3f2f2]">{opertionalHours.hours} h </span>
      <span className="text-[#f3f2f2]"> : </span>
      <span className="text-[#f3f2f2]">{opertionalHours.minutes} min </span>
    </p>
  );
};

export default Customtimer;
