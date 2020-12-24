export type ClockTime = {
  hour: number;
  min: number;
  sec: number;
};

export type ClockSize = 'small' | 'medium' | 'large';
export type ClockProps = {
  alarmTime?: string;
  onAlarm?: () => void;
  size: ClockSize;
  timeZone?: string;
};

export type ClockState = ClockTime & { alarm?: number };
