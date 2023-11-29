import React from "react"
import { View, Text } from "react-native"
import styles from "./styles"
import BoardList from "../../components/BoardList"

const Board = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Boards</Text>
        <BoardList />
    </View>
)

export default Board
