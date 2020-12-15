import { ClockTime } from '../types';

type GetTimeParams = {
  timeZone?: string;
};
export const getTime = ({
  timeZone = 'America/Chicago',
}: GetTimeParams): ClockTime => {
  const currentDate = new Date().toLocaleString('en-US', { timeZone });
  const day = new Date(currentDate);

  return {
    hour: day.getHours(),
    min: day.getMinutes(),
    sec: day.getSeconds(),
  };
};
