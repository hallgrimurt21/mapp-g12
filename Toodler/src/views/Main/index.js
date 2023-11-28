// file todo
import React from "react"
import { View, Text, TouchableHighlight, Image } from "react-native"
import logo from "../../resources/logo.png"
import styles from "./styles"

const Main = () => {
    <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text>Olá mundo!</Text>
        <TouchableHighlight>
            <Text>Entrar</Text>
        </TouchableHighlight>
    </View>
}

export default Main
