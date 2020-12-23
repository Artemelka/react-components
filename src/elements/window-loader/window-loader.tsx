import React, { FC } from 'react';
import classNames from 'classnames/bind';
import style from './window-loader.module.scss';

const cn = classNames.bind(style);
const loaderCircleItems = [...new Array(5)];
const CLASS_NAME = 'Window-window-loader';

type LoaderProps = {
  /** меняет значение position на absolute */
  inContainer?: boolean;
};

export const WindowLoader: FC<LoaderProps> = (): JSX.Element => (
  <div className={cn(CLASS_NAME)}>
    {loaderCircleItems.map((item, i) => (
      <span key={i} className={cn(`${CLASS_NAME}__circle`)} />
    ))}
  </div>
);
