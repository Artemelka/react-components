import React, { memo, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import style from './overlay.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Overlay';
type OverlayProps = PropsWithChildren<{
    inContainer?: boolean;
    isLightColor?: boolean;
    isTransparent?: boolean;
}>;

export const Overlay = memo(({
  children,
  inContainer,
  isLightColor,
  isTransparent,
}: OverlayProps) => (
  <div
    className={cn(CLASS_NAME, {
      [`${CLASS_NAME}--in-container`]: inContainer,
      [`${CLASS_NAME}--light-color`]: isLightColor,
      [`${CLASS_NAME}--transparent`]: isTransparent,
    })}
  >
    {children}
  </div>
));