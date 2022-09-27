import type { Meta, Story } from '@storybook/react';

import { PageLayout } from '.';
import { PageLayoutProps } from './types';

import { Separator } from '$/components/Separator';
import { Text } from '$/components/Text';

export default {
  component: PageLayout,
  title: 'Layout/PageLayout',
} as Meta;

const Template: Story<PageLayoutProps> = (args) => (
  <PageLayout {...args}>
    <Text tag="h1" variant="title1">
      Good morning!
    </Text>
    <Separator />
  </PageLayout>
);

export const Default = Template.bind({});
