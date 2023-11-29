import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        maxHeight: "70%",
        minWidth: "80%",
        maxWidth: "80%",
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "white",
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
})
