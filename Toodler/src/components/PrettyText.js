import React from "react"
import { Text, StyleSheet, View, ImageBackground } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import MaskedView from "@react-native-masked-view/masked-view"

export default function PrettyText({ text }) {
    return (
        <MaskedView
            style={{ flexDirection: "row", height: "auto" }}
            maskElement={<Text style={styles.titleTextMask}>{text}</Text>}
        >
            <LinearGradient
                colors={["blue", "red"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={[styles.titleTextMask, { opacity: 0 }]}>
                    {text}
                </Text>
            </LinearGradient>
        </MaskedView>
    )
}

const styles = StyleSheet.create({
    titleTextMask: {
        fontSize: 28,
        fontWeight: "bold",
        alignSelf: "flex-start",
        backgroundColor: "transparent",
    },
})
