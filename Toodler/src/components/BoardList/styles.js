import { StyleSheet } from "react-native"
import { deviceHeight } from "../../styles/deviceWidth"

export default StyleSheet.create({
    container: {
        marginTop: "1%",
    },
    add: {
        textAlign: "center",
        fontSize: 24,
        paddingBottom: 20,
        paddingTop: 20,
    },
    clickable: {
        borderStyle: "solid",
        borderBottomWidth: 3,
        borderBottomColor: "black",
    },
    image: {
        width: "100%",
        height: deviceHeight * 0.25,
        justifyContent: "flex-end",
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "right",
        margin: 10,
        textShadowColor: "black",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
    },
    description: {
        color: "white",
        fontSize: 16,
        fontWeight: "normal",
        textAlign: "right",
        margin: 10,
        textShadowColor: "black",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
    },
    imageText: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "flex-end",
    },
})
