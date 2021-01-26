import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs';
import {
  ProgressText,
  CIRCLE_SIZE,
  PROGRESS_STATUSES,
} from '@artemelka/react-components';
import {
  Grid,
  GridDivider,
  GridCell,
  GridRow,
  Highlighter,
  StoriesItem,
} from '../../_story-components';
import { COMPONENT_TITLE, NUMBER_OPTIONS } from './constants';
import { IntroComponent } from './_components/intro-component';

storiesOf('ProgressText', module)
  .addParameters({
    component: ProgressText,
    componentSubtitle: COMPONENT_TITLE,
  })
  .add('Examples', () => (
    <>
      <IntroComponent name="ProgressText" />

      <h2>
        <Highlighter>percent</Highlighter>
      </h2>
      <Grid>
        <GridDivider />
        <GridRow>
          <GridCell>
            <ProgressText percent={20} />
          </GridCell>
        </GridRow>
      </Grid>

      <h2>
        <Highlighter>status</Highlighter>
      </h2>
      <p>Компонент может отражать статус.</p>
      <Grid>
        <GridDivider />
        <GridRow>
          <GridCell size={2}>
            <h5>BASE</h5>
            <ProgressText percent={75} status="BASE" />
          </GridCell>
          <GridCell size={2}>
            <h5>PRIMARY</h5>
            <ProgressText percent={75} status="PRIMARY" />
          </GridCell>
          <GridCell size={2}>
            <h5>SUCCESS</h5>
            <ProgressText percent={75} status="SUCCESS" />
          </GridCell>
          <GridCell size={2}>
            <h5>WARNING</h5>
            <ProgressText percent={75} status="WARNING" />
          </GridCell>
          <GridCell size={2}>
            <h5>ERROR</h5>
            <ProgressText percent={75} status="ERROR" />
          </GridCell>
        </GridRow>
      </Grid>

      <h2>
        <Highlighter>size</Highlighter> (L)
      </h2>
      <p>Компонент может быть одного из четырех размеров.</p>
      <Grid>
        <GridDivider />
        <GridRow>
          <GridCell size={3}>
            <h5>S</h5>
            <ProgressText percent={55} size="S" />
          </GridCell>
          <GridCell size={3}>
            <h5>M</h5>
            <ProgressText percent={55} size="M" />
          </GridCell>
          <GridCell size={3}>
            <h5>L</h5>
            <ProgressText percent={55} />
          </GridCell>
          <GridCell size={3}>
            <h5>XL</h5>
            <ProgressText percent={55} size="XL" />
          </GridCell>
        </GridRow>
      </Grid>

      <h2>
        <Highlighter>withContour</Highlighter> (false)
      </h2>
      <p>Компонент может быть с контуром.</p>
      <Grid>
        <GridDivider />
        <GridRow>
          <GridCell size={12}>
            <ProgressText percent={55} size="L" withContour />
          </GridCell>
        </GridRow>
      </Grid>

      <h2>
        <Highlighter>label</Highlighter>
      </h2>
      <p>Компонент может быть с лейблом.</p>
      <Grid>
        <GridDivider />
        <GridRow>
          <GridCell size={12}>
            <ProgressText label="label" percent={35} size="L" />
          </GridCell>
        </GridRow>
      </Grid>
    </>
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
