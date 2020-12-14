import React, { StrictMode, ReactNode } from 'react';

const wrapperStyle = {
  padding: '20px 40px',
  color: '#000',
  // background: '#333',
  fontSize: '20px',
};
const itemWrapperStyle = {
  marginBottom: '80px',
};
const StoriesWrapper = ({ children }: { children: ReactNode}) => <div style={wrapperStyle}>{children}</div>;

const StoriesItemWrapper = ({ children }: { children: ReactNode}) => <div style={itemWrapperStyle}>{children}</div>;

export const Container = ({ story }: { story: any }) => <StoriesWrapper>{story({StoriesItemWrapper})}</StoriesWrapper>;
