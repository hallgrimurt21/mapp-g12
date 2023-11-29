import React, { useState } from "react"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import data from "../../resources/data.json"
import { Text, ScrollView, TouchableOpacity } from "react-native"
import EditModal from "../EditModal"
import AddModal from "../AddModal"

const BoardList = () => {
    const { navigate } = useNavigation()
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    return (
        <ScrollView style={styles.container} >
            {/* list of boards */}
            {data.boards.map((board, index) => (
                <TouchableOpacity key={board.id} style={styles.itemWithBorder} onPress={() => { navigate("Main") }} onLongPress={() => { setIsEditModalOpen(true) }}>
                    <Text style={styles.item}>{board.name}</Text>
                </TouchableOpacity>
            ))}

            {/* "+" button at the end */}
            <TouchableOpacity onPress={() => { setIsAddModalOpen(true) }}>
                <Text style={styles.item}>+</Text>
            </TouchableOpacity>
            <EditModal
                isOpen={isEditModalOpen}
                closeModal={() => setIsEditModalOpen(false)} />
            <AddModal
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)} />
        </ScrollView>
    )
}

export default BoardList
