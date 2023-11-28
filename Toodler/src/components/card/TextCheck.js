import { StyleSheet, View, Text } from "react-native"
import React, { useState } from "react"
import Checkbox from "expo-checkbox"

export default function TextCheck({ name, isFin }) {
    const [isChecked, setChecked] = useState(isFin)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={"black"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        textShadowRadius: 1,
        textShadowColor: "black",
        marginRight: 10,
    },
    checkbox: {
        fontSize: 150,
        fontWeight: "lighter",
        margin: 8,
    },
})
