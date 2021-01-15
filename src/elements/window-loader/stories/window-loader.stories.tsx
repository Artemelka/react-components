import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { WindowLoader } from '@artemelka/react-components';
import { StoriesItem } from '../../_story-components';

const THEME_COLOR = ['main', 'accent', 'primary', 'secondary'];

storiesOf('Window-loader', module)
  .addParameters({ component: WindowLoader })
  .add('Window-loader', () => (
    <StoriesItem>
      <WindowLoader
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
      />
    </StoriesItem>
  ));
