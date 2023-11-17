import React from 'react'
import Slider from '@react-native-community/slider';

interface Props {
    min?: number;
    max?: number;
    onValueChnage?: (val: number) => void
}
const AppSlider = ({
    min = 0,
    max = 1,
    onValueChnage = () => {}
}: Props) => {
    return(
        <Slider minimumValue={min} maximumValue={max} onValueChange={onValueChnage} />
    )
}

export default AppSlider;