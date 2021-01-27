import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import { RadioGroup, RadioChangeEvent } from '@artemelka/react-components';
import {
  Grid,
  GridCell,
  GridDivider,
  GridRow,
  Highlighter,
  StoriesItem,
} from '../../_story-components';
import { IntroComponent } from './_components/intro-component';

const LABEL_THEME = [undefined, 'base', 'accent', 'main', 'primary', 'secondary'];
const RADIO_SIZE = [undefined, 'big', 'medium', 'small'];
const RADIO_THEME = [undefined, 'base', 'accent', 'primary', 'secondary'];
const RADIO_VARIANT = [undefined, 'base', 'filled', 'only-text'];
const INITIAL_VALUES = {
  'radio-group-intro': '',
  'radio-group-label': '',
  'radio-group-error': '',
  'radio-group-isVertical': '',
  'radio-group-color-base': '',
  'radio-size-big': '',
  'radio-size-medium': '',
  'radio-size-small': '',
  'radio-variant-base': '',
  'radio-variant-filled': '',
  'radio-variant-only-text': '',
  'radio-color-accent': '',
  'radio-color-primary': '',
  'radio-color-secondary': '',
  'radio-theme-accent': '',
  'radio-theme-primary': '',
  'radio-theme-secondary': '',
};

storiesOf('RadioGroup', module)
  .addParameters({
    component: RadioGroup,
    componentSubtitle: 'Компонент для реализации группы радиокнопок',
  })
  .add('Examples', () => {
    const RadioController = (props: any) => {
      const [state, setState] = useState(INITIAL_VALUES);

      const handleChange = ({ name, value }: RadioChangeEvent) => {
        setState({ ...state, [name]: value });
      };

      return props.children({ state, onChange: handleChange });
    };

    return (
      <RadioController>
        {({ state, onChange }: any) => (
          <>
            <IntroComponent />
            <Grid>
              <GridRow>
                <GridCell horizontalAlign="center" size={12}>
                  <RadioGroup
                    items={[{
                      id: 'radio1',
                      label: 'First',
                      value: 'one',
                    }, {
                      id: 'radio2',
                      label: 'Second',
                      value: 'two',
                    }, {
                      id: 'radio3',
                      label: 'Third',
                      value: 'three',
                    }]}
                    name="radio-group-intro"
                    onChange={onChange}
                    value={state['radio-group-intro']}
                  />
                </GridCell>
              </GridRow>
            </Grid>

            <h2>
              <Highlighter>groupLabel</Highlighter>
            </h2>
            <p>Компонент может иметь общий лейбл.</p>
            <Grid>
              <GridDivider />
              <GridRow>
                <GridCell size={12}>
                  <RadioGroup
                    groupLabel="Radio button group"
                    items={[{
                      id: 'radio-label1',
                      label: 'First',
                      value: 'one',
                    }, {
                      id: 'radio-label2',
                      label: 'Second',
                      value: 'two',
                    }, {
                      id: 'radio-label3',
                      label: 'Third',
                      value: 'three',
                    }]}
                    name="radio-group-label"
                    onChange={onChange}
                    value={state['radio-group-label']}
                  />
                </GridCell>
              </GridRow>
            </Grid>

            <h2>
              <Highlighter>isError</Highlighter> (false)
            </h2>
            <p>Компонент может отображать ошибку.</p>
            <Grid>
              <GridDivider />
              <h4>
                <Highlighter isFilled>errorMessage</Highlighter>
              </h4>
              <GridRow>
                <GridCell size={12}>
                  <RadioGroup
                    errorMessage="Error message"
                    groupLabel="Radio button group with error"
                    isError
                    items={[{
                      id: 'radio-error1',
                      label: 'First',
                      value: 'one',
                    }, {
                      id: 'radio-error2',
                      label: 'Second',
                      value: 'two',
                    }, {
                      id: 'radio-error3',
                      label: 'Third',
                      value: 'three',
                    }]}
                    name="radio-group-error"
                    onChange={onChange}
                    value={state['radio-group-error']}
                  />
                </GridCell>
              </GridRow>
            </Grid>

            <h2>
              <Highlighter>isVertical</Highlighter> (false)
            </h2>
            <p>Компонент может быть расположен вертикально.</p>
            <Grid>
              <GridDivider />
              <GridRow>
                <GridCell size={12}>
                  <RadioGroup
                    isVertical
                    items={[{
                      id: 'radio-isVertical1',
                      label: 'First',
                      value: 'one',
                    }, {
                      id: 'radio-isVertical2',
                      label: 'Second',
                      value: 'two',
                    }, {
                      id: 'radio-isVertical3',
                      label: 'Third',
                      value: 'three',
                    }]}
                    name="radio-group-isVertical"
                    onChange={onChange}
                    value={state['radio-group-isVertical']}
                  />
                </GridCell>
              </GridRow>
            </Grid>

            <h2>
              <Highlighter>size</Highlighter> (medium)
            </h2>
            <p>Компонент может быть одного из трех размеров.</p>
            <Grid>
              <GridDivider />
              <GridRow>
                <GridCell size={12}>
                  <h5>big</h5>
                  <RadioGroup
                    items={[{
                      id: 'radio-size-big-1',
                      label: 'First',
                      value: 'one',
                    }, {
                      id: 'radio-size-big-2',
                      label: 'Second',
                      value: 'two',
                    }, {
                      id: 'radio-size-big-3',
                      label: 'Third',
                      value: 'three',
                    }]}
                    name="radio-size-big"
                    onChange={onChange}
                    size="big"
                    value={state['radio-size-big']}
                  />
                </GridCell>
                <GridCell size={12}>
                  <h5>medium</h5>
                  <RadioGroup
                    items={[{
                      id: 'radio-size-medium-1',
                      label: 'First',
                      value: 'one',
                    }, {
                      id: 'radio-size-medium-2',
                      label: 'Second',
                      value: 'two',
                    }, {
                      id: 'radio-size-medium-3',
                      label: 'Third',
                      value: 'three',
                    }]}
                    name="radio-size-medium"
                    onChange={onChange}
                    value={state['radio-size-medium']}
                  />
                </GridCell>
                <GridCell size={12}>
                  <h5>small</h5>
                  <RadioGroup
                    items={[{
                      id: 'radio-size-small-1',
                      label: 'First',
                      value: 'one',
                    }, {
                      id: 'radio-size-small-2',
                      label: 'Second',
                      value: 'two',
                    }, {
                      id: 'radio-size-small-3',
                      label: 'Third',
                      value: 'three',
                    }]}
                    name="radio-size-small"
                    onChange={onChange}
                    size="small"
                    value={state['radio-size-small']}
                  />
                </GridCell>
              </GridRow>
            </Grid>

            <h2>
              <Highlighter>variant</Highlighter>
            </h2>
            <p>Компонент имеет три варианта отображения.</p>
            <Grid>
              <GridDivider />
              <GridRow>
                <GridCell size={12}>
                  <h5>base</h5>
                  <RadioGroup
                    items={[{
                      id: 'radio-variant-base-1',
                      label: 'First',
                      value: 'one',
                    }, {
                      id: 'radio-variant-base-2',
                      label: 'Second',
                      value: 'two',
                    }, {
                      id: 'radio-variant-base-3',
                      label: 'Third',
                      value: 'three',
                    }]}
                    name="radio-variant-base"
                    onChange={onChange}
                    value={state['radio-variant-base']}
                  />
                </GridCell>
                <GridCell size={12}>
                  <h5>filled</h5>
                  <RadioGroup
                    items={[{
                      id: 'radio-variant-filled-1',
                      label: 'First',
                      value: 'one',
                    }, {
                      id: 'radio-variant-filled-2',
                      label: 'Second',
                      value: 'two',
                    }, {
                      id: 'radio-variant-filled-3',
                      label: 'Third',
                      value: 'three',
                    }]}
                    name="radio-variant-filled"
                    onChange={onChange}
                    value={state['radio-variant-filled']}
                    variant="filled"
                  />
                </GridCell>
                <GridCell size={12}>
                  <h5>only-text</h5>
                  <RadioGroup
                    items={[{
                      id: 'radio-variant-only-text-1',
                      label: 'First',
                      value: 'one',
                    }, {
                      id: 'radio-variant-only-text-2',
                      label: 'Second',
                      value: 'two',
                    }, {
                      id: 'radio-variant-only-text-3',
                      label: 'Third',
                      value: 'three',
                    }]}
                    name="radio-variant-only-text"
                    onChange={onChange}
                    value={state['radio-variant-only-text']}
                    variant="only-text"
                  />
                </GridCell>
              </GridRow>
            </Grid>

            <h2>
              <Highlighter>labelsThemeColor</Highlighter>
            </h2>
            <p>Компонент может сменить цвет лейблов на один из четырех.</p>
            <Grid>
              <GridDivider />
              <GridRow>
                <GridCell size={12}>
                  <h5>base</h5>
                  <RadioGroup
                    items={[{
                      id: 'radio-color-base-1',
                      label: 'First',
                      value: 'one',
                    }, {
                      id: 'radio-color-base-2',
                      label: 'Second',
                      value: 'two',
                    }, {
                      id: 'radio-color-base-3',
                      label: 'Third',
                      value: 'three',
                    }]}
                    labelsThemeColor="base"
                    name="radio-group-color-base"
                    onChange={onChange}
                    value={state['radio-group-color-base']}
                  />
                </GridCell>
                <GridCell size={12}>
                  <h5>accent</h5>
                  <RadioGroup
                    items={[{
                      id: 'radio-color-accent-1',
                      label: 'First',
                      value: 'one',
                    }, {
                      id: 'radio-color-accent-2',
                      label: 'Second',
                      value: 'two',
                    }, {
                      id: 'radio-color-accent-3',
                      label: 'Third',
                      value: 'three',
                    }]}
                    labelsThemeColor="accent"
                    name="radio-color-accent"
                    onChange={onChange}
                    value={state['radio-color-accent']}
                  />
                </GridCell>
                <GridCell size={12}>
                  <h5>primary</h5>
                  <RadioGroup
                    items={[{
                      id: 'radio-color-primary-1',
                      label: 'First',
                      value: 'one',
                    }, {
                      id: 'radio-color-primary-2',
                      label: 'Second',
                      value: 'two',
                    }, {
                      id: 'radio-color-primary-3',
                      label: 'Third',
                      value: 'three',
                    }]}
                    labelsThemeColor="primary"
                    name="radio-color-primary"
                    onChange={onChange}
                    value={state['radio-color-primary']}
                  />
                </GridCell>
                <GridCell size={12}>
                  <h5>secondary</h5>
                  <RadioGroup
                    items={[{
                      id: 'radio-color-secondary-1',
                      label: 'First',
                      value: 'one',
                    }, {
                      id: 'radio-color-secondary-2',
                      label: 'Second',
                      value: 'two',
                    }, {
                      id: 'radio-color-secondary-3',
                      label: 'Third',
                      value: 'three',
                    }]}
                    labelsThemeColor="secondary"
                    name="radio-color-secondary"
                    onChange={onChange}
                    value={state['radio-color-secondary']}
                  />
                </GridCell>
              </GridRow>
            </Grid>

            <h2>
              <Highlighter>themeColor</Highlighter>
            </h2>
            <p>Компонент может сменить тему на одну из трех.</p>
            <Grid>
              <GridDivider />
              <GridRow>
                <GridCell size={12}>
                  <h5>accent</h5>
                  <RadioGroup
                    items={[{
                      id: 'radio-theme-accent-1',
                      label: 'First',
                      value: 'one',
                    }, {
                      id: 'radio-theme-accent-2',
                      label: 'Second',
                      value: 'two',
                    }, {
                      id: 'radio-theme-accent-3',
                      label: 'Third',
                      value: 'three',
                    }]}
                    name="radio-theme-accent"
                    onChange={onChange}
                    themeColor="accent"
                    value={state['radio-theme-accent']}
                  />
                </GridCell>
                <GridCell size={12}>
                  <h5>primary</h5>
                  <RadioGroup
                    items={[{
                      id: 'radio-theme-primary-1',
                      label: 'First',
                      value: 'one',
                    }, {
                      id: 'radio-theme-primary-2',
                      label: 'Second',
                      value: 'two',
                    }, {
                      id: 'radio-theme-primary-3',
                      label: 'Third',
                      value: 'three',
                    }]}
                    name="radio-theme-primary"
                    onChange={onChange}
                    themeColor="primary"
                    value={state['radio-theme-primary']}
                  />
                </GridCell>
                <GridCell size={12}>
                  <h5>secondary</h5>
                  <RadioGroup
                    items={[{
                      id: 'radio-theme-secondary-1',
                      label: 'First',
                      value: 'one',
                    }, {
                      id: 'radio-theme-secondary-2',
                      label: 'Second',
                      value: 'two',
                    }, {
                      id: 'radio-theme-secondary-3',
                      label: 'Third',
                      value: 'three',
                    }]}
                    name="radio-theme-secondary"
                    onChange={onChange}
                    themeColor="secondary"
                    value={state['radio-theme-secondary']}
                  />
                </GridCell>
              </GridRow>
            </Grid>
          </>
        )}
      </RadioController>
    );
  })
  .add('Knobs', () => (
    <StoriesItem>
      <RadioGroup
        errorMessage={text('errorMessage', 'Error message')}
        groupLabel={text('groupLabel', 'It`s a group label')}
        isError={boolean('isError', false)}
        isVertical={boolean('isVertical', false)}
        items={[
          {
            id: 'radio1',
            label: 'First',
            value: 'one',
          }, {
            id: 'radio2',
            label: 'Second',
            value: 'two',
          }, {
            id: 'radio3',
            label: 'third',
            value: 'three',
          },
        ]}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        labelsThemeColor={select('labelsThemeColor', LABEL_THEME, LABEL_THEME[0])}
        name="radio-knobs"
        onChange={action('onChange')}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        size={select('size', RADIO_SIZE, RADIO_SIZE[0])}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        themeColor={select('themeColor', RADIO_THEME, RADIO_THEME[0])}
        value={text('value', 'one')}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        variant={select('variant', RADIO_VARIANT, RADIO_VARIANT[0])}
      />
    </StoriesItem>
  ));
