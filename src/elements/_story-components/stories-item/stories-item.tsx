import React, { PropsWithChildren, ReactNode } from 'react';

export const StoriesItem = (props: PropsWithChildren<ReactNode>) => (
  <div style={{ paddingBottom: '80px' }}>{props.children}</div>
);
