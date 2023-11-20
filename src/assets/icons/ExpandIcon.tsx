import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ExpandIcon = (props: SvgProps) => (
  <Svg
    width={6}
    height={12}
    fill="none"
    {...props}
  >
    <Path fill="#C4C4C4" d="m6 6-6 5.196V.804L6 6Z" />
  </Svg>
)
export default ExpandIcon
