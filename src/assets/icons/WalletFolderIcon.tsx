import * as React from "react"
import Svg, { SvgProps, Path, Ellipse } from "react-native-svg"
const WalletFolderIcon = (props: SvgProps) => (
  <Svg
    width={21}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#252526"
      stroke="#fff"
      strokeWidth={2}
      d="m1.387 12.537.578-7.483L16.69 1.288v8.667a2 2 0 0 1-1.53 1.944L3.851 14.636a2 2 0 0 1-2.464-2.099Z"
    />
    <Path
      fill="#252526"
      stroke="#fff"
      strokeWidth={2}
      d="M1.071 5.79a1 1 0 0 1 1-1h15.048a1 1 0 0 1 1 1v9.263a1 1 0 0 1-1 1H2.07a1 1 0 0 1-1-1V5.789Z"
    />
    <Ellipse cx={15.785} cy={13.737} fill="#F7931A" rx={4.286} ry={4.263} />
  </Svg>
)
export default WalletFolderIcon
