import React, { useState } from "react"
import { View, Text, Pressable } from "react-native"
import styles from "./styles"

function DescButton({ info }) {
    const [descInfo, setDescInfo] = useState(info)

    useEffect(() => {
        setDescInfo(info)
    }, [info])
    return (
        <View style={styles.container}>
            <Text style={styles.description}>{descInfo}</Text>
        </View>
    )
}

export default DescButton
