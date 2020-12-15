export type ProgressStatusType =
  | 'ERROR'
  | 'SUCCESS'
  | 'WARNING'
  | 'PRIMARY'
  | 'BASE';

export type ProgressBaseProps = {
  /** Флаг темного цвета индикатора */
  darkColor?: boolean;
  /** Значение индикатора в % */
  percent: number;
  /** Размер индикатора (принимает значения константы CircleSize) */
  size?: string;
  /** параметр цветового отображения индикатора (принимает значения константы ProgressStatus, зависит от singleColor) */
  status?: ProgressStatusType;
  /** Флаг отображения контура индикатора */
  withContour?: boolean;
};

export type ProgressProps = ProgressBaseProps & {
  /** Флаг одноцветного отображения индикатора (цвет задается через параметр status) */
  singleColor?: boolean;
  /** Флаг отображения числового индикатора в центре */
  withText?: boolean;
};

export type ProgressTextProps = ProgressBaseProps & {
  label?: string;
};
