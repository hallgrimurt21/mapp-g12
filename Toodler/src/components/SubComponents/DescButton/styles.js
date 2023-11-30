import { StyleSheet } from "react-native"
import React, { useState } from "react"
import { white, grey, black } from "../../../styles/colors"

const styles = StyleSheet.create({
    button: {
        width: 28,
        height: 28,
        fontSize: 2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        marginTop: 5,
        justifyContent: "center",
    },
    description: {
        color: grey,
        fontSize: 12,
    },
    container: {
        flex: 1,
        backgroundColor: white,
        margin: 1, // Adjust this value to change the width of the border
        borderRadius: 2,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "baseline",
    },
    buttonPressed: {
        backgroundColor: "lightgrey",
    },
    buttonText: {
        fontSize: 18,
        color: black,
        justifyContent: "center",
        marginBottom: 10,
    },
})

export default styles
