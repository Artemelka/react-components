import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { WindowLoader } from '@artemelka/react-components';
import {
  GridCell,
  GridRow,
  Intro,
  StoriesItem,
} from '../../_story-components';

const THEME_COLOR = ['main', 'accent', 'primary', 'secondary'];

storiesOf('Window-loader', module)
  .addParameters({ component: WindowLoader })
  .add('Examples', () => (
    <StoriesItem>
      <Intro name="WindowLoader" />
      <GridRow>
        <GridCell>
          <WindowLoader />
        </GridCell>
      </GridRow>
      <h2>themeColor</h2>
      <GridRow>
        <GridCell>
          <h5>accent</h5>
          <WindowLoader themeColor="accent" />
        </GridCell>
        <GridCell>
          <h5>primary</h5>
          <WindowLoader themeColor="primary" />
        </GridCell>
        <GridCell>
          <h5>secondary</h5>
          <WindowLoader themeColor="secondary" />
        </GridCell>
      </GridRow>
    </StoriesItem>
  ))
  .add('Knobs', () => (
    <StoriesItem>
      <WindowLoader
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
      />
    </StoriesItem>
  ));
