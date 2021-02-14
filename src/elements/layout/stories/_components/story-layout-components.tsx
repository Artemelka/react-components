import React, { memo } from 'react';
import { LOREM } from '../../../constants';

export const createList = (count: number) => (
  <ul>
    {[...Array(count)].map((_, index) => (
      <li>item {index + 1}</li>
    ))}
  </ul>
);

export const createLorem = (count: number) => [...Array(count)].map(() => <p>{LOREM}</p>);

export const StoryAside = memo(({ count = 8 }: { count?: number }) => (
  <div style={{ backgroundColor: 'grey', padding: '20px' }}>
    <div style={{ backgroundColor: 'green', padding: '20px' }}>
      <h2>aside</h2>
      {createList(count)}
    </div>
  </div>
));

export const StoryHeader = memo(({ count = 0 }: { count?: number }) => (
  <div style={{ backgroundColor: 'blue', padding: '5px' }}>
    <p>header</p>
    {Boolean(count) && createList(count)}
  </div>
));

export const StoryMain = memo(({ count = 6 }: { count?: number }) => (
  <div style={{ backgroundColor: 'red', padding: '20px' }}>
    <h1>main</h1>
    {createLorem(count)}
  </div>
));

export const StoryFooter = memo(({ count = 4 }: { count?: number }) => (
  <div
    style={{
      backgroundColor: 'yellow',
      color: '#000',
      // height: '100%',
      padding: '5px',
    }}
  >
    <p>footer</p>
    {createList(count)}
  </div>
));
