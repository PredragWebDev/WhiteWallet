import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const EyeIcon = (props: SvgProps) => (
  <Svg
    width={25}
    height={39}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      d="M17.308 33.173c0 2.938-2.19 5.25-4.808 5.25s-4.808-2.312-4.808-5.25 2.19-5.25 4.808-5.25 4.808 2.312 4.808 5.25Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      d="m1 31.965.143-.372c4.046-10.513 19.055-10.115 22.537.598v0"
    />
  </Svg>
)
export default EyeIcon
