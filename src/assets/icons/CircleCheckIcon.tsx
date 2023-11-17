import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"

interface Props {
  props?: SvgProps;
  color?: string
}
const CircleCheckIcon = ({props, color = "#74B64A"}: Props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <G fill={color} clipPath="url(#a)">
      <Path d="M8 16c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8ZM8 1.333A6.674 6.674 0 0 0 1.333 8 6.674 6.674 0 0 0 8 14.667 6.674 6.674 0 0 0 14.667 8 6.674 6.674 0 0 0 8 1.333Z" />
      <Path d="M7.333 10.667a.664.664 0 0 1-.37-.112l-2-1.334a.667.667 0 0 1 .74-1.11l1.502 1 2.95-3.539a.666.666 0 1 1 1.024.854l-3.333 4a.665.665 0 0 1-.513.24Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default CircleCheckIcon