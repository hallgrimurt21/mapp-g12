import React, { useEffect, useState } from "react"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import { Text, ScrollView, TouchableOpacity, ImageBackground, SafeAreaView, View } from "react-native"
import EditBoardModal from "../Modals/EditBoardModal"
import AddBoardModal from "../Modals/AddBoardModal"
import { getBoards, addBoard, changeBoard, deleteBoard } from "../../Functions/Manager"

const BoardList = () => {
    const { navigate } = useNavigation()
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [editingBoard, setEditingBoard] = useState(null)
    const [boards, setBoards] = useState([])
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        getBoards().then((boards) => {
            setBoards(boards)
            setRefresh(false)
        })
    }, [refresh])

    function addBoardAndGetBoards (board) {
        addBoard(board).then(() => {
            setRefresh(true)
        })
    }
    function editBoardAndGetBoards (board) {
        changeBoard(board).then(() => {
            setRefresh(true)
        })
    }
    function deleteBoardAndGetBoards (id) {
        deleteBoard(id).then(() => {
            setRefresh(true)
        })
    }
    // async function isImage (url) {
    //     try {
    //         const response = await fetch(url, { method: "HEAD" })
    //         const contentType = response.headers.get("content-type")
    //         return contentType && contentType.startsWith("image/")
    //     } catch (error) {
    //         console.error("Error checking image URL:", error)
    //         return false
    //     }
    // }
    return (
        <ScrollView style={styles.container}>
            {boards.map((board) => (
                <TouchableOpacity
                    key={board.id}
                    style={styles.itemWithBorder}
                    onPress={() => {
                        navigate("Board", { id: board.id })
                    }}
                    onLongPress={() => {
                        setIsEditModalOpen(true)
                        setEditingBoard(board)
                    }}
                >
                    <ImageBackground
                        source={{ uri: board.thumbnailPhoto }}
                        style={styles.image}
                    >
                        <Text style={styles.text}>{board.name}</Text>
                        {board.description && <Text style={styles.description}>{board.description}</Text>}
                    </ImageBackground>
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
            <EditBoardModal />
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
                            thumbnailPhoto: photo,
                            id: editingBoard.id,
                        })
                    }
                }}
            />
            <AddBoardModal
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                onModalClose={(name, description, photo) => {
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
