import React, { ReactNode } from 'react';

const wrapperStyle = {
  padding: '20px 40px',
  color: '#FFF',
  background: '#333',
  fontSize: '20px',
};

const StoriesWrapper = ({ children }: { children: ReactNode}) => (
  <div style={wrapperStyle}>{children}</div>
);

export const Container = ({ story }: { story: any }) => (
  <StoriesWrapper>{story()}</StoriesWrapper>
);
