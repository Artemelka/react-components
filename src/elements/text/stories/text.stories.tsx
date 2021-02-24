import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { Text } from '@artemelka/react-components';
import {
  Grid,
  GridDivider,
  GridCell,
  GridRow,
  Highlighter,
  StoriesItem,
} from '../../../_story-components';
import { IntroComponent } from './_components/intro-component';

const ALIGN: Array<string> = ['center', 'left', 'right'];
const TAG_NAMES = ['span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
const FONT_WEIGHT = ['light', 'regular', 'medium', 'semi-bold', 'bold'];

storiesOf('Text', module)
  .addParameters({
    component: Text,
    componentSubtitle: 'Компонент для отображения стилизованного текста',
  })
  .add('Examples', () => (
    <>
      <IntroComponent />

      <h2>
        <Highlighter>fontWeight</Highlighter> (regular)
      </h2>
      <p>
        Компонент может менять начертание шрифта
        (
        <Highlighter color="error">
          ваш шрифт должен поддерживать эти начертания
        </Highlighter>
        ).
      </p>
      <Grid>
        <GridDivider />
        <GridRow>
          <GridCell>
            <Text fontWeight="light">
              it`s light
            </Text>
          </GridCell>
          <GridCell>
            <Text fontWeight="regular">
              it`s regular
            </Text>
          </GridCell>
          <GridCell>
            <Text fontWeight="medium">
              it`s medium
            </Text>
          </GridCell>
          <GridCell>
            <Text fontWeight="semi-bold">
              it`s semi-bold
            </Text>
          </GridCell>
          <GridCell>
            <Text fontWeight="bold">
              it`s bold
            </Text>
          </GridCell>
        </GridRow>
      </Grid>

      <h2>
        <Highlighter>upper</Highlighter> (false)
      </h2>
      <p>Компонент может трансформировать текст в UPPERCASE.</p>
      <Grid>
        <GridDivider />
        <GridRow>
          <GridCell size={12}>
            <Text upper>
              Almost before we knew it, we had left the ground.
            </Text>
          </GridCell>
        </GridRow>
      </Grid>

      <h2>
        <Highlighter>tagName</Highlighter> (span)
      </h2>
      <p>Компонент может менять тэг.</p>
      <Grid>
        <GridDivider />
        <GridRow>
          <GridCell verticalAlign="center">
            <Text tagName="h1">
              it`s Heading1
            </Text>
          </GridCell>
          <GridCell verticalAlign="center">
            <Text tagName="h2">
              it`s Heading2
            </Text>
          </GridCell>
          <GridCell verticalAlign="center">
            <Text tagName="h3">
              it`s Heading3
            </Text>
          </GridCell>
          <GridCell verticalAlign="center">
            <Text tagName="h4">
              it`s Heading4
            </Text>
          </GridCell>
          <GridCell verticalAlign="center">
            <Text tagName="h5">
              it`s Heading5
            </Text>
          </GridCell>
          <GridCell verticalAlign="center">
            <Text tagName="h6">
              it`s Heading6
            </Text>
          </GridCell>
          <GridCell verticalAlign="center">
            <Text tagName="p">
              it`s paragraph
            </Text>
          </GridCell>
          <GridCell verticalAlign="center">
            <Text tagName="span">
              it`s span
            </Text>
          </GridCell>
        </GridRow>
      </Grid>

      <h2>
        <Highlighter>align</Highlighter> (left)
      </h2>
      <p>
        Компонент может выравнивать текст по горизонтали
        (
        <Highlighter color="error">
          только если
          <Highlighter isFilled>tagName</Highlighter>
          блочный
        </Highlighter>
        ).
      </p>
      <Grid>
        <GridDivider />
        <GridRow>
          <GridCell horizontalAlign="stretch" size={12}>
            <Text align="left" tagName="p">
              Almost before we knew it, we had left the ground.
            </Text>
          </GridCell>
          <GridCell horizontalAlign="stretch" size={12}>
            <Text align="center" tagName="p">
              Almost before we knew it, we had left the ground.
            </Text>
          </GridCell>
          <GridCell horizontalAlign="stretch" size={12}>
            <Text align="right" tagName="p">
              Almost before we knew it, we had left the ground.
            </Text>
          </GridCell>
        </GridRow>
      </Grid>
    </>
  ))
  .add('Knobs', () => (
    <StoriesItem>
      <Text
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        align={select('align', ALIGN, ALIGN[2])}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        fontWeight={select('fontSize', FONT_WEIGHT, FONT_WEIGHT[0])}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        tagName={select('tagName', TAG_NAMES, TAG_NAMES[0])}
        upper={boolean('upper', false)}
      >
        Almost before we knew it, we had left the ground.
      </Text>
      <p style={{ color: 'red', marginTop: '80px' }}>
        <Text>Компонент наследует цвет от родителя</Text>
      </p>
    </StoriesItem>
  ));
