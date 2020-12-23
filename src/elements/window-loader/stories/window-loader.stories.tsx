import React from 'react';
import { storiesOf } from '@storybook/react';
import { WindowLoader } from '@artemelka/react-components';

storiesOf('Window-loader', module)
  .addParameters({ component: WindowLoader })
  .add('Window-loader', ({ StoriesItemWrapper }: any) => (
    <StoriesItemWrapper>
      <WindowLoader />
    </StoriesItemWrapper>
  ));
