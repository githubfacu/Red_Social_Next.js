import ExploreTrending from '@/components/explore/ExploreTrending';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Explore/ExploreTrending',
    component: ExploreTrending,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ExploreTrending>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      hashes: [{
        hash: 'Rocky', count: 1
      },
      {
        hash: 'Doc', count: 3
      },
    ]
    },
};

export const MoreThan2: Story = {
  args: {
    hashes: [{
      hash: 'Rocky', count: 1
    },
    {
      hash: 'Doc', count: 3
    },
    {
      hash: 'Nancy', count: 5
    }
  ]
  },
};

export const Empty: Story = {
  args: {
    hashes: []
  },
};