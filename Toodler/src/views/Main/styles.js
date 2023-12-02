import { StyleSheet } from "react-native"
import { deviceHeight, deviceWidth } from "../../styles/deviceWidth"

export default StyleSheet.create({
    main: {
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
    },
    container: {
        backgroundColor: "transparent",
        height: deviceHeight,
        width: deviceWidth,
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        alignItems: "center",
        textAlign: "center",
        marginTop: "5%",
        // color: colors.white,
        // marginTop: metrics.baseMargin,
    },
})
