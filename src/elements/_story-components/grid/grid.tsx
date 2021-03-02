import React, { memo, PropsWithChildren } from 'react';
import { fastClassName } from '../../utils';
import styles from './grid.module.scss';

const cn = fastClassName(styles);
const CLASS_NAME = 'Grid';

type GridProps = PropsWithChildren<{}>;

export const Grid = memo((props: GridProps) => (
  <div className={cn(CLASS_NAME)}>
    {props.children}
  </div>
));

type GridRowProps = PropsWithChildren<{}>;

export const GridRow = memo((props: GridRowProps) => (
  <div className={cn(`${CLASS_NAME}__row`)}>
    {props.children}
  </div>
));

type GridCellProps = PropsWithChildren<{
  size?: 1|2|3|4|5|6|7|8|9|10|11|12;
  horizontalAlign?: 'start' | 'stretch' | 'center' | 'end';
  verticalAlign?: 'start' | 'between' | 'center' | 'end';
}>;

export const GridCell = memo(({
  horizontalAlign = 'start',
  verticalAlign = 'start',
  children,
  size = 4,
}: GridCellProps) => (
  <div
    className={cn(`${CLASS_NAME}__cell`, {
      [`${CLASS_NAME}__cell--size-${size}`]: Boolean(size),
      [`${CLASS_NAME}__cell--vertical-align-${verticalAlign}`]: Boolean(verticalAlign),
      [`${CLASS_NAME}__cell--horizontal-align-${horizontalAlign}`]: Boolean(horizontalAlign),
    })}
  >
    {children}
  </div>
));

export const GridDivider = memo(() => (
  <div className={cn(`${CLASS_NAME}__divider`)} />
));
