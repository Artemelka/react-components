import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import { Anchor, AnchorMouseEvent } from '@artemelka/react-components';
import {
  Grid,
  GridCell,
  GridRow,
  Group,
  GroupItem,
  StoriesItem,
} from '../../_story-components';
import { IntroComponent } from './_components/intro-component';

const PROJECT_LINK = 'https://github.com/Artemelka/react-components';
const REPO_LINK = 'https://github.com/Artemelka/';
const NPM_LINK = 'https://www.npmjs.com/package/@artemelka/react-components';

const TARGET_OPTIONS = [undefined, '_blank', '_self', '_parent', '_top'];

storiesOf('Anchor', module)
  .addParameters({
    component: Anchor,
    componentSubtitle: 'Компонент для реализации гиперссылок и псевдоссылок',
  })
  .add('Examples', () => {
    const Navigation = () => {
      const [activeName, setActiveName] = useState('');

      const handleClick = ({ href }: AnchorMouseEvent) => {
        setActiveName(href);
      };

      return (
        <Group>
          <GroupItem>
            <Anchor
              active={activeName === PROJECT_LINK}
              href={PROJECT_LINK}
              onClick={handleClick}
            >
              Project
            </Anchor>
          </GroupItem>
          <GroupItem>
            <Anchor
              active={activeName === REPO_LINK}
              href={REPO_LINK}
              onClick={handleClick}
            >
              Repo
            </Anchor>
          </GroupItem>
          <GroupItem>
            <Anchor
              active={activeName === NPM_LINK}
              href={NPM_LINK}
              onClick={handleClick}
            >
              NPM
            </Anchor>
          </GroupItem>
        </Group>
      );
    };

    return (
      <>
        <IntroComponent />
        <h2>Anchor state</h2>
        <Grid>
          <GridRow>
            <GridCell>
              <h5>base</h5>
              <Anchor href={REPO_LINK}>base link</Anchor>
            </GridCell>
            <GridCell>
              <h5>active</h5>
              <Anchor active href={REPO_LINK}>active link</Anchor>
            </GridCell>
            <GridCell>
              <h5>disabled</h5>
              <Anchor disabled href={REPO_LINK}>disabled link</Anchor>
            </GridCell>
          </GridRow>
        </Grid>
        <h2>target (_blank)</h2>
        <Grid>
          <GridRow>
            <GridCell verticalAlign="between">
              <h5>_blank (default)</h5>
              <Anchor
                href={NPM_LINK}
                target="_blank"
                withPreventedEvent={false}
              >
                link open in new window
              </Anchor>
            </GridCell>
            <GridCell verticalAlign="between">
              <h5>_parent</h5>
              <Anchor
                href={NPM_LINK}
                target="_parent"
                withPreventedEvent={false}
              >
                link open in this window
              </Anchor>
            </GridCell>
            <GridCell verticalAlign="between">
              <h5>_self (does not work in Storybook)</h5>
              <Anchor
                href={NPM_LINK}
                target="_self"
                withPreventedEvent={false}
              >
                link open in the same frame
              </Anchor>
            </GridCell>
          </GridRow>
        </Grid>
        <h2>Navigation example</h2>
        <Grid>
          <GridRow>
            <GridCell size={12}>
              <Navigation />
            </GridCell>
          </GridRow>
        </Grid>
      </>
    );
  })
  .add('Knob', () => (
    <StoriesItem>
      <p style={{ color: 'var(--baseColor)' }}>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper,
        nisl in ultricies consectetur, sapien dui vestibulum mauris, ${' '}`}
        <Anchor
          active={boolean('active', false)}
          disabled={boolean('disabled', false)}
          download={boolean('download', false)}
          href={text('href', PROJECT_LINK)}
          id={text('id', 'link')}
          onBlur={action('onBlur')}
          onClick={action('onClick')}
          onFocus={action('onFocus')}
          onKeyPress={action('onKeyPress')}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          target={select('target', TARGET_OPTIONS, TARGET_OPTIONS[0])}
          title={text('title', 'this is link')}
          withPreventedEvent={boolean('withPreventedEvent', true)}
        >
          GitHub
        </Anchor>
        {`${' '} vitae sagittis turpis sapien quis felis. Phasellus venenatis accumsan urna nec imperdiet.`}
      </p>
    </StoriesItem>
  ));
