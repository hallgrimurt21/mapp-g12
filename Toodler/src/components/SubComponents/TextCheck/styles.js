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
        fontSize: 150,
        fontWeight: "lighter",
        margin: 8,
    },
})

export default styles
