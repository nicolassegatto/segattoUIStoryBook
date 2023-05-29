import * as TooltipElement from '@radix-ui/react-tooltip'
import { ReactNode, ComponentProps } from 'react'
import { TooltipArrow, TooltipContent } from './styles'

export type TooltipProps = ComponentProps<typeof TooltipElement.Root> & {
  content: string | ReactNode
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  return (
    <TooltipElement.Provider>
      <TooltipElement.Root {...props}>
        <TooltipElement.Trigger asChild>{children}</TooltipElement.Trigger>
        <TooltipElement.Portal>
          <TooltipContent>
            <TooltipArrow />
            {content}
          </TooltipContent>
        </TooltipElement.Portal>
      </TooltipElement.Root>
    </TooltipElement.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
