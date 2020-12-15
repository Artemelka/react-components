export const circleSize = {
  S: 'S',
  M: 'M',
  L: 'L',
  XL: 'XL',
};

export const progressStatuses: Record<
  string,
  'ERROR' | 'SUCCESS' | 'WARNING' | 'PRIMARY' | 'BASE'
> = {
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
  PRIMARY: 'PRIMARY',
  BASE: 'BASE',
};

export const CIRCLE_SIZE_CONFIG = {
  [circleSize.S]: {
    strokeWidth: 2,
    radius: 20,
  },
  [circleSize.M]: {
    strokeWidth: 3,
    radius: 40,
  },
  [circleSize.L]: {
    strokeWidth: 4,
    radius: 60,
  },
  [circleSize.XL]: {
    strokeWidth: 5,
    radius: 80,
  },
};
