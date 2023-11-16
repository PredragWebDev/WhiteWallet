import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window')

const designWidth = 360;
const designHeight = 640;

export const horizontalScale = (val: number) => {
    return (val / designWidth) * width
}

export const verticalScale = (val: number) => {
    return (val / designHeight) * height
}
