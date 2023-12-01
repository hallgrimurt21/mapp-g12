import React, { useEffect, useState } from "react"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import { Text, ScrollView, TouchableOpacity } from "react-native"
import EditBoardModal from "../Modals/EditBoardModal"
import AddBoardModal from "../Modals/AddBoardModal"
import { getBoards, addBoard, changeBoard, deleteBoard } from "../../Functions/Manager"

const BoardList = () => {
    const { navigate } = useNavigation()
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [editingBoard, setEditingBoard] = useState(null)
    const [boards, setBoards] = useState([])
    
    
    useEffect(() => {
        getBoards().then((boards) => {
            setBoards(boards)
        })
    })
    function addBoardAndGetBoards (board) {
        console.log("addBoardAndGetBoards is called")
        addBoard(board).then(() => {
            getBoards().then((boards) => {
                setBoards(boards)
            })
        })
    }
    function editBoardAndGetBoards (board) {
        console.log("editBoardAndGetBoards is called")
        changeBoard(board).then(() => {
            getBoards().then((boards) => {
                setBoards(boards)
            })
        })
    }
    function deleteBoardAndGetBoards (id) {
        console.log("editBoardAndGetBoards is called")
        deleteBoard(id).then(() => {
            getBoards().then((boards) => {
                setBoards(boards)
            })
        })
    }
    return (
        <ScrollView style={styles.container}>
            {/* list of boards */}
            {boards.map((board) => (
                <TouchableOpacity
                    key={board.id}
                    style={styles.itemWithBorder}
                    onPress={() => { 
                        navigate("", { id: board.id })
                    }
                    }
                    onLongPress={() => {
                        setIsEditModalOpen(true)
                        setEditingBoard(board)
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
                board={editingBoard}
                onModalClose={(name, description, photo, deleted) => {
                    if (deleted) {
                        deleteBoardAndGetBoards(editingBoard.id)
                    } else {
                        editBoardAndGetBoards({
                            name,
                            description,
                            thumbnailPhoto: "photo",
                            id: editingBoard.id,
                        })
                    }
                }}
            />
            <AddBoardModal
                isOpen={isAddModalOpen}

                closeModal={() => setIsAddModalOpen(false)}
                
                onModalClose={(name, description, photo) => {
                    console.log("photo...", photo)
                    addBoardAndGetBoards({
                        name,
                        description,
                        thumbnailPhoto: photo,
                    })
                }}
            />
        </ScrollView>
    )
}

export default BoardList
