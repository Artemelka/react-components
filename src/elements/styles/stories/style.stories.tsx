import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoriesItem } from '../../_story-components';

storiesOf('Styles', module)
  .addParameters({
    component: () => <div />,
    componentSubtitle: 'Стили сторибука',
  })
  .add('Colors', () => (
    <StoriesItem>
      <StoriesItem>
        <p style={{ color: 'var(--baseColor)' }}>--baseColor</p>
        <p style={{ color: 'var(--mainColor)' }}>--mainColor</p>
        <p style={{ color: 'var(--darkColor)' }}>--darkColor</p>
      </StoriesItem>
      <StoriesItem>
        <p style={{ color: 'var(--activeColor)' }}>--activeColor</p>
        <p style={{ color: 'var(--disabledColor)' }}>--disabledColor</p>
        <p style={{ color: 'var(--successColor)' }}>--successColor</p>
        <p style={{ color: 'var(--warningColor)' }}>--warningColor</p>
        <p style={{ color: 'var(--errorColor)' }}>--errorColor</p>
      </StoriesItem>
      <StoriesItem>
        <p style={{ color: 'var(--accentColor)' }}>--accentColor</p>
        <p style={{ color: 'var(--primaryColor)' }}>--primaryColor</p>
        <p style={{ color: 'var(--secondaryColor)' }}>--secondaryColor</p>
      </StoriesItem>
      <StoriesItem>
        <p style={{ color: 'var(--overlayColor)' }}>--overlayColor</p>
        <p style={{ color: 'var(--overlayLightColor)' }}>--overlayLightColor</p>
      </StoriesItem>
      <StoriesItem>
        <p style={{ color: 'var(--clockShadowWhiteColor)' }}>--clockShadowWhiteColor</p>
        <p style={{ color: 'var(--clockShadowBlackColor)' }}>--clockShadowBlackColor</p>
        <p style={{ color: 'var(--clockBorderColor)' }}>--clockBorderColor</p>
        <p style={{ color: 'var(--progressContourColor)' }}>--progressContourColor</p>
        <p style={{ color: 'var(--buttonShadowColor)' }}>--buttonShadowColor</p>
      </StoriesItem>
    </StoriesItem>
  ));
