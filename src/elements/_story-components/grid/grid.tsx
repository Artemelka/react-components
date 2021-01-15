import React, { PropsWithChildren } from 'react';

export const GridRow = (props: PropsWithChildren<{}>) => (
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
);

export const GridCell = (props: PropsWithChildren<{ fullWidth?: boolean }>) => (
  <div
    style={{
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '60px 30px',
      width: props.fullWidth ? '100%' : '305px',
    }}
  >
    {props.children}
  </div>
);
