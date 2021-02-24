import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs';
import {
  ProgressLinear,
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
} from '../../../_story-components';
import { COMPONENT_TITLE, NUMBER_OPTIONS } from './constants';
import { IntroComponent } from './_components/intro-component';

storiesOf('ProgressLinear', module)
  .addParameters({
    component: ProgressLinear,
    componentSubtitle: COMPONENT_TITLE,
  })
  .add('Examples', () => (
    <>
      <IntroComponent name="ProgressLinear" />

      <h2>
        <Highlighter>percent</Highlighter>
      </h2>
      <p>
        Компонент меняет цвет в зависимости от велечины
        <Highlighter isFilled>percent</Highlighter>.
      </p>
      <Grid>
        <GridDivider />
        <GridRow>
          <GridCell>
            <h5>25</h5>
            <ProgressLinear percent={25} />
          </GridCell>
          <GridCell>
            <h5>55</h5>
            <ProgressLinear percent={55} />
          </GridCell>
          <GridCell>
            <h5>90</h5>
            <ProgressLinear percent={90} />
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
          <GridCell size={3}>
            <h5>PRIMARY</h5>
            <ProgressLinear percent={75} singleColor status="PRIMARY" />
          </GridCell>
          <GridCell size={3}>
            <h5>SUCCESS</h5>
            <ProgressLinear percent={75} singleColor status="SUCCESS" />
          </GridCell>
          <GridCell size={3}>
            <h5>WARNING</h5>
            <ProgressLinear percent={75} singleColor status="WARNING" />
          </GridCell>
          <GridCell size={3}>
            <h5>ERROR</h5>
            <ProgressLinear percent={75} singleColor status="ERROR" />
          </GridCell>
        </GridRow>
      </Grid>

      <h2>
        <Highlighter>size</Highlighter> (S)
      </h2>
      <p>Компонент может быть одного из четырех размеров.</p>
      <Grid>
        <GridDivider />
        <GridRow>
          <GridCell size={3}>
            <h5>S</h5>
            <ProgressLinear percent={55} size="S" />
          </GridCell>
          <GridCell size={3}>
            <h5>M</h5>
            <ProgressLinear percent={55} size="M" />
          </GridCell>
          <GridCell size={3}>
            <h5>L</h5>
            <ProgressLinear percent={55} size="L" />
          </GridCell>
          <GridCell size={3}>
            <h5>XL</h5>
            <ProgressLinear percent={55} size="XL" />
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
            <ProgressLinear percent={55} withContour />
          </GridCell>
        </GridRow>
      </Grid>

      <h2>
        <Highlighter>withText</Highlighter> (false)
      </h2>
      <p>Компонент может быть с цифровой индикацией.</p>
      <Grid>
        <GridDivider />
        <GridRow>
          <GridCell size={12}>
            <ProgressLinear percent={35} singleColor size="L" status="PRIMARY" withText />
          </GridCell>
        </GridRow>
      </Grid>
    </>
  ))
  .add('Knobs', () => (
    <StoriesItem>
      <ProgressLinear
        percent={number('percent', 50, NUMBER_OPTIONS)}
        singleColor={boolean('single color', true)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        size={select('size', CIRCLE_SIZE, CIRCLE_SIZE.M)}
        status={select('status', PROGRESS_STATUSES, PROGRESS_STATUSES.BASE)}
        withContour={boolean('withContour', false)}
        withText={boolean('withText', false)}
      />
    </StoriesItem>
  ));
