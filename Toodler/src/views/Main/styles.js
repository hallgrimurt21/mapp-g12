import { StyleSheet } from "react-native"
import { colors, metrics } from "../../styles/colors"
import { deviceWidth } from "../../styles/deviceWidth"

export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        // color: colors.white,
        // marginTop: metrics.baseMargin,
    },
    paragraph: {
        fontSize: 14,
        // r
        //         marginTop: metrics.baseMargin / 2,
    },
    button: {
        width: 200,
        height: 50,
        // backgroundColor: colors.white,
        // borderRadius: metrics.baseRadius,
        // marginTop: metrics.baseMargin,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "bold",
        // color: colors.primary,
    },
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
        width: deviceWidth * 1,
        borderTopColor: "black",
        borderTopWidth: 1,
        justifyContent: "center",
    },
})
