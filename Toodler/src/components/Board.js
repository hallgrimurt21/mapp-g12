import React from "react"
import { StyleSheet, View, Text } from "react-native"

export default function Board(props) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 800,
        width: 600,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "Column",
        borderColor: "black", // color of the border
        borderWidth: 1, // width of the border
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    },
    Text: {
        alignContent: "center",
        alignItems: "center",
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        textShadowRadius: 10,
        textShadowColor: "white",
        marginRight: 10,
        flexDirection: "column",
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
