import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import {
  Clock,
  CLOCK_TIME_ZONES_COLLECTION,
} from '@artemelka/react-components';
import {
  Grid,
  GridRow,
  GridCell,
  StoriesItem,
} from '../../_story-components';
import { IntroComponent } from './_components/intro-component';

const SIZES = [undefined, 'small', 'medium', 'large'];

storiesOf('Clock', module)
  .addParameters({
    component: Clock,
    componentSubtitle: 'Компонент для отображения часов',
  })
  .add('Examples', () => (
    <StoriesItem>
      <IntroComponent />
      <h2>Size (small)</h2>
      <p>Компонент может быть одного из трех размеров.</p>
      <Grid>
        <GridRow>
          <GridCell>
            <h5>small</h5>
            <Clock size="small" />
          </GridCell>
          <GridCell>
            <h5>medium</h5>
            <Clock size="medium" />
          </GridCell>
          <GridCell>
            <h5>large</h5>
            <Clock size="large" />
          </GridCell>
        </GridRow>
      </Grid>
      <h2>timeZone</h2>
      <p>Компоненту можно задать часовой пояс.</p>
      <Grid>
        <GridRow>
          <GridCell>
            <h5>New York</h5>
            <Clock timeZone="America/New_York" />
          </GridCell>
          <GridCell>
            <h5>Moscow</h5>
            <Clock timeZone="Europe/Moscow" />
          </GridCell>
          <GridCell>
            <h5>London</h5>
            <Clock timeZone="Europe/London" />
          </GridCell>
        </GridRow>
      </Grid>
      <h2>alarmTime</h2>
      <p>Компоненту можно задать время срабатываия колбэка onAlarm (будильник)</p>
      <Grid>
        <GridRow>
          <GridCell size={12}>
            <Clock alarmTime="00:40" />
          </GridCell>
        </GridRow>
      </Grid>
    </StoriesItem>
  ))
  .add('Knobs', () => (
    <StoriesItem>
      <Clock
        alarmTime={text('alarmTime', '00:40')}
        onAlarm={action('onAlarm')}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        size={select('size', SIZES, SIZES[0])}
        timeZone={select(
          'timeZone',
          CLOCK_TIME_ZONES_COLLECTION,
          'America/Mazatlan',
        )}
      />
    </StoriesItem>
  ));
