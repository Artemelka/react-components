import React from 'react';
import classNames from 'classnames/bind';
import { circleSize, progressStatuses } from '../constants';
import { ProgressTextProps } from '../types';
import style from '../progress.module.scss';

const cn = classNames.bind(style);

export const ProgressText = ({
  darkColor,
  label,
  percent,
  status = progressStatuses.BASE,
  size = circleSize.S,
  withContour,
}: ProgressTextProps) => (
  <div className={cn('Progress')}>
    <p
      className={cn('Progress__title', {
        'Progress__title--with-contour': withContour,
        'Progress__title--dark': darkColor && status === progressStatuses.BASE,
        'Progress__title--error': status === progressStatuses.ERROR,
        'Progress__title--primary': status === progressStatuses.PRIMARY,
        'Progress__title--success': status === progressStatuses.SUCCESS,
        'Progress__title--warning': status === progressStatuses.WARNING,
        'Progress__title--size-s': size === circleSize.S,
        'Progress__title--size-m': size === circleSize.M,
        'Progress__title--size-l': size === circleSize.L,
        'Progress__title--size-xl': size === circleSize.XL,
      })}
    >
      {label ? `${label}: ${percent}%` : `${percent}%`}
    </p>
  </div>
);
