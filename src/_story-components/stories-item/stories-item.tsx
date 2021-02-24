import React, { memo, PropsWithChildren, ReactNode } from 'react';

export const StoriesItem = memo((props: PropsWithChildren<ReactNode>) => (
  <div style={{ paddingBottom: '80px' }}>{props.children}</div>
));
