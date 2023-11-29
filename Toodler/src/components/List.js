import React from "react"
import { StyleSheet, View, Text } from "react-native"


export default function List({ name, children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.tasks}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "fit-content",
        width: "fit-content",
        backgroundColor: "tan",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        borderColor: "black", // color of the border
        borderWidth: 1, // width of the border
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    text: {
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
        tasks: {
        flexDirection: "column",
    },

})
