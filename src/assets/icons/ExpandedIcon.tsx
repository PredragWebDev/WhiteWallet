import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ExpandedIcon = (props: SvgProps) => (
  <Svg
    width={9}
    height={9}
    fill="none"
    {...props}
  >
    <Path fill="#C4C4C4" d="M8.9 8.9.982 8.33 8.33.983 8.899 8.9Z" />
  </Svg>
)
export default ExpandedIcon
