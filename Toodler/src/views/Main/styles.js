import { StyleSheet } from "react-native"
import { deviceWidth } from "../../styles/deviceWidth"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "darkerBlue",
        marginTop: 50,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
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
        marginTop: 50,
        marginBottom: 30,
        textShadowColor: "black",
        textShadowRadius: 5,
    },
})
