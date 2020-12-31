import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, boolean } from '@storybook/addon-knobs';
import Add from '@material-ui/icons/Add';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import Delete from '@material-ui/icons/Delete';
import { ButtonGroup } from '@artemelka/react-components';

const ALIGN_TEXT = ['left', 'center', 'right'];
const BUTTON_SIZES = [undefined, 'big', 'medium', 'small'];
const BUTTON_VARIANTS = [undefined, 'base', 'filled', 'only-text'];
const THEME_COLOR = [undefined, 'base', 'accent', 'primary', 'secondary', 'success', 'error'];
const BUTTONS_ID = [1, 2, 3, 4, 5];

storiesOf('ButtonGroup', module)
  .addParameters({
    component: ButtonGroup,
    componentSubtitle: 'Компонент для реализации группы кнопок',
  })
  .add('ButtonGroup', ({ StoriesItemWrapper }: any) => (
    <StoriesItemWrapper>
      <StoriesItemWrapper>
        <ButtonGroup
          activeId={BUTTONS_ID[2]}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          alignText={select('alignText', ALIGN_TEXT, ALIGN_TEXT[2])}
          buttons={[
            {
              id: BUTTONS_ID[0],
              onClick: action('first onClick'),
              value: 'first',
            }, {
              id: BUTTONS_ID[1],
              disabled: true,
              onClick: action('second onClick'),
              value: 'second',
            }, {
              id: BUTTONS_ID[2],
              icon: <Delete fontSize="inherit" />,
              onClick: action('third onClick'),
              value: 'third',
            }, {
              id: BUTTONS_ID[3],
              onClick: action('fourth onClick'),
              value: 'fourth',
            },
          ]}
          isFullWidth={boolean('isFullWidth', false)}
          isVertical={boolean('isVertical', false)}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          size={select('size', BUTTON_SIZES, BUTTON_SIZES[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          variant={select('variant', BUTTON_VARIANTS, BUTTON_VARIANTS[0])}
        />
      </StoriesItemWrapper>
      <StoriesItemWrapper>
        <ButtonGroup
          activeId={BUTTONS_ID[2]}
          buttons={[
            {
              id: BUTTONS_ID[0],
              icon: <ArrowDropDown fontSize="inherit" />,
              onClick: action('first onClick'),
            }, {
              id: BUTTONS_ID[1],
              disabled: true,
              icon: <ArrowDropUp fontSize="inherit" />,
              onClick: action('second onClick'),
            }, {
              id: BUTTONS_ID[2],
              icon: <Delete fontSize="inherit" />,
              onClick: action('third onClick'),
            }, {
              id: BUTTONS_ID[3],
              icon: <Add fontSize="inherit" />,
              onClick: action('fourth onClick'),
            },
          ]}
          isFullWidth={boolean('isFullWidth', false)}
          isOnlyIcons
          isVertical={boolean('isVertical', false)}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          size={select('size', BUTTON_SIZES, BUTTON_SIZES[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          variant={select('variant', BUTTON_VARIANTS, BUTTON_VARIANTS[0])}
        />
      </StoriesItemWrapper>
    </StoriesItemWrapper>
  ));
