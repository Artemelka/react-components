import React, { memo, PropsWithChildren } from 'react';

export const List = memo((props: PropsWithChildren<{}>) => (
  <ul style={{ marginTop: '20px' }}>{props.children}</ul>
));

export const ListItem = memo((props: PropsWithChildren<{}>) => (
  <li style={{ padding: '15px 0' }}>{props.children}</li>
));
