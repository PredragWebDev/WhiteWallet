import { TabIconProps } from "@/components/TabBar/TabBarIcon"
import theme from "@/constants/theme"
import * as React from "react"
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg"
const ReceiveIcon = ({focused, ...props}: TabIconProps) => (
  <Svg
    width={props.width ? props.width : 26}
    height={props.height ? props.height: 24}
    viewBox="0, 0, 26, 24"
    style={{
      marginLeft: -10,
      marginTop: -3
    }}
    fill="none"
    {...props}
  >
    <Path
      stroke={focused ? theme.colors.white : theme.colors.grey}
      strokeWidth={2}
      d="M25 13.779c0 4.95-4.16 9.021-9.364 9.021-5.204 0-9.365-4.07-9.365-9.021 0-4.95 4.16-9.021 9.364-9.021 5.204 0 9.365 4.07 9.365 9.021Z"
    />
    <G clipPath="url(#a)">
      <Path
        fill={focused ? theme.colors.white : theme.colors.grey}
        d="m15.652 6.796-2.074 2.44-6.812-5.413-3.111 3.66 6.812 5.413-2.074 2.44 10.442 1.143-3.183-9.683Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="m23.956 12.373-8.296 9.76L.089 9.76 8.385 0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ReceiveIcon
