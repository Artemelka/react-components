import React from 'react';
import classNames from 'classnames/bind';
import { getValidPercent, getStatuses } from '../_utils';
import { circleSize, progressStatuses } from '../constants';
import { ProgressProps } from '../types';
import style from '../progress.module.scss';

const cn = classNames.bind(style);

export const ProgressLinear = ({
  darkColor,
  percent,
  singleColor,
  status = progressStatuses.BASE,
  size = circleSize.S,
  withContour,
  withText,
}: ProgressProps) => {
  const value = getValidPercent(percent);
  const { isBase, isError, isPrimary, isSuccess, isWarning } = getStatuses(
    Boolean(singleColor && status),
    value,
    status,
  );

  return (
    <div className={cn('Progress')}>
      <div
        className={cn('Progress__line', {
          'Progress__line--size-x': size === circleSize.S,
          'Progress__line--size-m': size === circleSize.M,
          'Progress__line--size-l': size === circleSize.L,
          'Progress__line--size-xl': size === circleSize.XL,
          'Progress__line--with-contour': withContour,
        })}
      >
        <div
          className={cn('Progress__status', {
            'Progress__status--base': isBase,
            'Progress__status--dark': darkColor && isBase,
            'Progress__status--primary': isPrimary,
            'Progress__status--error': isError,
            'Progress__status--success': isSuccess,
            'Progress__status--warning': isWarning,
          })}
          style={{ width: `${value}%` }}
        />
        {withText && size !== circleSize.S && (
          <div className={cn('Progress__text')}>{`${value}%`}</div>
        )}
      </div>
    </div>
  );
};
