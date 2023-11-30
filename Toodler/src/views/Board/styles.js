import { StyleSheet } from "react-native"
import { offWhite, white, darkerBlue } from "../../styles/colors"
import { deviceWidth } from "../../styles/deviceWidth"

export default StyleSheet.create({
    viewer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },

    buttonText2: {
        width: 30,
        height: 30,
        alignSelf: "center",
    },
    button2: {
        height: 50,
        width: deviceWidth,
        justifyContent: "center",
        paddingBottom: 12,
        backgroundColor: white,
    },
    backwhite: {
        backgroundColor: offWhite,
    },
})
