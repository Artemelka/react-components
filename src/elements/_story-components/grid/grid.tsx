import React, { memo, PropsWithChildren } from 'react';

export const GridRow = memo((props: PropsWithChildren<{}>) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'stretch',
      paddingBottom: '60px',
      margin: '0 -20px',
    }}
  >
    {props.children}
  </div>
));

export const GridCell = memo((props: PropsWithChildren<{ fullWidth?: boolean }>) => (
  <div
    style={{
      alignItems: 'flex-start',
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '60px 30px',
      width: props.fullWidth ? '100%' : '305px',
    }}
  >
    {props.children}
  </div>
));

export const GridItem = memo(({
  children,
  fullWidth,
}: PropsWithChildren<{ fullWidth: boolean }>) => (
  <div
    style={{
      padding: '30px 30px',
      width: fullWidth ? '100%' : 'auto',
    }}
  >
    {children}
  </div>
));
