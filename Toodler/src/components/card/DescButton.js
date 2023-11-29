import React, { useState } from "react"
import { StyleSheet, View, Text, Pressable } from "react-native"

export default function DescButton({ info }) {
    const [isPressed, setIsPressed] = useState(false)
    return (
        <View style={styles.container}>
            <Text style={styles.description}>{info.description}</Text>
            <Pressable
                style={[styles.button, isPressed && styles.buttonPressed]}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
            >
                <Text style={styles.buttonText}>...</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 22,
        height: 22,
        fontSize: 2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        // borderColor: "lightgrey",
        // borderWidth: 1,
        marginRight: 4,
    },
    description: {
        color: "grey",
        fontSize: 12,
    },
    container: {
        flex: 1,
        backgroundColor: "white",
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
        fontSize: 12,
        color: "black",
    },
})
