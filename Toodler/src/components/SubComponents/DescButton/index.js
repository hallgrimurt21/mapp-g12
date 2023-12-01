import React, { useState } from "react"
import { View, Text, Pressable } from "react-native"
import styles from "./styles"

function DescButton({ info }) {
    const [isPressed, setIsPressed] = useState(false)
    return (
        <View style={styles.container}>
            <Text style={styles.description}>{info.description}</Text>
            {/* <Pressable
                style={[styles.button, isPressed && styles.buttonPressed]}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
            >
                <Text style={styles.buttonText}>...</Text>
            </Pressable> */}
        </View>
    )
}

export default DescButton
