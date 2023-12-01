import { StyleSheet } from "react-native"
import { deviceHeight, deviceWidth } from "../../styles/deviceWidth"

export default StyleSheet.create({
    modal: {
        alignItems: "center",
        justifyContent: "flex-end",
    },
    body: {
        alignItems: "center",
        justifyContent: "flex-start",
        width: deviceWidth,
        backgroundColor: "white",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginBottom: 0,
        flexGrow: 0.6,
        overflow: "hidden",
        paddingBottom: 10,
    },
    empty: {
        marginBottom: -deviceHeight * 0.2,
        backgroundColor: "white",
    },
})
