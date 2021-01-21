import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import Delete from '@material-ui/icons/Delete';
import { Button } from '@artemelka/react-components';
import {
  GridCell,
  GridItem,
  GridRow,
  StoriesItem,
} from '../../_story-components';
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
    <StoriesItem>
      <IntroComponent />
      <StoriesItem>
        <h2>Button mode</h2>
        <p>Компонент может быть:</p>
        <GridRow>
          <GridCell>
            <h5>текст</h5>
            <Button value="text" />
          </GridCell>
          <GridCell>
            <h5>текст с иконкой</h5>
            <Button icon={<Delete fontSize="inherit" />} value="text and icon" />
          </GridCell>
          <GridCell>
            <h5>иконка</h5>
            <Button icon={<Delete fontSize="inherit" />} />
          </GridCell>
        </GridRow>
        <h2>Button type</h2>
        <p>Компонент может быть одним из трех типов. (button)</p>
        <GridRow>
          <GridCell>
            <h5>Type: button</h5>
            <Button
              value="button"
            />
          </GridCell>
          <GridCell>
            <h5>Type: submit</h5>
            <Button
              type="submit"
              value="submit"
            />
          </GridCell>
          <GridCell>
            <h5>Type: reset</h5>
            <Button
              type="reset"
              value="reset"
            />
          </GridCell>
        </GridRow>
        <h2>Button state</h2>
        <p>Компонент может иметь различные состояния</p>
        <GridRow>
          <GridCell>
            <h5>disabled</h5>
            <Button
              disabled
              value="disabled"
            />
          </GridCell>
          <GridCell>
            <h5>disabled text and icon</h5>
            <Button
              disabled
              icon={<Delete fontSize="inherit" />}
              value="disabled with icon"
            />
          </GridCell>
          <GridCell>
            <h5>disabled only icon</h5>
            <Button
              disabled
              icon={<Delete fontSize="inherit" />}
            />
          </GridCell>
          <GridCell>
            <h5>active text</h5>
            <Button
              isActive
              value="active"
            />
          </GridCell>
          <GridCell>
            <h5>active text and icon</h5>
            <Button
              icon={<Delete fontSize="inherit" />}
              isActive
              value="active"
            />
          </GridCell>
          <GridCell>
            <h5>active icon</h5>
            <Button
              icon={<Delete fontSize="inherit" />}
              isActive
            />
          </GridCell>
        </GridRow>
        <h2>Button full width</h2>
        <p>Компонент может занимать всю ширину родителя и позиционировать текст.</p>
        <GridRow>
          <GridCell>
            <h5>align text: left</h5>
            <Button
              alignText="left"
              isFullWidth
              value="text left"
            />
          </GridCell>
          <GridCell>
            <h5>align text: center (default)</h5>
            <Button
              isFullWidth
              value="text center"
            />
          </GridCell>
          <GridCell>
            <h5>align text: right</h5>
            <Button
              alignText="right"
              isFullWidth
              value="text right"
            />
          </GridCell>
          <GridCell>
            <h5>align text: left</h5>
            <Button
              alignText="left"
              icon={<Delete fontSize="inherit" />}
              isFullWidth
              value="text left"
            />
          </GridCell>
          <GridCell>
            <h5>align text: center (default)</h5>
            <Button
              icon={<Delete fontSize="inherit" />}
              isFullWidth
              value="text center"
            />
          </GridCell>
          <GridCell>
            <h5>align text: right</h5>
            <Button
              alignText="right"
              icon={<Delete fontSize="inherit" />}
              isFullWidth
              value="text right"
            />
          </GridCell>
        </GridRow>
        <h2>Button size</h2>
        <p>Компонент может быть одного из трех размеров. (middle)</p>
        <GridRow>
          <GridCell>
            <h5>Size: small</h5>
            <Button icon={<Delete fontSize="inherit" />} size="small" value="small" />
          </GridCell>
          <GridCell>
            <h5>Size: medium</h5>
            <Button icon={<Delete fontSize="inherit" />} value="medium" />
          </GridCell>
          <GridCell>
            <h5>Size: big</h5>
            <Button icon={<Delete fontSize="inherit" />} size="big" value="big" />
          </GridCell>
          <GridCell>
            <h5>Size: small</h5>
            <Button icon={<Delete fontSize="inherit" />} size="small" variant="only-text" />
          </GridCell>
          <GridCell>
            <h5>Size: medium</h5>
            <Button icon={<Delete fontSize="inherit" />} variant="only-text" />
          </GridCell>
          <GridCell>
            <h5>Size: big</h5>
            <Button icon={<Delete fontSize="inherit" />} size="big" variant="only-text" />
          </GridCell>
        </GridRow>
        <h2>Button variant</h2>
        <p>Компонент имеет три варианта отображения. (base)</p>
        <GridRow>
          <GridCell>
            <h5>Variant: base</h5>
            <Button value="base" />
          </GridCell>
          <GridCell>
            <h5>Variant: filled</h5>
            <Button value="filled" variant="filled" />
          </GridCell>
          <GridCell>
            <h5>Variant: only text</h5>
            <Button value="only text" variant="only-text" />
          </GridCell>
        </GridRow>
        <h2>Button theme color</h2>
        <p>Компонент может сменить тему на одну из пяти.</p>
        <h5>base</h5>
        <GridRow>
          <GridItem>
            <Button themeColor="accent" value="accent" />
          </GridItem>
          <GridItem>
            <Button themeColor="primary" value="primary" />
          </GridItem>
          <GridItem>
            <Button themeColor="secondary" value="secondary" />
          </GridItem>
          <GridItem>
            <Button themeColor="success" value="success" />
          </GridItem>
          <GridItem>
            <Button themeColor="error" value="error" />
          </GridItem>
        </GridRow>
        <h5>filled</h5>
        <GridRow>
          <GridItem>
            <Button themeColor="accent" value="accent" variant="filled" />
          </GridItem>
          <GridItem>
            <Button themeColor="primary" value="primary" variant="filled" />
          </GridItem>
          <GridItem>
            <Button themeColor="secondary" value="secondary" variant="filled" />
          </GridItem>
          <GridItem>
            <Button themeColor="success" value="success" variant="filled" />
          </GridItem>
          <GridItem>
            <Button themeColor="error" value="error" variant="filled" />
          </GridItem>
        </GridRow>
        <h5>only-text</h5>
        <GridRow>
          <GridItem>
            <Button themeColor="accent" value="accent" variant="only-text" />
          </GridItem>
          <GridItem>
            <Button themeColor="primary" value="primary" variant="only-text" />
          </GridItem>
          <GridItem>
            <Button themeColor="secondary" value="secondary" variant="only-text" />
          </GridItem>
          <GridItem>
            <Button themeColor="success" value="success" variant="only-text" />
          </GridItem>
          <GridItem>
            <Button themeColor="error" value="error" variant="only-text" />
          </GridItem>
        </GridRow>
        <h5>base</h5>
        <GridRow>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="accent" value="accent" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="primary" value="primary" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="secondary" value="secondary" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="success" value="success" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="error" value="error" />
          </GridItem>
        </GridRow>
        <h5>filled</h5>
        <GridRow>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="accent" value="accent" variant="filled" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="primary" value="primary" variant="filled" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="secondary" value="secondary" variant="filled" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="success" value="success" variant="filled" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="error" value="error" variant="filled" />
          </GridItem>
        </GridRow>
        <h5>only-text</h5>
        <GridRow>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="accent" value="accent" variant="only-text" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="primary" value="primary" variant="only-text" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="secondary" value="secondary" variant="only-text" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="success" value="success" variant="only-text" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="error" value="error" variant="only-text" />
          </GridItem>
        </GridRow>
        <h5>base</h5>
        <GridRow>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="accent" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="primary" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="secondary" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="success" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="error" />
          </GridItem>
        </GridRow>
        <h5>filled</h5>
        <GridRow>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="accent" variant="filled" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="primary" variant="filled" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="secondary" variant="filled" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="success" variant="filled" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="error" variant="filled" />
          </GridItem>
        </GridRow>
        <h5>only-text</h5>
        <GridRow>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="accent" variant="only-text" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="primary" variant="only-text" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="secondary" variant="only-text" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="success" variant="only-text" />
          </GridItem>
          <GridItem>
            <Button icon={<Delete fontSize="inherit" />} themeColor="error" variant="only-text" />
          </GridItem>
        </GridRow>
      </StoriesItem>
    </StoriesItem>
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
