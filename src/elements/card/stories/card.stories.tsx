import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';
import { Card, ButtonMouseEvent } from '@artemelka/react-components';
import {
  Grid,
  GridCell,
  GridDivider,
  GridRow,
  Highlighter,
} from '../../_story-components';
import { IntroComponent } from './_components/intro-component';

const CARD_THEME = [undefined, 'base', 'accent', 'primary', 'secondary', 'error'];
const LOREM_LONG = `Lorem Ipsum - это текст-рыба, часто используемый в печати
 и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на
 латинице с начала XVI века.`;

storiesOf('Card', module)
  .addParameters({
    component: Card,
    componentSubtitle: 'Компонент для реализации инфокарточек',
  })
  .add('Examples', () => {
    const handleClick = ({ id }: ButtonMouseEvent) => false;

    return (
      <>
        <IntroComponent />
        <Grid>
          <GridRow>
            <GridCell horizontalAlign="center" size={12}>
              <Card
                buttonLabel="click me"
                content={LOREM_LONG}
                id="intro"
                onClick={handleClick}
                positionIndex="1"
                title="It`s title"
              />
            </GridCell>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>themeColor</Highlighter>
        </h2>
        <p>Компонент может сменить тему на одну из пяти.</p>
        <Grid>
          <GridDivider />
          <h4>accent</h4>
          <GridRow>
            <GridCell size={5}>
              <Card
                buttonLabel="bay now"
                content={LOREM_LONG}
                id="theme-accent"
                onClick={handleClick}
                positionIndex="1"
                themeColor="accent"
                title="It`s title"
              />
            </GridCell>
            <GridCell size={2} />
          </GridRow>
          <GridDivider />
          <h4>primary</h4>
          <GridRow>
            <GridCell size={5}>
              <Card
                buttonLabel="open"
                content={LOREM_LONG}
                id="theme-primary"
                onClick={handleClick}
                positionIndex="2"
                themeColor="primary"
                title="It`s title"
              />
            </GridCell>
          </GridRow>
          <GridDivider />
          <h4>secondary</h4>
          <GridRow>
            <GridCell size={5}>
              <Card
                buttonLabel="more..."
                content={LOREM_LONG}
                id="theme-secondary"
                onClick={handleClick}
                positionIndex="3"
                themeColor="secondary"
                title="It`s title"
              />
            </GridCell>
          </GridRow>
          <GridDivider />
          <h4>error</h4>
          <GridRow>
            <GridCell size={5}>
              <Card
                buttonLabel="read more"
                content={LOREM_LONG}
                id="theme-error"
                onClick={handleClick}
                positionIndex="4"
                themeColor="error"
                title="It`s title"
              />
            </GridCell>
          </GridRow>
        </Grid>
      </>
    );
  })
  .add('Knobs', () => (
    <Grid>
      <GridRow>
        <GridCell size={12}>
          <Card
            buttonLabel={text('buttonLabel', 'click me')}
            content={text('content', LOREM_LONG)}
            id={text('id', 'cardButton')}
            onClick={action('onClick')}
            positionIndex={text('positionIndex', '1')}
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            themeColor={select('themeColor', CARD_THEME, CARD_THEME[0])}
            title={text('title', 'title')}
          />
        </GridCell>
      </GridRow>
    </Grid>
  ));
