import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { Container } from './container';
import { withKnobs } from '@storybook/addon-knobs';
// ToDo: need update storybook to version ^6.0.0
// @ts-ignore
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addDecorator(withKnobs);
addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    }
});


addDecorator((story: any) => <Container story={story}/>);

const req = require.context('../src', true, /\.stories\.(tsx?$|mdx)/);

function loadStories() {
    const stories = req
        .keys()
        .map(req)
        .filter((req: any) => Boolean(req.default));

    return stories;
}

configure(loadStories, module);
