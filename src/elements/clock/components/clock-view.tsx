import React, { memo } from 'react';
import { fastClassName } from '@utils';
import style from '../clock.module.scss';

const cn = fastClassName(style);
const CLASS_NAME = 'Clock';

type ClockViewProps = {
  alarm?: number;
  hour: number;
  min: number;
  sec: number;
  size: string;
};

export const ClockView = memo(({
  alarm, hour, min, sec, size,
}: ClockViewProps) => (
  <div
    className={cn(CLASS_NAME, {
      [`${CLASS_NAME}--size-${size}`]: Boolean(size),
    })}
  >
    {alarm && (
    <div className={cn(`${CLASS_NAME}__arrow-wrapper`)}>
      <div
        className={cn(`${CLASS_NAME}__arrow-alarm`, {
          [`${CLASS_NAME}__arrow-alarm--size-${size}`]: Boolean(size),
        })}
        style={{ transform: `rotateZ(${alarm}deg)` }}
      />
    </div>
    )}
    <div className={cn(`${CLASS_NAME}__arrow-wrapper`)}>
      <div
        className={cn(`${CLASS_NAME}__arrow-hour`, {
          [`${CLASS_NAME}__arrow-hour--size-${size}`]: Boolean(size),
        })}
        style={{ transform: `rotateZ(${hour}deg)` }}
      />
    </div>
    <div className={cn(`${CLASS_NAME}__arrow-wrapper`)}>
      <div
        className={cn(`${CLASS_NAME}__arrow-min`, {
          [`${CLASS_NAME}__arrow-min--size-${size}`]: Boolean(size),
        })}
        style={{ transform: `rotateZ(${min}deg)` }}
      />
    </div>
    <div className={cn(`${CLASS_NAME}__arrow-wrapper`)}>
      <div
        className={cn(`${CLASS_NAME}__arrow-sec`, {
          [`${CLASS_NAME}__arrow-sec--size-${size}`]: Boolean(size),
        })}
        style={{ transform: `rotateZ(${sec}deg)` }}
      />
    </div>
  </div>
));
