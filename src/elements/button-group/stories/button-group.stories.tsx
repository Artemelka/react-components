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
  Grid,
  GridCell,
  GridDivider,
  GridRow,
  Highlighter,
  StoriesItem,
} from '../../../_story-components';
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
      <>
        <IntroComponent />
        <Grid>
          <GridRow>
            <GridCell size={12}>
              <Tabs />
            </GridCell>
          </GridRow>
        </Grid>
        <h2>
          <Highlighter>isOnlyIcons</Highlighter> (false)
        </h2>
        <p>
          Для корректной работы нужно передать
          <Highlighter isFilled>icon</Highlighter>
          для каждой кнопки.
        </p>
        <p>
          <Highlighter color="error">
            Параметр
            <Highlighter isFilled>value</Highlighter>
            будет проигнорирован.
          </Highlighter>
        </p>
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
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
        </Grid>

        <h2>
          <Highlighter>size</Highlighter> (medium)
        </h2>
        <p>Компонент может быть одного из трех размеров.</p>
        <Grid>
          <GridRow>
            <GridCell size={12}>
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
            <GridCell size={12}>
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
          </GridRow>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
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
            <GridCell size={12}>
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
          </GridRow>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
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
            <GridCell size={12}>
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
        </Grid>

        <h2>
          <Highlighter>isVertical</Highlighter> (false)
        </h2>
        <p>Компонент может быть расположен вертикально и позиционировать текст.</p>
        <h4>
          <Highlighter>alignText</Highlighter> (center)
        </h4>
        <Grid>
          <GridRow>
            <GridCell size={3}>
              <h5>left</h5>
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
                isVertical
              />
            </GridCell>
            <GridCell size={3}>
              <h5>center</h5>
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
            <GridCell size={3}>
              <h5>right</h5>
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
                isVertical
              />
            </GridCell>
            <GridCell size={3} verticalAlign="end">
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
        </Grid>

        <h2>
          <Highlighter>variant</Highlighter> (base)
        </h2>
        <p>Компонент имеет три варианта отображения.</p>
        <Grid>
          <GridRow>
            <GridCell size={12}>
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
            <GridCell size={12}>
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
          </GridRow>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
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
            <GridCell size={12}>
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
          </GridRow>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
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
            <GridCell size={12}>
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
        </Grid>

        <h2>
          <Highlighter>isFullWidth</Highlighter> (false)
        </h2>
        <p>Компонент может занимать всю ширину родителя и позиционировать текст.</p>
        <p>
          <Highlighter color="error">Не работает без</Highlighter>
          <Highlighter isFilled>isVertical</Highlighter>.
        </p>
        <h4>
          <Highlighter>alignText</Highlighter> (center)
        </h4>
        <Grid>
          <GridRow>
            <GridCell>
              <h5>left</h5>
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
              <h5>center</h5>
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
              <h5>right</h5>
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
        </Grid>

        <h2>
          <Highlighter>themeColor</Highlighter>
        </h2>
        <p>Компонент может сменить тему на одну из пяти.</p>
        <Grid>
          <GridRow>
            <GridCell size={12}>
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
            <GridCell size={12}>
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
                variant="filled"
              />
            </GridCell>
            <GridCell size={12}>
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
                variant="only-text"
              />
            </GridCell>
            <GridCell size={12}>
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
          </GridRow>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
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
            <GridCell size={12}>
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
                variant="filled"
              />
            </GridCell>
            <GridCell size={12}>
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
                variant="only-text"
              />
            </GridCell>
            <GridCell size={12}>
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
          </GridRow>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
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
            <GridCell size={12}>
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
                variant="filled"
              />
            </GridCell>
            <GridCell size={12}>
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
                variant="only-text"
              />
            </GridCell>
            <GridCell size={12}>
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
          </GridRow>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
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
            <GridCell size={12}>
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
                variant="filled"
              />
            </GridCell>
            <GridCell size={12}>
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
                variant="only-text"
              />
            </GridCell>
            <GridCell size={12}>
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
          </GridRow>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
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
            <GridCell size={12}>
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
                variant="filled"
              />
            </GridCell>
            <GridCell size={12}>
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
                variant="only-text"
              />
            </GridCell>
            <GridCell size={12}>
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
        </Grid>
      </>
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
