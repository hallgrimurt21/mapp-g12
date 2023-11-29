import { StyleSheet } from "react-native"
import { darkerBlue } from "../../styles/colors"

export default StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: darkerBlue,
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 30,
        textShadowColor: "black",
        textShadowRadius: 5,
    },
})
