import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
    props?: SvgProps;
    color?: string
  }

const PowerIcon = ({props, color = "#74B64A"}: Props) => (
  <Svg
    width={17}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M13.79 2.272C12.163.702 10.069-.055 7.8.003 3.61.178.178 3.61.003 7.856a8.186 8.186 0 0 0 5.352 7.97c.291.116.582.174.815.174.523 0 .988-.175 1.396-.465a2.541 2.541 0 0 0 1.105-2.095v-1.28c1.338-.29 2.327-1.454 2.327-2.85V6.984c0-.35-.233-.582-.582-.582h-.582V4.657c0-.35-.232-.582-.581-.582-.35 0-.582.233-.582.582v1.745H7.508V4.657c0-.35-.232-.582-.581-.582-.35 0-.582.233-.582.582v1.745h-.582c-.349 0-.581.233-.581.582V9.31c0 1.396.989 2.56 2.326 2.85v1.28c0 .466-.232.873-.581 1.164a1.5 1.5 0 0 1-1.222.174c-2.792-1.105-4.653-3.839-4.537-6.922.116-3.548 3.141-6.573 6.69-6.69 1.92-.058 3.722.64 5.119 1.92a6.95 6.95 0 0 1 2.152 5.061c0 2.909-1.803 5.526-4.537 6.515-.291.116-.466.465-.35.756.117.291.466.466.757.35 3.14-1.164 5.293-4.247 5.293-7.621 0-2.21-.872-4.305-2.501-5.875Z"
    />
  </Svg>
)
export default PowerIcon