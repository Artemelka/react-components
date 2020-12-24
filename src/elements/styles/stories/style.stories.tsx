import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Styles', module)
  .addParameters({
    component: () => <div />,
    componentSubtitle: 'Стили сторибука',
  })
  .add('Colors', ({ StoriesItemWrapper }: any) => (
    <StoriesItemWrapper>
      <p style={{ color: 'var(--mainColor)' }}>--mainColor</p>
      <p style={{ color: 'var(--baseColor)' }}>--baseColor</p>
      <p style={{ color: 'var(--darkColor)' }}>--darkColor</p>
      <p style={{ color: 'var(--accentColor)' }}>--accentColor</p>
      <p style={{ color: 'var(--disabledColor)' }}>--disabledColor</p>
      <p style={{ color: 'var(--secondaryColor)' }}>--secondaryColor</p>
      <p style={{ color: 'var(--primaryColor)' }}>--primaryColor</p>
      <p style={{ color: 'var(--successColor)' }}>--successColor</p>
      <p style={{ color: 'var(--errorColor)' }}>--errorColor</p>
      <p style={{ color: 'var(--warningColor)' }}>--warningColor</p>
      <p style={{ color: 'var(--overlayColor)' }}>--overlayColor</p>
      <p style={{ color: 'var(--overlayLightColor)' }}>--overlayLightColor</p>
      <p style={{ color: 'var(--activeColor)' }}>--activeColor</p>
      <p style={{ color: 'var(--clockShadowWhiteColor)' }}>--clockShadowWhiteColor</p>
      <p style={{ color: 'var(--clockShadowBlackColor)' }}>--clockShadowBlackColor</p>
      <p style={{ color: 'var(--clockBorderColor)' }}>--clockBorderColor</p>
      <p style={{ color: 'var(--progressContourColor)' }}>--progressContourColor</p>
      <p style={{ color: 'var(--buttonShadowColor)' }}>--buttonShadowColor</p>
    </StoriesItemWrapper>
  ));
