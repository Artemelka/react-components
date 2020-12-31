import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import Delete from '@material-ui/icons/Delete';
import Add from '@material-ui/icons/Add';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import { CollapsePanel } from '@artemelka/react-components';
import { LOREM } from '../../constants';

const ALIGN_TEXT = [undefined, 'left', 'center', 'right'];
const THEME_COLOR = [undefined, 'base', 'accent', 'primary', 'secondary', 'success', 'error'];
const BUTTON_SIZES = [undefined, 'big', 'medium', 'small'];
const BUTTON_VARIANTS = [undefined, 'base', 'filled', 'only-text'];

storiesOf('CollapsePanel', module)
  .addParameters({
    component: CollapsePanel,
    componentSubtitle: 'Компонент для отображения ????',
  })
  .add('CollapsePanel', ({ StoriesItemWrapper }: any) => (
    <StoriesItemWrapper>
      <StoriesItemWrapper>
        <CollapsePanel
          contentActions={[
            {
              onClick: action('content first onClick'),
              value: 'first',
            },
            {
              disabled: true,
              onClick: action('content second onClick'),
              value: 'second',
            },
            {
              onClick: action('content third onClick'),
              themeColor: 'error',
              variant: 'filled',
              value: 'third',
            },
            {
              onClick: action('content fourth onClick'),
              themeColor: 'primary',
              variant: 'base',
              value: 'fourth',
            },
          ]}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          contentActionsAlign={select('contentActionsAlign', ALIGN_TEXT, ALIGN_TEXT[0])}
          disabled={boolean('disabled', false)}
          headerActions={{
            openIcon: <ArrowDropDown fontSize="inherit" />,
            closeIcon: <ArrowDropUp fontSize="inherit" />,
            actionsConfig: [
              {
                id: 'Add id',
                icon: <Add fontSize="inherit" />,
                onClick: action('Add onClick'),
              }, {
                id: 'Delete id',
                icon: <Delete fontSize="inherit" />,
                onClick: action('Delete onClick'),
              }, {
                disabled: true,
                icon: <Delete fontSize="inherit" />,
                onClick: action('Delete onClick'),
              },
            ],
          }}
          id={text('id', 'panel id')}
          isOpen={boolean('isOpen', false)}
          onClick={action('onClick')}
          panelTitle={text('panelTitle', 'Panel title')}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          size={select('size', BUTTON_SIZES, BUTTON_SIZES[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          variant={select('variant', BUTTON_VARIANTS, BUTTON_VARIANTS[0])}
        >
          {text('children', LOREM)}
        </CollapsePanel>
      </StoriesItemWrapper>
      <StoriesItemWrapper>
        <CollapsePanel
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          alignText={select('alignText', ALIGN_TEXT, ALIGN_TEXT[0])}
          disabled={boolean('disabled', false)}
          // emptyStyle={boolean('emptyStyle', false)}
          id={text('id', 'panel id')}
          isOpen={boolean('isOpen', false)}
          onClick={action('onClick')}
          panelTitle={text('panelTitle', 'Panel title')}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          size={select('size', BUTTON_SIZES, BUTTON_SIZES[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          variant={select('variant', BUTTON_VARIANTS, BUTTON_VARIANTS[0])}
        >
          {text('children', LOREM)}
        </CollapsePanel>
      </StoriesItemWrapper>
      <StoriesItemWrapper>
        <CollapsePanel
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          alignText={select('alignText', ALIGN_TEXT, ALIGN_TEXT[0])}
          customPanel={
            <div>
              <input id="collapseCheckbox" type="checkbox" />
              <label htmlFor="collapseCheckbox">Custom panel with Checkbox</label>
              <br />
              <input type="button" value="CLICK" />
            </div>
          }
          disabled={boolean('disabled', false)}
          id={text('id', 'panel id')}
          isOpen={boolean('isOpen', false)}
          onClick={action('onClick')}
          panelTitle={text('panelTitle', 'Panel title')}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          size={select('size', BUTTON_SIZES, BUTTON_SIZES[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          variant={select('variant', BUTTON_VARIANTS, BUTTON_VARIANTS[0])}
        >
          {text('children', LOREM)}
        </CollapsePanel>
      </StoriesItemWrapper>
    </StoriesItemWrapper>
  ));
