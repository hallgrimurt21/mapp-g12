import React from "react"
import { View, Text, Image } from "react-native"
import logo from "../../resources/logo.png"
import styles from "./styles"

const Main = () => (
    <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.paragraph}>Board</Text>
    </View>
)

export default Main
