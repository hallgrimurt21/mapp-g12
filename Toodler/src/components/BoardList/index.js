import React, { useState } from "react"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import data from "../../resources/data.json"
import { Text, ScrollView, TouchableOpacity } from "react-native"
import EditModal from "../EditModal"

const BoardList = () => {
    const { navigate } = useNavigation()
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    return (
        <ScrollView style={styles.container} >
            {/* list of boards */}
            {data.boards.map((board) => (
                <TouchableOpacity key={board.id} style={styles.itemWithBorder} onPress={() => { navigate("Board", { id: board.id }) }} onLongPress={() => { setIsEditModalOpen(true) }}>
                    <Text style={styles.item}>{board.name}</Text>
                </TouchableOpacity>
            ))}

            {/* "+" button at the end */}
            <TouchableOpacity>
                <Text style={styles.item}>+</Text>
            </TouchableOpacity>
            <EditModal
                isOpen={isEditModalOpen}
                closeModal={() => setIsEditModalOpen(false)} />
        </ScrollView>
    )
}

export default BoardList
