import React, { FC } from 'react';
import classNames from 'classnames/bind';
import style from './window-loader.module.scss';

const cn = classNames.bind(style);
const loaderCircleItems = [...new Array(5)];
const CLASS_NAME = 'Window-loader';

type LoaderProps = {
  inContainer?: boolean;
};

export const WindowLoader: FC<LoaderProps> = ({
  inContainer,
}: LoaderProps): JSX.Element => (
  <div
    className={cn(CLASS_NAME, {
      [`${CLASS_NAME}--in-container`]: inContainer,
    })}
  >
    <div className={cn(`${CLASS_NAME}__content`)}>
      {loaderCircleItems.map((item, i) => (
        <span key={i} className={cn(`${CLASS_NAME}__circle`)} />
      ))}
    </div>
  </div>
);
