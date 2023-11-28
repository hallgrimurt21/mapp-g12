import React, { useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import Checkbox from "@material-ui/core/Checkbox"

export default function Card(props) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.text}>{props.children}</Text>
                <Checkbox style={styles.check} />
            </View>
            <Text style={styles.description}>Your description here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 350,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderColor: "black", // color of the border
        borderWidth: 1, // width of the border
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        fontFamily: "Roboto",
        flexDirection: "column",
    },
    text: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        textShadowRadius: 10,
        textShadowColor: "white",
        marginRight: 10,
    },
    check: {
        color: "black",
        fontSize: 100,
        fontWeight: "lighter",
    },
    description: {
        color: "grey",
        fontSize: 15,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
})
