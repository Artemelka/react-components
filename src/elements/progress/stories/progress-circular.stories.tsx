import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs';
import {
  ProgressCircular,
  CIRCLE_SIZE,
  PROGRESS_STATUSES,
} from '@artemelka/react-components';
import {
  GridItem,
  GridCell,
  GridRow,
  StoriesItem,
} from '../../_story-components';
import { COMPONENT_TITLE, NUMBER_OPTIONS } from './constants';
import { IntroComponent } from './_components/intro-component';

storiesOf('ProgressCircular', module)
  .addParameters({
    component: ProgressCircular,
    componentSubtitle: COMPONENT_TITLE,
  })
  .add('Examples', () => (
    <StoriesItem>
      <IntroComponent name="ProgressCircular" />
      <h2>percent</h2>
      <p>Компонент меняет цвет в зависимости от велечины percent.</p>
      <GridRow>
        <GridItem>
          <h5>20</h5>
          <ProgressCircular percent={20} />
        </GridItem>
        <GridItem>
          <h5>25</h5>
          <ProgressCircular percent={25} />
        </GridItem>
        <GridItem>
          <h5>55</h5>
          <ProgressCircular percent={55} />
        </GridItem>
        <GridItem>
          <h5>80</h5>
          <ProgressCircular percent={80} />
        </GridItem>
        <GridItem>
          <h5>90</h5>
          <ProgressCircular percent={90} />
        </GridItem>
      </GridRow>
      <h2>singleColor</h2>
      <p>Отключает смену цветов в зависимости от величины percent.</p>
      <GridRow>
        <GridItem>
          <h5>20</h5>
          <ProgressCircular percent={20} singleColor />
        </GridItem>
        <GridItem>
          <h5>25</h5>
          <ProgressCircular percent={25} singleColor />
        </GridItem>
        <GridItem>
          <h5>55</h5>
          <ProgressCircular percent={55} singleColor />
        </GridItem>
        <GridItem>
          <h5>80</h5>
          <ProgressCircular percent={80} singleColor />
        </GridItem>
        <GridItem>
          <h5>90</h5>
          <ProgressCircular percent={90} singleColor />
        </GridItem>
      </GridRow>
      <h2>status</h2>
      <p>Компонент может отражать статус.</p>
      <GridRow>
        <GridItem>
          <h5>BASE</h5>
          <ProgressCircular percent={75} singleColor status="BASE" />
        </GridItem>
        <GridItem>
          <h5>PRIMARY</h5>
          <ProgressCircular percent={75} singleColor status="PRIMARY" />
        </GridItem>
        <GridItem>
          <h5>SUCCESS</h5>
          <ProgressCircular percent={75} singleColor status="SUCCESS" />
        </GridItem>
        <GridItem>
          <h5>WARNING</h5>
          <ProgressCircular percent={75} singleColor status="WARNING" />
        </GridItem>
        <GridItem>
          <h5>ERROR</h5>
          <ProgressCircular percent={75} singleColor status="ERROR" />
        </GridItem>
      </GridRow>
      <h2>size (L)</h2>
      <p>Компонент может быть одного из четырех размеров.</p>
      <GridRow>
        <GridCell>
          <h5>S</h5>
          <ProgressCircular percent={55} size="S" />
        </GridCell>
        <GridCell>
          <h5>M</h5>
          <ProgressCircular percent={55} size="M" />
        </GridCell>
        <GridCell>
          <h5>XL</h5>
          <ProgressCircular percent={55} size="XL" />
        </GridCell>
      </GridRow>
      <h2>withContour</h2>
      <p>Компонент может быть с контуром.</p>
      <GridRow>
        <GridCell>
          <ProgressCircular percent={55} withContour />
        </GridCell>
      </GridRow>
      <h2>withText</h2>
      <p>Компонент может быть с цифровой индикацией.</p>
      <GridRow>
        <GridCell>
          <ProgressCircular percent={55} withText />
        </GridCell>
      </GridRow>
    </StoriesItem>
  ))
  .add('Knobs', () => (
    <StoriesItem>
      <ProgressCircular
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
