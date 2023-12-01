import { StyleSheet } from "react-native"
import { deviceHeight, deviceWidth } from "../../styles/deviceWidth"

export default StyleSheet.create({
    modal: {
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: deviceHeight * 0.13,
        backgroundColor: "white",
        width: deviceWidth,
        marginLeft: -deviceWidth * 0.005,
        marginBottom: -deviceHeight * 0.2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    body: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 0,
        overflow: "hidden",
        paddingBottom: 10,
    },
    empty: {
        backgroundColor: "white",
    },
})
