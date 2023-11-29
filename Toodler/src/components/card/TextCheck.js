import { StyleSheet, View, Text } from "react-native"
import React, { useState } from "react"
import Checkbox from "expo-checkbox"

export default function TextCheck({ info }) {
    const [isChecked, setChecked] = useState(info.isFinished)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{info.name}</Text>
            <Checkbox
                style={{
                    width: 25,
                    height: 25,
                    margin: 1,
                    padding: 1,
                }}
                value={isChecked}
                onValueChange={setChecked}
                onPress={() => setIsChecked(!isChecked)}
                textStyle={{ marginLeft: 8 }}
                size={10} // Adjust the size to control the border width indirectly
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
        marginRight: 10,
    },
    checkbox: {
        fontSize: 150,
        fontWeight: "lighter",
        margin: 8,
    },
})
