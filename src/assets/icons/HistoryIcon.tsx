import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const HistoryIcon = (props: SvgProps) => (
  <Svg
    width={19}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#E5E5E5"
      fillRule="evenodd"
      d="M10.357 0a7.715 7.715 0 0 0-7.715 7.714H.071l3.334 3.335.06.12 3.463-3.455H4.357c0-3.317 2.683-6 6-6s6 2.683 6 6-2.683 6-6 6a5.952 5.952 0 0 1-4.235-1.765l-1.217 1.217a7.675 7.675 0 0 0 5.452 2.263 7.715 7.715 0 0 0 0-15.429ZM9.5 4.286V8.57l3.643 2.16.66-1.097-3.018-1.791V4.286H9.5Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default HistoryIcon
