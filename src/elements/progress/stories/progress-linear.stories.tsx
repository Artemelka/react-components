import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs';
import {
  ProgressLinear,
  CIRCLE_SIZE,
  PROGRESS_STATUSES,
} from '@artemelka/react-components';
import {
  GridCell,
  GridRow,
  StoriesItem,
} from '../../_story-components';
import { COMPONENT_TITLE, NUMBER_OPTIONS } from './constants';
import { IntroComponent } from './_components/intro-component';

storiesOf('ProgressLinear', module)
  .addParameters({
    component: ProgressLinear,
    componentSubtitle: COMPONENT_TITLE,
  })
  .add('Examples', () => (
    <StoriesItem>
      <IntroComponent name="ProgressLinear" />
      <h2>percent</h2>
      <p>Компонент меняет цвет в зависимости от велечины percent.</p>
      <GridRow>
        <GridCell>
          <h5>20</h5>
          <ProgressLinear percent={20} />
        </GridCell>
        <GridCell>
          <h5>25</h5>
          <ProgressLinear percent={25} />
        </GridCell>
        <GridCell>
          <h5>55</h5>
          <ProgressLinear percent={55} />
        </GridCell>
        <GridCell>
          <h5>80</h5>
          <ProgressLinear percent={79} />
        </GridCell>
        <GridCell>
          <h5>90</h5>
          <ProgressLinear percent={90} />
        </GridCell>
      </GridRow>
      <h2>singleColor</h2>
      <p>Отключает смену цветов в зависимости от величины percent.</p>
      <GridRow>
        <GridCell>
          <h5>20</h5>
          <ProgressLinear percent={20} singleColor />
        </GridCell>
        <GridCell>
          <h5>25</h5>
          <ProgressLinear percent={25} singleColor />
        </GridCell>
        <GridCell>
          <h5>55</h5>
          <ProgressLinear percent={55} singleColor />
        </GridCell>
        <GridCell>
          <h5>80</h5>
          <ProgressLinear percent={80} singleColor />
        </GridCell>
        <GridCell>
          <h5>90</h5>
          <ProgressLinear percent={90} singleColor />
        </GridCell>
      </GridRow>
      <h2>status</h2>
      <p>Компонент может отражать статус.</p>
      <GridRow>
        <GridCell>
          <h5>BASE</h5>
          <ProgressLinear percent={75} singleColor status="BASE" />
        </GridCell>
        <GridCell>
          <h5>PRIMARY</h5>
          <ProgressLinear percent={75} singleColor status="PRIMARY" />
        </GridCell>
        <GridCell>
          <h5>SUCCESS</h5>
          <ProgressLinear percent={75} singleColor status="SUCCESS" />
        </GridCell>
        <GridCell>
          <h5>WARNING</h5>
          <ProgressLinear percent={75} singleColor status="WARNING" />
        </GridCell>
        <GridCell>
          <h5>ERROR</h5>
          <ProgressLinear percent={75} singleColor status="ERROR" />
        </GridCell>
      </GridRow>
      <h2>size (S)</h2>
      <p>Компонент может быть одного из четырех размеров.</p>
      <GridRow>
        <GridCell>
          <h5>M</h5>
          <ProgressLinear percent={55} size="M" />
        </GridCell>
        <GridCell>
          <h5>L</h5>
          <ProgressLinear percent={55} size="L" />
        </GridCell>
        <GridCell>
          <h5>XL</h5>
          <ProgressLinear percent={55} size="XL" />
        </GridCell>
      </GridRow>
      <h2>withContour</h2>
      <p>Компонент может быть с контуром.</p>
      <GridRow>
        <GridCell fullWidth>
          <ProgressLinear percent={55} withContour />
        </GridCell>
      </GridRow>
      <h2>withText</h2>
      <p>Компонент может быть с цифровой индикацией.</p>
      <GridRow>
        <GridCell fullWidth>
          <ProgressLinear percent={35} singleColor size="L" status="PRIMARY" withText />
        </GridCell>
      </GridRow>
    </StoriesItem>
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
