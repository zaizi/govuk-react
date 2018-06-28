import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import { GridRow, H2, Paragraph } from 'govuk-react';

import GridCol from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Layout/GridCol', module);
const examples = storiesOf('Layout/GridCol/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <GridRow>
    <GridCol columnOneHalf>
      <H2>Half column</H2>
      <Paragraph>
        This guide shows how to make your service look consistent with the rest of
        GOV.UK. It includes example code and guidance for layout, typography,
        colour, images, icons, forms, buttons and data.
      </Paragraph>
    </GridCol>
    <GridCol columnOneHalf>
      <H2>Half column</H2>
      <Paragraph>
        This guide shows how to make your service look consistent with the rest of
        GOV.UK. It includes example code and guidance for layout, typography,
        colour, images, icons, forms, buttons and data.
      </Paragraph>
    </GridCol>
  </GridRow>
));

examples.add('Column Halves', () => (
  <Fragment>
    <GridRow>
      <GridCol hideContent columnOneHalf>
        <p>content</p>
      </GridCol>
      <GridCol hideContent columnOneHalf>
        <p>content</p>
      </GridCol>
    </GridRow>
  </Fragment>
));

examples.add('Column Thirds', () => (
  <Fragment>
    <GridRow>
      <GridCol hideContent columnOneThird>
        <p>content</p>
      </GridCol>
      <GridCol hideContent columnOneThird>
        <p>content</p>
      </GridCol>
      <GridCol hideContent columnOneThird>
        <p>content</p>
      </GridCol>
    </GridRow>
  </Fragment>
));

examples.add('Column Two Thirds / One Third', () => (
  <Fragment>
    <GridRow>
      <GridCol hideContent columnTwoThirds>
        <p>content</p>
      </GridCol>
      <GridCol hideContent columnOneThird>
        <p>content</p>
      </GridCol>
    </GridRow>
  </Fragment>
));

examples.add('Column One Third / Two Thirds', () => (
  <Fragment>
    <GridRow>
      <GridCol hideContent columnOneThird>
        <p>content</p>
      </GridCol>
      <GridCol hideContent columnTwoThirds>
        <p>content</p>
      </GridCol>
    </GridRow>
  </Fragment>
));

examples.add('Quarters', () => (
  <Fragment>
    <GridRow>
      <GridCol hideContent columnOneQuarter>
        <p>content</p>
      </GridCol>
      <GridCol hideContent columnOneQuarter>
        <p>content</p>
      </GridCol>
      <GridCol hideContent columnOneQuarter>
        <p>content</p>
      </GridCol>
      <GridCol hideContent columnOneQuarter>
        <p>content</p>
      </GridCol>
    </GridRow>
  </Fragment>
));
