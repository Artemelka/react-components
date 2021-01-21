import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, boolean } from '@storybook/addon-knobs';
import Add from '@material-ui/icons/Add';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import Delete from '@material-ui/icons/Delete';
import { ButtonGroup, ButtonMouseEvent } from '@artemelka/react-components';
import {
  StoriesItem,
  GridRow,
  GridCell,
} from '../../_story-components';
import { IntroComponent } from './_components/intro-component';

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
  .add('Examples', () => {
    const Tabs = () => {
      const [activeId, setActiveId] = useState('first');

      const handleClick = ({ id }: ButtonMouseEvent) => {
        setActiveId(`${id}`);
      };

      return (
        <ButtonGroup
          activeId={activeId}
          buttons={[
            {
              id: 'first',
              onClick: handleClick,
              value: 'first button',
            }, {
              id: 'second',
              onClick: handleClick,
              value: 'second button',
            }, {
              id: 'third',
              onClick: handleClick,
              value: 'third button',
            }, {
              id: 'fourth',
              onClick: handleClick,
              value: 'fourth button',
            },
          ]}
        />
      );
    };

    return (
      <StoriesItem>
        <IntroComponent />
        <GridRow>
          <GridCell fullWidth>
            <Tabs />
          </GridCell>
        </GridRow>
        <h2>isOnlyIcons</h2>
        <p>Можно передать только иконки.</p>
        <p>Параметр value будет проигнорирован.</p>
        <GridRow>
          <GridCell fullWidth>
            <ButtonGroup
              buttons={[
                {
                  icon: <ArrowDropDown fontSize="inherit" />,
                }, {
                  icon: <ArrowDropUp fontSize="inherit" />,
                }, {
                  icon: <Delete fontSize="inherit" />,
                }, {
                  icon: <Add fontSize="inherit" />,
                },
              ]}
              isOnlyIcons
            />
          </GridCell>
        </GridRow>
        <h2>Size (medium)</h2>
        <p>Компонент может быть одного из трех размеров.</p>
        <GridRow>
          <GridCell fullWidth>
            <h5>small</h5>
            <ButtonGroup
              buttons={[
                {
                  icon: <ArrowDropDown fontSize="inherit" />,
                  value: 'first button',
                }, {
                  icon: <ArrowDropUp fontSize="inherit" />,
                  value: 'second button',
                }, {
                  icon: <Delete fontSize="inherit" />,
                  value: 'third button',
                }, {
                  icon: <Add fontSize="inherit" />,
                  value: 'fourth button',
                },
              ]}
              size="small"
            />
          </GridCell>
          <GridCell fullWidth>
            <ButtonGroup
              buttons={[
                {
                  icon: <ArrowDropDown fontSize="inherit" />,
                }, {
                  icon: <ArrowDropUp fontSize="inherit" />,
                }, {
                  icon: <Delete fontSize="inherit" />,
                }, {
                  icon: <Add fontSize="inherit" />,
                },
              ]}
              isOnlyIcons
              size="small"
            />
          </GridCell>
          <GridCell fullWidth>
            <h5>medium</h5>
            <ButtonGroup
              buttons={[
                {
                  icon: <ArrowDropDown fontSize="inherit" />,
                  value: 'first button',
                }, {
                  icon: <ArrowDropUp fontSize="inherit" />,
                  value: 'second button',
                }, {
                  icon: <Delete fontSize="inherit" />,
                  value: 'third button',
                }, {
                  icon: <Add fontSize="inherit" />,
                  value: 'fourth button',
                },
              ]}
              size="medium"
            />
          </GridCell>
          <GridCell fullWidth>
            <ButtonGroup
              buttons={[
                {
                  icon: <ArrowDropDown fontSize="inherit" />,
                }, {
                  icon: <ArrowDropUp fontSize="inherit" />,
                }, {
                  icon: <Delete fontSize="inherit" />,
                }, {
                  icon: <Add fontSize="inherit" />,
                },
              ]}
              isOnlyIcons
              size="medium"
            />
          </GridCell>
          <GridCell fullWidth>
            <h5>big</h5>
            <ButtonGroup
              buttons={[
                {
                  icon: <ArrowDropDown fontSize="inherit" />,
                  value: 'first',
                }, {
                  icon: <ArrowDropUp fontSize="inherit" />,
                  value: 'second',
                }, {
                  icon: <Delete fontSize="inherit" />,
                  value: 'third',
                }, {
                  icon: <Add fontSize="inherit" />,
                  value: 'fourth',
                },
              ]}
              size="big"
            />
          </GridCell>
          <GridCell fullWidth>
            <ButtonGroup
              buttons={[
                {
                  icon: <ArrowDropDown fontSize="inherit" />,
                }, {
                  icon: <ArrowDropUp fontSize="inherit" />,
                }, {
                  icon: <Delete fontSize="inherit" />,
                }, {
                  icon: <Add fontSize="inherit" />,
                },
              ]}
              isOnlyIcons
              size="big"
            />
          </GridCell>
        </GridRow>
        <h2>Variant (base)</h2>
        <p>Компонент имеет три варианта отображения.</p>
        <GridRow>
          <GridCell fullWidth>
            <h5>base</h5>
            <ButtonGroup
              buttons={[
                {
                  value: 'first button',
                }, {
                  value: 'second button',
                }, {
                  value: 'third button',
                }, {
                  value: 'fourth button',
                },
              ]}
              variant="base"
            />
          </GridCell>
          <GridCell fullWidth>
            <ButtonGroup
              buttons={[
                {
                  icon: <ArrowDropDown fontSize="inherit" />,
                }, {
                  icon: <ArrowDropUp fontSize="inherit" />,
                }, {
                  icon: <Delete fontSize="inherit" />,
                }, {
                  icon: <Add fontSize="inherit" />,
                },
              ]}
              isOnlyIcons
              variant="base"
            />
          </GridCell>
          <GridCell fullWidth>
            <h5>filled</h5>
            <ButtonGroup
              buttons={[
                {
                  value: 'first button',
                }, {
                  value: 'second button',
                }, {
                  value: 'third button',
                }, {
                  value: 'fourth button',
                },
              ]}
              variant="filled"
            />
          </GridCell>
          <GridCell fullWidth>
            <ButtonGroup
              buttons={[
                {
                  icon: <ArrowDropDown fontSize="inherit" />,
                }, {
                  icon: <ArrowDropUp fontSize="inherit" />,
                }, {
                  icon: <Delete fontSize="inherit" />,
                }, {
                  icon: <Add fontSize="inherit" />,
                },
              ]}
              isOnlyIcons
              variant="filled"
            />
          </GridCell>
          <GridCell fullWidth>
            <h5>only text</h5>
            <ButtonGroup
              buttons={[
                {
                  value: 'first button',
                }, {
                  value: 'second button',
                }, {
                  value: 'third button',
                }, {
                  value: 'fourth button',
                },
              ]}
              variant="only-text"
            />
          </GridCell>
          <GridCell fullWidth>
            <ButtonGroup
              buttons={[
                {
                  icon: <ArrowDropDown fontSize="inherit" />,
                }, {
                  icon: <ArrowDropUp fontSize="inherit" />,
                }, {
                  icon: <Delete fontSize="inherit" />,
                }, {
                  icon: <Add fontSize="inherit" />,
                },
              ]}
              isOnlyIcons
              variant="only-text"
            />
          </GridCell>
        </GridRow>
        <h2>isVertical</h2>
        <p>Компонент может быть расположен вертикально.</p>
        <GridRow>
          <GridCell>
            <ButtonGroup
              buttons={[
                {
                  value: 'first button',
                }, {
                  value: 'second button',
                }, {
                  value: 'third button',
                }, {
                  value: 'fourth button',
                },
              ]}
              isVertical
            />
          </GridCell>
          <GridCell>
            <ButtonGroup
              buttons={[
                {
                  icon: <ArrowDropDown fontSize="inherit" />,
                }, {
                  icon: <ArrowDropUp fontSize="inherit" />,
                }, {
                  icon: <Delete fontSize="inherit" />,
                }, {
                  icon: <Add fontSize="inherit" />,
                },
              ]}
              isOnlyIcons
              isVertical
            />
          </GridCell>
        </GridRow>
        <h2>isFullWidth</h2>
        <p>Компонент может занимать всю ширину родителя.</p>
        <p>Не работает без isVertical.</p>
        <GridRow>
          <GridCell>
            <h5>Align text: left</h5>
            <ButtonGroup
              alignText="left"
              buttons={[
                {
                  value: 'first button',
                }, {
                  value: 'second button',
                }, {
                  value: 'third button',
                }, {
                  value: 'fourth button',
                },
              ]}
              isFullWidth
              isVertical
            />
          </GridCell>
          <GridCell>
            <h5>Align text: center</h5>
            <ButtonGroup
              buttons={[
                {
                  value: 'first button',
                }, {
                  value: 'second button',
                }, {
                  value: 'third button',
                }, {
                  value: 'fourth button',
                },
              ]}
              isFullWidth
              isVertical
              variant="filled"
            />
          </GridCell>
          <GridCell>
            <h5>Align text: right</h5>
            <ButtonGroup
              alignText="right"
              buttons={[
                {
                  value: 'first button',
                }, {
                  value: 'second button',
                }, {
                  value: 'third button',
                }, {
                  value: 'fourth button',
                },
              ]}
              isFullWidth
              isVertical
              variant="only-text"
            />
          </GridCell>
        </GridRow>
        <h2>themeColor</h2>
        <p>Компонент может сменить тему на одну из пяти.</p>
        <GridRow>
          <GridCell fullWidth>
            <h5>accent</h5>
            <ButtonGroup
              buttons={[
                {
                  value: 'first button',
                }, {
                  value: 'second button',
                }, {
                  value: 'third button',
                }, {
                  value: 'fourth button',
                },
              ]}
              themeColor="accent"
            />
          </GridCell>
          <GridCell fullWidth>
            <ButtonGroup
              buttons={[
                {
                  icon: <ArrowDropDown fontSize="inherit" />,
                }, {
                  icon: <ArrowDropUp fontSize="inherit" />,
                }, {
                  icon: <Delete fontSize="inherit" />,
                }, {
                  icon: <Add fontSize="inherit" />,
                },
              ]}
              isOnlyIcons
              themeColor="accent"
            />
          </GridCell>
          <GridCell fullWidth>
            <h5>primary</h5>
            <ButtonGroup
              buttons={[
                {
                  value: 'first button',
                }, {
                  value: 'second button',
                }, {
                  value: 'third button',
                }, {
                  value: 'fourth button',
                },
              ]}
              themeColor="primary"
            />
          </GridCell>
          <GridCell fullWidth>
            <ButtonGroup
              buttons={[
                {
                  icon: <ArrowDropDown fontSize="inherit" />,
                }, {
                  icon: <ArrowDropUp fontSize="inherit" />,
                }, {
                  icon: <Delete fontSize="inherit" />,
                }, {
                  icon: <Add fontSize="inherit" />,
                },
              ]}
              isOnlyIcons
              themeColor="primary"
            />
          </GridCell>
          <GridCell fullWidth>
            <h5>secondary</h5>
            <ButtonGroup
              buttons={[
                {
                  value: 'first button',
                }, {
                  value: 'second button',
                }, {
                  value: 'third button',
                }, {
                  value: 'fourth button',
                },
              ]}
              themeColor="secondary"
            />
          </GridCell>
          <GridCell fullWidth>
            <ButtonGroup
              buttons={[
                {
                  icon: <ArrowDropDown fontSize="inherit" />,
                }, {
                  icon: <ArrowDropUp fontSize="inherit" />,
                }, {
                  icon: <Delete fontSize="inherit" />,
                }, {
                  icon: <Add fontSize="inherit" />,
                },
              ]}
              isOnlyIcons
              themeColor="secondary"
            />
          </GridCell>
          <GridCell fullWidth>
            <h5>success</h5>
            <ButtonGroup
              buttons={[
                {
                  value: 'first button',
                }, {
                  value: 'second button',
                }, {
                  value: 'third button',
                }, {
                  value: 'fourth button',
                },
              ]}
              themeColor="success"
            />
          </GridCell>
          <GridCell fullWidth>
            <ButtonGroup
              buttons={[
                {
                  icon: <ArrowDropDown fontSize="inherit" />,
                }, {
                  icon: <ArrowDropUp fontSize="inherit" />,
                }, {
                  icon: <Delete fontSize="inherit" />,
                }, {
                  icon: <Add fontSize="inherit" />,
                },
              ]}
              isOnlyIcons
              themeColor="success"
            />
          </GridCell>
          <GridCell fullWidth>
            <h5>error</h5>
            <ButtonGroup
              buttons={[
                {
                  value: 'first button',
                }, {
                  value: 'second button',
                }, {
                  value: 'third button',
                }, {
                  value: 'fourth button',
                },
              ]}
              themeColor="error"
            />
          </GridCell>
          <GridCell fullWidth>
            <ButtonGroup
              buttons={[
                {
                  icon: <ArrowDropDown fontSize="inherit" />,
                }, {
                  icon: <ArrowDropUp fontSize="inherit" />,
                }, {
                  icon: <Delete fontSize="inherit" />,
                }, {
                  icon: <Add fontSize="inherit" />,
                },
              ]}
              isOnlyIcons
              themeColor="error"
            />
          </GridCell>
        </GridRow>
      </StoriesItem>
    );
  })
  .add('Knobs', () => (
    <StoriesItem>
      <ButtonGroup
        activeId={BUTTONS_ID[2]}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        alignText={select('alignText', ALIGN_TEXT, ALIGN_TEXT[2])}
        buttons={[
          {
            icon: <ArrowDropDown fontSize="inherit" />,
            id: BUTTONS_ID[0],
            onClick: action('first onClick'),
            value: 'first',
          }, {
            icon: <ArrowDropUp fontSize="inherit" />,
            id: BUTTONS_ID[1],
            disabled: true,
            onClick: action('second onClick'),
            value: 'second',
          }, {
            icon: <Delete fontSize="inherit" />,
            id: BUTTONS_ID[2],
            onClick: action('third onClick'),
            value: 'third',
          }, {
            icon: <Add fontSize="inherit" />,
            id: BUTTONS_ID[3],
            onClick: action('fourth onClick'),
            value: 'fourth',
          },
        ]}
        isFullWidth={boolean('isFullWidth', false)}
        isOnlyIcons={boolean('isOnlyIcons', false)}
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
    </StoriesItem>
  ));
