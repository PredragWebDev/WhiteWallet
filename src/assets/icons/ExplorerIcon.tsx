import { TabIconProps } from "@/components/TabBar/TabBarIcon"
import theme from "@/constants/theme"
import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ExploerIcon = ({focused, ...props}: TabIconProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke={focused ? theme.colors.white : theme.colors.grey}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35"
    />
  </Svg>
)
export default ExploerIcon