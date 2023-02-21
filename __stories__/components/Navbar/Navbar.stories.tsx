import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "@/components/Navbar/Navbar";
import { Button } from "../../Button";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {}
