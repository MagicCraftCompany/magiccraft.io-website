import { useState, useEffect } from "react";
import moment from "moment";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const now = moment.utc();
    const endOfDay = moment().utc().endOf("day");
    const duration = moment.duration(endOfDay.diff(now));

    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return { hours, minutes, seconds };
  }

  return (
    <div className="px-2 text-base text-primary sm:px-6 sm:text-xl">
      <p>{`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}</p>
    </div>
  );
};

export default CountdownTimer;
