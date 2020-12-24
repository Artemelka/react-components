import React, { memo } from 'react';
import classNames from 'classnames/bind';
import { WindowLoaderThemeColor } from './types';
import style from './window-loader.module.scss';

const cn = classNames.bind(style);
const loaderCircleItems = [...new Array(5)];
const CLASS_NAME = 'Window-loader';

type LoaderProps = {
  /** Устанавливает цвет лоадера */
  themeColor?: WindowLoaderThemeColor;
};

export const WindowLoader = memo(({ themeColor = 'main' }: LoaderProps) => (
  <div className={cn(CLASS_NAME)}>
    {loaderCircleItems.map((item, i) => (
      <span
        key={i}
        className={cn(`${CLASS_NAME}__circle`, {
          [`${CLASS_NAME}__circle--${themeColor}`]: themeColor,
        })}
      />
    ))}
  </div>
));
