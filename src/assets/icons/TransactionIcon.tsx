import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const TransactionIcon = (props: SvgProps) => (
  <Svg
    width={18}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#E5E5E5"
      d="m0 8.8.04.027 2.242 1.529.021.014.029.02 7.055 4.81v-2.653H18V8.8H0ZM18 6.8l-.04-.029-2.242-1.624-.021-.016-.029-.02L8.613 0v2.819H0V6.8h18Z"
    />
  </Svg>
)
export default TransactionIcon
