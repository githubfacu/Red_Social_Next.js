import UserTabs from '@/components/users/UserTabs';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Users/UserTabs',
    component: UserTabs,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof UserTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const messages = [
    {
      user: 'Raccoon',
      username: 'RockyRaccoon',
      message: `"Danny boy, this is a showdown"`,
      repliesCount: 1
    },
    {
      user: 'Doc',
      username: 'Doc',
      message: `"Rocky"`,
      repliesCount: 6
    }
]

const replies = [
    {
      user: 'Rocky',
      username: 'RockyRaccoon',
      message: `"Danny boy"`,
      repliesCount: 13
    },
    {
      user: 'Doctor',
      username: 'Doc',
      message: `"Rocky, you met your match"`,
      repliesCount: 16
    }
  ]

export const Primary: Story = {
    args: {
          messages: messages,
          replies: replies
    },
  };