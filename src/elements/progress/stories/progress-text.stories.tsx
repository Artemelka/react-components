import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs';
import {
  ProgressText,
  CIRCLE_SIZE,
  PROGRESS_STATUSES,
} from '@artemelka/react-components';
import {GridCell, GridRow, StoriesItem} from '../../_story-components';
import { COMPONENT_TITLE, NUMBER_OPTIONS } from './constants';
import { IntroComponent } from './_components/intro-component';

storiesOf('ProgressText', module)
  .addParameters({
    component: ProgressText,
    componentSubtitle: COMPONENT_TITLE,
  })
  .add('Examples', () => (
    <StoriesItem>
      <IntroComponent name="ProgressText" />
      <h2>percent</h2>
      <GridRow>
        <GridCell>
          <ProgressText percent={20} />
        </GridCell>
      </GridRow>
      <h2>status</h2>
      <p>Компонент может отражать статус.</p>
      <GridRow>
        <GridCell>
          <h5>BASE</h5>
          <ProgressText percent={75} status="BASE" />
        </GridCell>
        <GridCell>
          <h5>PRIMARY</h5>
          <ProgressText percent={75} status="PRIMARY" />
        </GridCell>
        <GridCell>
          <h5>SUCCESS</h5>
          <ProgressText percent={75} status="SUCCESS" />
        </GridCell>
        <GridCell>
          <h5>WARNING</h5>
          <ProgressText percent={75} status="WARNING" />
        </GridCell>
        <GridCell>
          <h5>ERROR</h5>
          <ProgressText percent={75} status="ERROR" />
        </GridCell>
      </GridRow>
      <h2>size (S)</h2>
      <p>Компонент может быть одного из четырех размеров.</p>
      <GridRow>
        <GridCell>
          <h5>M</h5>
          <ProgressText percent={55} size="M" />
        </GridCell>
        <GridCell>
          <h5>L</h5>
          <ProgressText percent={55} size="L" />
        </GridCell>
        <GridCell>
          <h5>XL</h5>
          <ProgressText percent={55} size="XL" />
        </GridCell>
      </GridRow>
      <h2>withContour</h2>
      <p>Компонент может быть с контуром.</p>
      <GridRow>
        <GridCell fullWidth>
          <ProgressText percent={55} withContour />
        </GridCell>
      </GridRow>
      <h2>label</h2>
      <p>Компонент может быть с лейблом.</p>
      <GridRow>
        <GridCell fullWidth>
          <ProgressText label="label" percent={35} />
        </GridCell>
      </GridRow>
    </StoriesItem>
  ))
  .add('Knobs', () => (
    <StoriesItem>
      <ProgressText
        label="Custom label"
        percent={number('percent', 50, NUMBER_OPTIONS)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        size={select('size', CIRCLE_SIZE, CIRCLE_SIZE.M)}
        status={select('status', PROGRESS_STATUSES, PROGRESS_STATUSES.BASE)}
        withContour={boolean('withContour', false)}
      />
    </StoriesItem>
  ));
