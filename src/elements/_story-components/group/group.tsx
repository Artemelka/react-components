import React, { memo, PropsWithChildren, ReactNode } from 'react';

export const Group = memo(({ children }: PropsWithChildren<ReactNode>) => (
  <div
    style={{
      alignItems: 'flex-start',
      display: 'inline-flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      paddingBottom: '60px',
      margin: '0 -20px',
    }}
  >
    {children}
  </div>
));

export const GroupItem = memo(({ children }: PropsWithChildren<ReactNode>) => (
  <div style={{ padding: '0 12px' }}>{children}</div>
));
