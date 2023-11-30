import { View, Text } from "react-native"
import React, { useState } from "react"
import Checkbox from "expo-checkbox"
import styles from "./styles"

function TextCheck({ info }) {
    const [isChecked, setChecked] = useState(info.isFinished)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{info.name}</Text>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                onPress={() => setIsChecked(!isChecked)}
                textStyle={{ marginLeft: 8 }}
                size={10} // Adjust the size to control the border width indirectly
            />
        </View>
    )
}

export default TextCheck
