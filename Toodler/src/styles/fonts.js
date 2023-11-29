import React from "react"
import { Text, StyleSheet } from "react-native"

const RText = ({ children }) => {
    return <Text style={styles.text}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Roboto",
    },
})

export default RobotoText
