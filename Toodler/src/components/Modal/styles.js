import { StyleSheet } from "react-native"
import { deviceHeight, deviceWidth } from "../../styles/deviceWidth"

export default StyleSheet.create({
    modal: {
        alignItems: "center",
        justifyContent: "flex-end",
    },
    body: {
        alignItems: "center",
        width: deviceWidth,
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 0,
        flexGrow: 0.3,
        overflow: "hidden",
    },
    empty: {
        marginTop: -deviceHeight * 0.2,
        backgroundColor: "white",
    },
})
