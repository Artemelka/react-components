export type ClockTime = {
  hour: number;
  min: number;
  sec: number;
};

export type ClockSize = 'small' | 'medium' | 'large';

export type ClockState = ClockTime & { alarm?: number };
