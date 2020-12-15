import { getDegreesFromTime } from './get-degrees-from-time';

type Params = {
  alarmTime: string;
};

export const getAlarmDegrees = ({ alarmTime }: Params): number => {
  const [hour, min]: Array<string> = alarmTime.split(':');
  const alarm = getDegreesFromTime({
    hour: +hour,
    min: +min,
    sec: +'00',
  });

  return alarm.hour;
};
