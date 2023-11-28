import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import React from "react"

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hello world!</Text>
            <Text>HI GLOBE</Text>
            <Text>HI GLOBE</Text>
            <Button title="Press me" onPress={() => alert("Pressed!")} />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})
