import { TabIconProps } from "@/components/TabBar/TabBarIcon"
import theme from "@/constants/theme"
import * as React from "react"
import Svg, {
  Circle,
  G,
  Path,
  Defs,
  ClipPath,
} from "react-native-svg"
const SendIcon = ({focused, ...props}: TabIconProps) => (
  <Svg
    width={props.width ? props.width: 30}
    height={props.height ? props.height : 28}
    viewBox="0, 0, 30, 28"
    fill="none"
    style={[{
      marginTop: -5,
      marginLeft: 10
    }, props.style]}
    {...props}
  >
    <Circle cx={9.923} cy={17.277} r={8.923} stroke={focused ? theme.colors.white : theme.colors.grey} strokeWidth={2} />
    <G clipPath="url(#a)">
      <Path
        fill={focused ? theme.colors.white : theme.colors.grey}
        d="m21.164 15.242-1.993-2.425-6.545 5.38-2.99-3.637 6.546-5.38-1.994-2.425 10.034-1.137-3.058 9.624Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M29.143 9.699 21.17 0 6.21 12.298l7.972 9.699z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SendIcon
