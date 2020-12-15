import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { WindowLoader } from '@artemelka/react-components';

const wrapperStyle: CSSProperties = {
  margin: '40px',
  position: 'relative',
  width: '300px',
  height: '300px',
  padding: '30px',
  border: '1px solid #ccc',
};

storiesOf('Window-loader', module)
  .addParameters({ component: WindowLoader })
  .add('Window-loader', () => (
    <>
      <h2>Container</h2>
      <div style={wrapperStyle}>
        <p>content this loading data</p>
        {boolean('show loader', true) && (
          <WindowLoader inContainer={boolean('in container', true)} />
        )}
      </div>
    </>
  ));
