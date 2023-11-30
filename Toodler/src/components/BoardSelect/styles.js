import { StyleSheet } from "react-native"
import React from "react"
import { white } from "../../styles/colors"

const styles = StyleSheet.create({
    title: {
        alignSelf: "stretch",
        padding: 10,
        margin: 10,
        marginTop: 60,
        alignSelf: "flex-start",
        borderRadius: 5,
        backgroundColor: white,
    },
    empty: {
        height: 80,
    },
    boardback: {
        flex: 1,
        width: "100%",
        paddingLeft: 0,
    },
})

export default styles
