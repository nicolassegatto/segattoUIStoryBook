import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@segatto-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/nicolassegatto.png',
    alt: 'Avatar image',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
