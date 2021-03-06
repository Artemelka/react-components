import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import { Anchor, AnchorMouseEvent } from '@artemelka/react-components';
import {
  Grid,
  GridCell,
  GridDivider,
  GridRow,
  Group,
  GroupItem,
  Highlighter,
  StoriesItem,
} from '../../_story-components';
import { IntroComponent } from './_components/intro-component';

const PROJECT_LINK = 'https://github.com/Artemelka/react-components';
const REPO_LINK = 'https://github.com/Artemelka/';
const NPM_LINK = 'https://www.npmjs.com/package/@artemelka/react-components';

const TARGET_OPTIONS = [undefined, '_blank', '_self', '_parent', '_top'];
const ANCHOR_THEME = [undefined, 'base', 'accent', 'primary', 'secondary', 'success', 'error'];
const ANCHOR_DECORATION = [undefined, 'none', 'line-through', 'overline', 'underline', 'inherit'];

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
              active={activeName === 'home'}
              href="home"
              onClick={handleClick}
            >
              Home
            </Anchor>
          </GroupItem>
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
          <GroupItem>
            <Anchor
              active={activeName === 'contacts'}
              href="contacts"
              onClick={handleClick}
            >
              Contacts
            </Anchor>
          </GroupItem>
        </Group>
      );
    };

    return (
      <>
        <IntroComponent />
        <Grid>
          <GridRow>
            <GridCell horizontalAlign="center" size={12}>
              <Navigation />
            </GridCell>
          </GridRow>
          <p>
            Если вам необходимо нативное поведение ссылки - задайте
            <Highlighter color="error" isFilled>withPreventedEvent = false</Highlighter>
          </p>
        </Grid>

        <h2>Anchor state</h2>
        <p>Компонент может иметь различные состояния.</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell>
              <h5>
                <Highlighter color="accent" isFilled>active</Highlighter>
              </h5>
              <Anchor active href={REPO_LINK}>active link</Anchor>
            </GridCell>
            <GridCell>
              <h5>
                <Highlighter color="accent" isFilled>disabled</Highlighter>
              </h5>
              <Anchor disabled href={REPO_LINK}>disabled link</Anchor>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>textDecoration</Highlighter> (none)
        </h2>
        <p>Компонент может иметь оформление текста.</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell>
              <Anchor href="#" textDecoration="line-through">line-through</Anchor>
            </GridCell>
            <GridCell>
              <Anchor href="#" textDecoration="overline">overline</Anchor>
            </GridCell>
            <GridCell>
              <Anchor href="#" textDecoration="underline">underline</Anchor>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>target</Highlighter> (_blank)
        </h2>
        <p>
          По умолчанию, в браузере при переходе по ссылке документ открывается в текущем
          окне или фрейме. При необходимости, это условие может быть изменено этим атрибутом.
        </p>
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell verticalAlign="between">
              <h5>_blank</h5>
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

        <h2>
          <Highlighter>title</Highlighter>
        </h2>
        <p>Компонент может показывать подсказку при задержке на нем наведения.</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell>
              <Anchor
                href={NPM_LINK}
                target="_blank"
                title="It`s title"
              >
                link with title
              </Anchor>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>themeColor</Highlighter>
        </h2>
        <p>Компонент может сменить тему на одну из пяти.</p>
        <Grid>
          <GridRow>
            <GridDivider />
            <GridCell>
              <h5>base</h5>
              <Anchor href="#" themeColor="base">
                base theme link
              </Anchor>
            </GridCell>
            <GridCell>
              <h5>primary</h5>
              <Anchor href="#" themeColor="primary">
                primary theme link
              </Anchor>
            </GridCell>
            <GridCell>
              <h5>secondary</h5>
              <Anchor href="#" themeColor="secondary">
                secondary theme link
              </Anchor>
            </GridCell>
            <GridCell>
              <h5>success</h5>
              <Anchor href="#" themeColor="success">
                success theme link
              </Anchor>
            </GridCell>
            <GridCell>
              <h5>error</h5>
              <Anchor href="#" themeColor="error">
                error theme link
              </Anchor>
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
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          textDecoration={select('textDecoration', ANCHOR_DECORATION, ANCHOR_DECORATION[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          themeColor={select('themeColor', ANCHOR_THEME, ANCHOR_THEME[0])}
          title={text('title', 'this is link')}
          withPreventedEvent={boolean('withPreventedEvent', true)}
        >
          GitHub
        </Anchor>
        {`${' '} vitae sagittis turpis sapien quis felis. Phasellus venenatis accumsan urna nec imperdiet.`}
      </p>
    </StoriesItem>
  ));
