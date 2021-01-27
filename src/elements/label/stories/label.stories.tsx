import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { Checkbox, Input, Label } from '@artemelka/react-components';
import {
  Grid,
  GridCell,
  GridDivider,
  GridRow,
  Highlighter,
  StoriesItem,
} from '../../_story-components';
import { IntroComponent } from './_components/intro-component';

const LABEL_SIZE = [undefined, 'big', 'medium', 'small'];
const LABEL_POSITION = [undefined, 'left', 'right', 'top'];
const LABEL_THEME = [undefined, 'base', 'accent', 'main', 'primary', 'secondary'];

storiesOf('Label', module)
  .addParameters({
    component: Label,
    componentSubtitle: 'Компонент для реализации лейблов',
  })
  .add('Examples', () => (
    <>
      <IntroComponent />
      <Grid>
        <GridRow>
          <GridCell horizontalAlign="center" size={12}>
            <Label>It`s a label component</Label>
          </GridCell>
          <GridCell horizontalAlign="center" size={12}>
            <p>
              Компонент может быть псевдо-интерактивным при передаче параметра
              <Highlighter isFilled>htmlFor</Highlighter>
              - id инпута к которому относится лейбл.
            </p>
            <div>
              <Label htmlFor="inputId">It`s a label with hover. Click me!</Label>
              <Input id="inputId" name="input" value="" variant="filled" />
            </div>
          </GridCell>
        </GridRow>
      </Grid>

      <h2>Label state</h2>
      <p>Компонент может иметь различные состояния.</p>
      <Grid>
        <GridDivider />
        <GridRow>
          <GridCell>
            <h5>
              <Highlighter color="accent" isFilled>
                disabled
              </Highlighter>
            </h5>
            <Label disabled>It`s a label disabled</Label>
          </GridCell>
          <GridCell>
            <h5>
              <Highlighter color="accent" isFilled>
                isError
              </Highlighter>
            </h5>
            <Label isError>It`s a label with error</Label>
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
          <GridCell>
            <Label size="big">It`s a label size big</Label>
          </GridCell>
          <GridCell>
            <Label>It`s a label size medium</Label>
          </GridCell>
          <GridCell>
            <Label size="small">It`s a label size small</Label>
          </GridCell>
        </GridRow>
      </Grid>

      <h2>
        <Highlighter>position</Highlighter> (top)
      </h2>
      <p>Компонент может иметь отступ с определенной стороны.</p>
      <Grid>
        <GridRow>
          <GridCell size={12}>
            <h5>top</h5>
            <Label htmlFor="top">It`s label with padding bottom</Label>
            <Checkbox checked id="top" name="checkbox-top" />
          </GridCell>
          <GridCell size={12}>
            <h5>left</h5>
            <div>
              <Label htmlFor="right" position="left">It`s label with padding right</Label>
              <Checkbox checked id="right" name="checkbox-left" />
            </div>
          </GridCell>
          <GridCell size={12}>
            <h5>right</h5>
            <div>
              <Checkbox checked id="left" name="checkbox-right" />
              <Label htmlFor="left" position="right">It`s label with padding left</Label>
            </div>
          </GridCell>
        </GridRow>
      </Grid>

      <h2>
        <Highlighter>themeColor</Highlighter>
      </h2>
      <p>Компонент может сменить тему на одну из четырех.</p>
      <Grid>
        <GridDivider />
        <GridRow>
          <GridCell size={12}>
            <Label themeColor="base">It`s a label variant base</Label>
          </GridCell>
          <GridCell size={12}>
            <Label themeColor="accent">It`s a label variant accent</Label>
          </GridCell>
          <GridCell size={12}>
            <Label themeColor="primary">It`s a label variant primary</Label>
          </GridCell>
          <GridCell size={12}>
            <Label themeColor="secondary">It`s a label variant secondary</Label>
          </GridCell>
        </GridRow>
      </Grid>
    </>
  ))
  .add('Knobs', () => (
    <StoriesItem>
      <span>блок контроля левого отступа</span>
      <Label
        disabled={boolean('disabled', false)}
        htmlFor={text('htmlFor', 'someId')}
        isError={boolean('isError', false)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        position={select('position', LABEL_POSITION, LABEL_POSITION[0])}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        size={select('size', LABEL_SIZE, LABEL_SIZE[0])}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        themeColor={select('colorTheme', LABEL_THEME, LABEL_THEME[0])}
      >
        {text('children', 'it`s label')}
      </Label>
      <span>блок контроля правого отступа</span>
    </StoriesItem>
  ));
