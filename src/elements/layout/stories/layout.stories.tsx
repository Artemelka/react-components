import React, { PropsWithChildren, ReactNode } from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { Layout } from '@artemelka/react-components';
import {
  Grid,
  GridCell,
  GridDivider,
  GridRow,
  Highlighter,
  StoriesItem,
} from '../../_story-components';
import { IntroComponent } from './_components/intro-component';
import {
  createList,
  createLorem,
  StoryAside,
  StoryFooter,
  StoryHeader,
  StoryMain,
} from './_components/story-layout-components';

storiesOf('Layout', module)
  .addParameters({
    component: Layout,
    componentSubtitle: 'Компонент для реализации лэйаута страницы',
  })
  .add('Examples', () => {
    const LayoutWrapper = (props: PropsWithChildren<{ height?: number }>) => (
      <div style={{ height: `${props.height || 300}px`, width: '100%' }}>
        {props.children}
      </div>
    );

    const PageContent = ({ count }: { count: number}) => (
      <>
        <h2>Page Content</h2>
        {createLorem(count)}
      </>
    );

    const AsideContent = ({ count }: { count: number}) => (
      <>
        <h2>Aside</h2>
        {createList(count)}
      </>
    );

    return (
      <>
        <IntroComponent />
        <Grid>
          <GridRow>
            <GridCell size={12}>
              <LayoutWrapper>
                <Layout
                  // asideElement={<StoryAside />}
                  // footerElement={<StoryFooter />}
                  // headerElement={<StoryHeader />}
                  // isAsideRight={boolean('isAsideRight', false)}
                  mainElement={<PageContent count={2} />}
                />
              </LayoutWrapper>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>asideElement</Highlighter>
        </h2>
        <p>Компонент может принимать элемент боковой панели.</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
              <LayoutWrapper>
                <Layout
                  asideElement={<AsideContent count={20} />}
                  mainElement={<PageContent count={2} />}
                />
              </LayoutWrapper>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>isAsideRight</Highlighter>
        </h2>
        <p>Элемент боковой панели может быть спозиционирован справа от контента.</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
              <LayoutWrapper>
                <Layout
                  asideElement={<AsideContent count={20} />}
                  isAsideRight
                  mainElement={<PageContent count={2} />}
                />
              </LayoutWrapper>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>isAsideSticky</Highlighter>
        </h2>
        <p>Элемент боковой панели может быть sticky</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
              <LayoutWrapper>
                <Layout
                  asideElement={<AsideContent count={10} />}
                  isAsideSticky
                  mainElement={<PageContent count={4} />}
                />
              </LayoutWrapper>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>footerElement</Highlighter>
        </h2>
        <p>Компонент принимает общий элемент footer.</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
              <LayoutWrapper height={500}>
                <Layout
                  asideElement={<AsideContent count={5} />}
                  footerElement={<StoryFooter count={2} />}
                  mainElement={<PageContent count={1} />}
                />
              </LayoutWrapper>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>headerElement</Highlighter>
        </h2>
        <p>Компонент принимает общий элемент header.</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
              <LayoutWrapper height={400}>
                <Layout
                  asideElement={<AsideContent count={5} />}
                  headerElement={<StoryHeader />}
                  mainElement={<PageContent count={1} />}
                />
              </LayoutWrapper>
            </GridCell>
          </GridRow>
        </Grid>
      </>
    );
  })
  .add('Knobs', () => (
    <StoriesItem>
      <div style={{ height: '400px', width: '100%' }}>
        <Layout
          asideElement={<StoryAside />}
          footerElement={<StoryFooter />}
          headerElement={<StoryHeader />}
          isAsideRight={boolean('isAsideRight', false)}
          isAsideSticky={boolean('isAsideSticky', false)}
          mainElement={<StoryMain />}
        />
      </div>
    </StoriesItem>
  ));
