import React, { PropsWithChildren } from 'react';

export const List = (props: PropsWithChildren<{}>) => (
  <ul style={{ marginTop: '20px' }}>{props.children}</ul>
);

export const ListItem = (props: PropsWithChildren<{}>) => (
  <li style={{ padding: '15px 0' }}>{props.children}</li>
);
