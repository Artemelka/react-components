import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs';
import {
  ProgressCircular,
  ProgressLinear,
  ProgressText,
  circleSize,
  progressStatuses,
} from '@artemelka/react-components';

const ProgressSelectOptions = {
  range: true,
  min: 0,
  max: 100,
  step: 1,
};

storiesOf('Progress', module)
  .addParameters({
    component: ProgressCircular,
    subcomponents: {
      ProgressLinear,
      ProgressText,
    },
    componentSubtitle: 'Компонент для отображения индикации прогресса',
  })
  .add('Circular', ({ StoriesItemWrapper }: any) => (
    <StoriesItemWrapper>
      <ProgressCircular
        darkColor={boolean('darkColor', false)}
        percent={number('percent', 50, ProgressSelectOptions)}
        singleColor={boolean('single color', true)}
        size={select('size', circleSize, circleSize.M)}
        status={select('status', progressStatuses, progressStatuses.BASE)}
        withContour={boolean('withContour', false)}
        withText={boolean('withText', false)}
      />
    </StoriesItemWrapper>
  ))
  .add('Linear', ({ StoriesItemWrapper }: any) => (
    <StoriesItemWrapper>
      <ProgressLinear
        darkColor={boolean('darkColor', false)}
        percent={number('percent', 50, ProgressSelectOptions)}
        singleColor={boolean('single color', true)}
        size={select('size', circleSize, circleSize.M)}
        status={select('status', progressStatuses, progressStatuses.BASE)}
        withContour={boolean('withContour', false)}
        withText={boolean('withText', false)}
      />
    </StoriesItemWrapper>
  ))
  .add('Text', ({ StoriesItemWrapper }: any) => (
    <StoriesItemWrapper>
      <ProgressText
        darkColor={boolean('darkColor', false)}
        label="Custom label"
        percent={number('percent', 50, ProgressSelectOptions)}
        size={select('size', circleSize, circleSize.M)}
        status={select('status', progressStatuses, progressStatuses.BASE)}
        withContour={boolean('withContour', false)}
      />
    </StoriesItemWrapper>
  ));
