import { progressStatuses } from '../constants';

export const getStatuses = (
  singleColor: boolean,
  value: number,
  status: keyof typeof progressStatuses,
) => ({
  isBase: singleColor && status === progressStatuses.BASE,
  isError:
    (!singleColor && value <= 20) ||
    (singleColor && status === progressStatuses.ERROR),
  isPrimary:
    (!singleColor && value > 50 && value < 80) ||
    (singleColor && status === progressStatuses.PRIMARY),
  isSuccess:
    (!singleColor && value > 80) ||
    (singleColor && status === progressStatuses.SUCCESS),
  isWarning:
    (!singleColor && value > 20 && value <= 50) ||
    (singleColor && status === progressStatuses.WARNING),
});
