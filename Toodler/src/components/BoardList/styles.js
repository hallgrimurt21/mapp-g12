import { StyleSheet } from "react-native"
import { deviceHeight } from "../../styles/deviceWidth"

export default StyleSheet.create({
    container: {
        height: deviceHeight,
        marginTop: "5%",
    },
    item: {
        textAlign: "center",
        fontSize: 24,
        paddingBottom: 20,
        paddingTop: 20,
    },
    itemWithBorder: {
        borderStyle: "solid",
        borderBottomWidth: 3,
        borderBottomColor: "black",
    },
    image: {
        width: "100%", // or any other size you want
        height: "100%", // or any other size you want
        justifyContent: "flex-end", // aligns the text to the bottom of the image
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "right", // aligns the text to the right of the image
        margin: 10, // adds some margin around the text
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
})
