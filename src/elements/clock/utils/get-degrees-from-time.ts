import { ClockTime } from '../types';

const CLOCK_DEG = 6;

export const getDegreesFromTime = ({
  hour,
  min,
  sec,
}: ClockTime): ClockTime => {
  const hourDeg = hour * 30 + min / 12;
  const minDeg = min * CLOCK_DEG;
  const secDeg = sec * CLOCK_DEG;

  return {
    hour: hourDeg,
    min: minDeg,
    sec: secDeg,
  };
};
