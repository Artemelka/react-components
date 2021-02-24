import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import Delete from '@material-ui/icons/Delete';
import { Button } from '@artemelka/react-components';
import {
  Grid,
  GridCell,
  GridRow,
  Highlighter,
  StoriesItem,
} from '../../../_story-components';
import { IntroComponent } from './_components/intro-component';

const ALIGN_TEXT = ['left', 'center', 'right'];
const BUTTON_TYPES = ['button', 'submit', 'reset'];
const BUTTON_ROUND = [undefined, 'bottom', 'left', 'right', 'top'];
const BUTTON_SIZES = ['big', 'medium', 'small'];
const BUTTON_VARIANTS = ['base', 'filled', 'only-text'];
const THEME_COLOR = ['base', 'accent', 'primary', 'secondary', 'success', 'error'];

storiesOf('Button', module)
  .addParameters({
    component: Button,
    componentSubtitle: 'Компонент для реализации кнопок',
  })
  .add('Examples', () => (
    <>
      <IntroComponent />
      Вы можете передать:
      <Grid>
        <GridRow>
          <GridCell size={3} verticalAlign="between">
            <h5>только <Highlighter isFilled>value</Highlighter></h5>
            <Button value="text" />
          </GridCell>
          <GridCell size={3} verticalAlign="between">
            <h5>
              <Highlighter isFilled>icon</Highlighter>
              и
              <Highlighter isFilled>value</Highlighter>
            </h5>
            <Button icon={<Delete fontSize="inherit" />} value="icon and text" />
          </GridCell>
          <GridCell size={3} verticalAlign="between">
            <h5>только <Highlighter isFilled>icon</Highlighter></h5>
            <Button icon={<Delete fontSize="inherit" />} />
          </GridCell>
        </GridRow>
      </Grid>

      <h2>Button state</h2>
      <p>Компонент может иметь различные состояния.</p>
      <Grid>
        <h5>
          <Highlighter color="accent" isFilled>disabled</Highlighter>
        </h5>
        <GridRow>
          <GridCell size={3} verticalAlign="center">
            <Button
              disabled
              value="disabled"
            />
          </GridCell>
          <GridCell size={4} verticalAlign="center">
            <Button
              disabled
              icon={<Delete fontSize="inherit" />}
              value="disabled with icon"
            />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button
              disabled
              icon={<Delete fontSize="inherit" />}
            />
          </GridCell>
        </GridRow>
        <h5>
          <Highlighter color="accent" isFilled>active</Highlighter>
        </h5>
        <GridRow>
          <GridCell size={3} verticalAlign="center">
            <Button
              isActive
              value="active"
            />
          </GridCell>
          <GridCell size={4} verticalAlign="center">
            <Button
              icon={<Delete fontSize="inherit" />}
              isActive
              value="active with icon"
            />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button
              icon={<Delete fontSize="inherit" />}
              isActive
            />
          </GridCell>
        </GridRow>
      </Grid>

      <h2>
        <Highlighter>type</Highlighter> (button)
      </h2>
      <p>Компонент может быть одним из трех типов.</p>
      <Grid>
        <GridRow>
          <GridCell size={3}>
            <h5>button</h5>
            <Button
              value="button"
            />
          </GridCell>
          <GridCell size={3}>
            <h5>submit</h5>
            <Button
              type="submit"
              value="submit"
            />
          </GridCell>
          <GridCell size={3}>
            <h5>reset</h5>
            <Button
              type="reset"
              value="reset"
            />
          </GridCell>
        </GridRow>
      </Grid>

      <h2>
        <Highlighter>fullWidth</Highlighter> (false)
      </h2>
      <p>Компонент может занимать всю ширину родителя и позиционировать текст.</p>
      <Grid>
        <h4>
          <Highlighter isFilled>alignText</Highlighter> (center)
        </h4>
        <GridRow>
          <GridCell>
            <h5>left</h5>
            <Button
              alignText="left"
              icon={<Delete fontSize="inherit" />}
              isFullWidth
              value="text left"
            />
          </GridCell>
          <GridCell>
            <h5>center</h5>
            <Button
              icon={<Delete fontSize="inherit" />}
              isFullWidth
              value="text center"
            />
          </GridCell>
          <GridCell>
            <h5>right</h5>
            <Button
              alignText="right"
              icon={<Delete fontSize="inherit" />}
              isFullWidth
              value="text right"
            />
          </GridCell>
        </GridRow>
      </Grid>

      <h2>
        <Highlighter>size</Highlighter> (medium)
      </h2>
      <p>Компонент может быть одного из трех размеров.</p>
      <Grid>
        <h5>big</h5>
        <GridRow>
          <GridCell size={3}>
            <Button icon={<Delete fontSize="inherit" />} size="big" value="big" />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button icon={<Delete fontSize="inherit" />} size="big" variant="only-text" />
          </GridCell>
        </GridRow>
        <h5>medium</h5>
        <GridRow>
          <GridCell size={3}>
            <Button icon={<Delete fontSize="inherit" />} value="medium" />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button icon={<Delete fontSize="inherit" />} variant="only-text" />
          </GridCell>
        </GridRow>
        <h5>small</h5>
        <GridRow>
          <GridCell size={3}>
            <Button icon={<Delete fontSize="inherit" />} size="small" value="small" />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button icon={<Delete fontSize="inherit" />} size="small" variant="only-text" />
          </GridCell>
        </GridRow>
      </Grid>

      <h2>
        <Highlighter>variant</Highlighter> (base)
      </h2>
      <p>Компонент имеет три варианта отображения.</p>
      <Grid>
        <GridRow>
          <GridCell size={3}>
            <h5>base</h5>
            <Button value="base" />
          </GridCell>
          <GridCell size={3}>
            <h5>filled</h5>
            <Button value="filled" variant="filled" />
          </GridCell>
          <GridCell size={3}>
            <h5>only text</h5>
            <Button value="only text" variant="only-text" />
          </GridCell>
        </GridRow>
      </Grid>

      <h2>
        <Highlighter>themeColor</Highlighter>
      </h2>
      <p>Компонент может сменить тему на одну из пяти.</p>
      <Grid>
        <h5>accent</h5>
        <GridRow>
          <GridCell size={3}>
            <Button themeColor="accent" value="accent" />
          </GridCell>
          <GridCell size={3}>
            <Button icon={<Delete fontSize="inherit" />} themeColor="accent" value="accent" />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button icon={<Delete fontSize="inherit" />} themeColor="accent" />
          </GridCell>
        </GridRow>
        <GridRow>
          <GridCell size={3}>
            <Button themeColor="accent" value="accent" variant="filled" />
          </GridCell>
          <GridCell size={3}>
            <Button icon={<Delete fontSize="inherit" />} themeColor="accent" value="accent" variant="filled" />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button icon={<Delete fontSize="inherit" />} themeColor="accent" variant="filled" />
          </GridCell>
        </GridRow>
        <GridRow>
          <GridCell size={3}>
            <Button themeColor="accent" value="accent" variant="only-text" />
          </GridCell>
          <GridCell size={3}>
            <Button icon={<Delete fontSize="inherit" />} themeColor="accent" value="accent" variant="only-text" />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button icon={<Delete fontSize="inherit" />} themeColor="accent" variant="only-text" />
          </GridCell>
        </GridRow>
        <h5>primary</h5>
        <GridRow>
          <GridCell size={3}>
            <Button themeColor="primary" value="primary" />
          </GridCell>
          <GridCell size={3}>
            <Button icon={<Delete fontSize="inherit" />} themeColor="primary" value="primary" />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button icon={<Delete fontSize="inherit" />} themeColor="primary" />
          </GridCell>
        </GridRow>
        <GridRow>
          <GridCell size={3}>
            <Button themeColor="primary" value="primary" variant="filled" />
          </GridCell>
          <GridCell size={3}>
            <Button icon={<Delete fontSize="inherit" />} themeColor="primary" value="primary" variant="filled" />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button icon={<Delete fontSize="inherit" />} themeColor="primary" variant="filled" />
          </GridCell>
        </GridRow>
        <GridRow>
          <GridCell size={3}>
            <Button themeColor="primary" value="primary" variant="only-text" />
          </GridCell>
          <GridCell size={3}>
            <Button icon={<Delete fontSize="inherit" />} themeColor="primary" value="primary" variant="only-text" />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button icon={<Delete fontSize="inherit" />} themeColor="primary" variant="only-text" />
          </GridCell>
        </GridRow>
        <h5>secondary</h5>
        <GridRow>
          <GridCell size={3}>
            <Button themeColor="secondary" value="secondary" />
          </GridCell>
          <GridCell size={3}>
            <Button icon={<Delete fontSize="inherit" />} themeColor="secondary" value="secondary" />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button icon={<Delete fontSize="inherit" />} themeColor="secondary" />
          </GridCell>
        </GridRow>
        <GridRow>
          <GridCell size={3}>
            <Button themeColor="secondary" value="secondary" variant="filled" />
          </GridCell>
          <GridCell size={3}>
            <Button icon={<Delete fontSize="inherit" />} themeColor="secondary" value="secondary" variant="filled" />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button icon={<Delete fontSize="inherit" />} themeColor="secondary" variant="filled" />
          </GridCell>
        </GridRow>
        <GridRow>
          <GridCell size={3}>
            <Button themeColor="secondary" value="secondary" variant="only-text" />
          </GridCell>
          <GridCell size={3}>
            <Button icon={<Delete fontSize="inherit" />} themeColor="secondary" value="secondary" variant="only-text" />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button icon={<Delete fontSize="inherit" />} themeColor="secondary" variant="only-text" />
          </GridCell>
        </GridRow>
        <h5>success</h5>
        <GridRow>
          <GridCell size={3}>
            <Button themeColor="success" value="success" />
          </GridCell>
          <GridCell size={3}>
            <Button icon={<Delete fontSize="inherit" />} themeColor="success" value="success" />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button icon={<Delete fontSize="inherit" />} themeColor="success" />
          </GridCell>
        </GridRow>
        <GridRow>
          <GridCell size={3}>
            <Button themeColor="success" value="success" variant="filled" />
          </GridCell>
          <GridCell size={3}>
            <Button icon={<Delete fontSize="inherit" />} themeColor="success" value="success" variant="filled" />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button icon={<Delete fontSize="inherit" />} themeColor="success" variant="filled" />
          </GridCell>
        </GridRow>
        <GridRow>
          <GridCell size={3}>
            <Button themeColor="success" value="success" variant="only-text" />
          </GridCell>
          <GridCell size={3}>
            <Button icon={<Delete fontSize="inherit" />} themeColor="success" value="success" variant="only-text" />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button icon={<Delete fontSize="inherit" />} themeColor="success" variant="only-text" />
          </GridCell>
        </GridRow>
        <h5>error</h5>
        <GridRow>
          <GridCell size={3}>
            <Button themeColor="error" value="error" />
          </GridCell>
          <GridCell size={3}>
            <Button icon={<Delete fontSize="inherit" />} themeColor="error" value="error" />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button icon={<Delete fontSize="inherit" />} themeColor="error" />
          </GridCell>
        </GridRow>
        <GridRow>
          <GridCell size={3}>
            <Button themeColor="error" value="error" variant="filled" />
          </GridCell>
          <GridCell size={3}>
            <Button icon={<Delete fontSize="inherit" />} themeColor="error" value="error" variant="filled" />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button icon={<Delete fontSize="inherit" />} themeColor="error" variant="filled" />
          </GridCell>
        </GridRow>
        <GridRow>
          <GridCell size={3}>
            <Button themeColor="error" value="error" variant="only-text" />
          </GridCell>
          <GridCell size={3}>
            <Button icon={<Delete fontSize="inherit" />} themeColor="error" value="error" variant="only-text" />
          </GridCell>
          <GridCell size={3} verticalAlign="center">
            <Button icon={<Delete fontSize="inherit" />} themeColor="error" variant="only-text" />
          </GridCell>
        </GridRow>
      </Grid>
    </>
  ))
  .add('Knobs', () => (
    <StoriesItem>
      <Button
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        alignText={select('alignText', ALIGN_TEXT, ALIGN_TEXT[2])}
        disabled={boolean('disabled', false)}
        icon={<Delete fontSize="inherit" />}
        id={text('id', 'test')}
        isActive={boolean('isActive', false)}
        isFullWidth={boolean('isFullWidth', false)}
        onBlur={action('onBlur')}
        onClick={action('onClick')}
        onFocus={action('onFocus')}
        onKeyDown={action('onKeyDown')}
        onKeyPress={action('onKeyPress')}
        onKeyUp={action('onKeyUp')}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        roundSide={select('roundSide', BUTTON_ROUND, BUTTON_ROUND[0])}
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
    </StoriesItem>
  ));
