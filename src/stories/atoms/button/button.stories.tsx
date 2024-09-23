import { Button } from '../../../components/atoms/buttons/button/index'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'atoms/Buttons',
  component: Button
}

type Story = StoryObj<typeof Button>
export default meta

export const NormalButton: Story = {
  args: {
    btnText: 'Small Button',
    btnType: 'primary',
    type: 'button',
    disable: false,
    onClick: () => console.log("Hello")
  }
}
