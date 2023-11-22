import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const StackMinusIcon = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path fill="#252526" stroke="#fff" d="M4.5.5h11v11h-11z" />
    <Path fill="#252526" stroke="#fff" d="M2.5 2.5h11v11h-11z" />
    <Path fill="#252526" stroke="#fff" d="M.5 4.5h11v11H.5z" />
    <Path fill="#5D98CC" d="M3 9h6v2H3z" />
  </Svg>
)
export default StackMinusIcon
