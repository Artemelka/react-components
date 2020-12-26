import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import Delete from '@material-ui/icons/Delete';
import { Button } from '@artemelka/react-components';

const ALIGN_TEXT = ['left', 'center', 'right'];
const BUTTON_TYPES = ['button', 'submit', 'reset'];
const BUTTON_SIZES = ['big', 'medium', 'small'];
const BUTTON_VARIANTS = ['base', 'filled', 'only-text'];
const THEME_COLOR = ['base', 'main', 'accent', 'primary', 'secondary', 'success', 'error'];

storiesOf('Button', module)
  .addParameters({
    component: Button,
    componentSubtitle: 'Компонент для реализации кнопок',
  })
  .add('Button', ({ StoriesItemWrapper }: any) => (
    <StoriesItemWrapper>
      <Button
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        alignText={select('alignText', ALIGN_TEXT, ALIGN_TEXT[2])}
        disabled={boolean('disabled', false)}
        icon={<Delete fontSize="inherit" />}
        id={text('id', 'test')}
        isFullWidth={boolean('isFullWidth', false)}
        isLeftRound={boolean('isLeftRound', false)}
        isRightRound={boolean('isRightRound', false)}
        onBlur={action('onBlur')}
        onClick={action('onClick')}
        onFocus={action('onFocus')}
        onKeyDown={action('onKeyDown')}
        onKeyPress={action('onKeyPress')}
        onKeyUp={action('onKeyUp')}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        size={select('size', BUTTON_SIZES, BUTTON_SIZES[1])}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        type={select('type', BUTTON_TYPES, BUTTON_TYPES[0])}
        value={text('value', 'Button text')}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        variant={select('variant', BUTTON_VARIANTS, BUTTON_VARIANTS[0])}
      />
    </StoriesItemWrapper>
  ));
