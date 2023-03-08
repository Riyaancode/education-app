import { Dimensions } from "react-native"

const {width, height} = Dimensions.get("window");

export const COLORS = {
    Primary:'#3D5CFF',
    secondary:'#FFEBF0',
    text1:'#1F1F39',
    text2:'#858597'
}

export const SIZES = {
    base:10,
    width,
    height
}

const theme = {COLORS, SIZES};
export default theme;