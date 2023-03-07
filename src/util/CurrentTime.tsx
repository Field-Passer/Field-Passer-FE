import { useState, useEffect } from 'react';
import DateAndTime from 'date-and-time';

enum TimeFormatEnum {
  HHmmss = 'HH:mm:ss',
  HHmm = 'HH:mm',
  HHmmKOR = 'HH시 mm분',
  HHmmssKOR = 'HH시 mm분 ss초',
}

const currentTime = (interval: number, timeFormat: TimeFormatEnum) => {
  const [currentTime, setCurrentTime] = useState(DateAndTime.format(new Date(), timeFormat));
  useEffect(() => {
    const handle = window.setInterval(() => {
      setCurrentTime(DateAndTime.format(new Date(), timeFormat));
    }, interval);

    return () => {
      window.clearInterval(handle);
    };
  }, []);

  return currentTime;
};

export { currentTime, TimeFormatEnum };
