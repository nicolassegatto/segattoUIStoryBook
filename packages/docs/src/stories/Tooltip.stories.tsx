import type { StoryObj, Meta } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@segatto-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: (
      <Box
        css={{
          fontFamily: 'Roboto',
          color: '$gray100',
          border: 'solid 2px $gray400',
        }}
      >
        over here
      </Box>
    ),
    content: 'This is a Tooltip',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '$20',
            background: '$gray500',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
