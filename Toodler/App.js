import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View } from "react-native"
import Card from "./src/components/Card"
import data from "./src/resources/data.json"

export default function App() {
    const lisa = ["hello world", "joey is home"]
    return (
        <View style={styles.container}>
            {data.tasks.map((text, index) => (
                <Card key={index}>{text.name}</Card>
            ))}
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "coral",
        alignItems: "center",
        justifyContent: "center",
    },
})
