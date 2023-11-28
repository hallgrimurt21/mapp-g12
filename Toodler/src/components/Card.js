import React, { useState } from "react"
import { StyleSheet, View } from "react-native"

export default function Card(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.children}</Text>
            <Checkbox />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: 300,
        backgroundColor: "coral",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderColor: "black", // color of the border
        borderWidth: 2, // width of the border
        borderRadius: 10,
        padding: 10,
    },

    text: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        textShadowRadius: 10,
        textShadowColor: "white",
        marginRight: 10,
    },
})
