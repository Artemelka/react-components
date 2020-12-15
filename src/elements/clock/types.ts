export type ClockTime = {
  hour: number;
  min: number;
  sec: number;
};

export type ClockProps = {
  alarmTime?: string;
  onAlarm?: () => void;
  size: 'small' | 'medium' | 'large';
  timeZone?: string;
};

export type ClockState = ClockTime & { alarm?: number };
