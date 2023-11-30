import React from "react"
import { View, Text } from "react-native"
import styles from "./styles"
import BoardList from "../../components/BoardList"
import data from "../../resources/data.json"

const Main = ({ navigation: { navigate } }) => (
    <View style={styles.container}>
        <Text style={styles.title}>Boards</Text>
        <BoardList />
    </View>
)

export default Main
