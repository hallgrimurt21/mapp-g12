import React from "react"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import data from "../../resources/data.json"
import { Text, ScrollView, TouchableOpacity } from "react-native"

const BoardList = () => {
    const { navigate } = useNavigation();
    return (
        <ScrollView style={styles.container} >
            {/* list of boards */}
            {data.boards.map((board, index) => (
                <TouchableOpacity key={board.id} style={styles.itemWithBorder} onPress={() => { navigate("Main") }}>
                    <Text style={styles.item}>{board.name}</Text>
                </TouchableOpacity>
            ))}

            {/* "+" button at the end */}
            <TouchableOpacity>
                <Text style={styles.item}>+</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default BoardList
