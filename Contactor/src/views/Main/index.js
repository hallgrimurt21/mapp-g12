import React from "react"
import {
    ScrollView,
    Text,
    View,
} from "react-native"
import styles from "./styles"

const Main = ({ navigation: { navigate } }) => (
    <View style={styles.main}>
        <Text style={styles.title}>Contactor</Text>
        <ScrollView style={styles.container}>
            <Text>Hello World</Text>
        </ScrollView>
    </View>
)

export default Main
