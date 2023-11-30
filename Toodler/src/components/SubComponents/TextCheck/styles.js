import { StyleSheet } from "react-native"
import React from "react"
import { black } from "../../../styles/colors"

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        color: black,
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 10,
    },
    checkbox: {
        width: 25,
        height: 25,
        margin: 1,
        padding: 1,
    },
})

export default styles
