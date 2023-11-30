import React, { useState } from "react"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import data from "../../resources/data.json"
import { Text, ScrollView, TouchableOpacity } from "react-native"
import EditBoardModal from "../Modals/EditBoardModal"
import AddBoardModal from "../Modals/AddBoardModal"

const BoardList = () => {
    const { navigate } = useNavigation()
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    return (
        <ScrollView style={styles.container}>
            {/* list of boards */}
            {data.boards.map((board) => (
                <TouchableOpacity
                    key={board.id}
                    style={styles.itemWithBorder}
                    onPress={() => {
                        navigate("Board", { id: board.id })
                    }}
                    onLongPress={() => {
                        setIsEditModalOpen(true)
                    }}
                >
                    <Text style={styles.item}>{board.name}</Text>
                </TouchableOpacity>
            ))}

            {/* "+" button at the end */}
            <TouchableOpacity
                onPress={() => {
                    setIsAddModalOpen(true)
                }}
            >
                <Text style={styles.item}>+</Text>
            </TouchableOpacity>
            <EditBoardModal
                isOpen={isEditModalOpen}
                closeModal={() => setIsEditModalOpen(false)}
            />
            <AddBoardModal
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
            />
        </ScrollView>
    )
}

export default BoardList
