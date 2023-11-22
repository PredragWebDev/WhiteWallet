import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const AdvancedIcon = (props: SvgProps) => (
  <Svg
    width={19}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#E5E5E5"
      d="M9.071 18v-3a6 6 0 0 1 0-12V0H7.188v1.748c-.83.215-1.606.56-2.298 1.025L3.767 1.651l-2.12 2.121 1.14 1.14A7.442 7.442 0 0 0 1.82 7.12H.07v3.762h1.748c.21.812.546 1.572.997 2.253l-1.17 1.17 2.122 2.12 1.17-1.169a7.459 7.459 0 0 0 2.258.999V18h1.875Z"
    />
    <Path
      fill="#E5E5E5"
      d="M9.071 10.875a1.875 1.875 0 1 1 0-3.75v-1.5a3.375 3.375 0 1 0 0 6.75v-1.5ZM13.653 18v-4.077a7.887 7.887 0 0 0 4.418-7.078A7.883 7.883 0 0 0 14.097 0v6.653l-3.918 3.435V18h3.474Z"
    />
  </Svg>
)
export default AdvancedIcon
