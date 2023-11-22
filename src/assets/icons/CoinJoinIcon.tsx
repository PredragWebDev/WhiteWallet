import { TabIconProps } from "@/components/TabBar/TabBarIcon"
import theme from "@/constants/theme"
import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CoinJoinIcon = ({focused, ...props}: TabIconProps) => (
  <Svg
    width={props.width ? props.width : 24}
    height={props.height ? props.height : 21}
    viewBox="0, 0, 24, 21"
    fill="none"
    {...props}
  >
    <Path
      fill={focused ? theme.colors.white : theme.colors.grey}
      d="M11.597 15.94v-1.08c-.541-.068-.98-.189-1.318-.363-.338-.174-.631-.457-.877-.845-.246-.39-.39-.862-.429-1.422l1.087-.205c.084.58.231 1.006.444 1.279.304.385.669.598 1.093.641v-3.439a4.514 4.514 0 0 1-1.363-.516 2.003 2.003 0 0 1-.795-.8 2.367 2.367 0 0 1-.279-1.158c0-.768.273-1.391.816-1.867.365-.322.906-.516 1.621-.588V5.06h.637v.517c.628.06 1.128.244 1.495.551.473.392.756.93.852 1.615l-1.117.168c-.063-.424-.197-.75-.4-.975-.2-.226-.477-.375-.83-.447v3.115c.544.138.904.244 1.08.32.337.148.611.328.822.54.214.212.378.464.49.755.115.294.173.61.173.95 0 .75-.24 1.373-.716 1.873-.475.502-1.092.768-1.849.805v1.093h-.637Zm0-9.463c-.42.063-.752.231-.994.504a1.409 1.409 0 0 0-.363.967c0 .367.103.677.31.925.207.248.555.446 1.047.594v-2.99Zm.637 7.468a1.6 1.6 0 0 0 1.042-.545c.274-.311.412-.699.412-1.16 0-.391-.099-.707-.292-.945-.194-.237-.582-.45-1.162-.64v3.29Z"
    />
    <Path
      fill={focused ? theme.colors.white : theme.colors.grey}
      fillRule="evenodd"
      d="M22.453 11.5C21.949 16.83 17.462 21 12 21c-4.745 0-8.755-3.148-10.056-7.47h2.112a8.503 8.503 0 0 0 16.386-2.03H19l2.5-3 2.5 3h-1.547ZM1.69 8.5C2.624 3.658 6.885 0 12 0c4.378 0 8.13 2.679 9.706 6.487h-2.211A8.503 8.503 0 0 0 3.737 8.5H5l-2.5 3-2.5-3h1.69Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default CoinJoinIcon
