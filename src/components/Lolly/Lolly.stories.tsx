import * as React from "react"
import { Story, Meta } from "@storybook/react"

import Lolly from "./Lolly"

export default {
  title: "Lolly",
  component: Lolly
} as Meta

interface lollyInterface {
  lollyBottomColor: string
  lollyTopColor: string
  lollyMiddleColor: string
}


const Template: Story<lollyInterface> = (args) => ( <Lolly {...args} />
)

export const colorNames = Template.bind({})
colorNames.args = {
  lollyBottomColor: "red",
  lollyTopColor: "green",
  lollyMiddleColor: "blue"
}

export const withHexColors = Template.bind({})
withHexColors.args = {
  lollyTopColor: "#a799b7",
  lollyMiddleColor: "#fb3640",
  lollyBottomColor: "#fdca40"
}
