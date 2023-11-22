import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg"
const InfoIcon = (props: SvgProps) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke="#E5E5E5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 9A8 8 0 1 1 1 9a8 8 0 0 1 16 0ZM9 13V9"
    />
    <Circle cx={9} cy={6} r={1} fill="#E5E5E5" />
  </Svg>
)
export default InfoIcon
