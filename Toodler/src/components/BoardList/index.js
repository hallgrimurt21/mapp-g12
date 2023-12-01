import React, { useEffect, useState } from "react"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import { Text, ScrollView, TouchableOpacity, ImageBackground } from "react-native"
import EditBoardModal from "../Modals/EditBoardModal"
import AddBoardModal from "../Modals/AddBoardModal"
import { getBoards, addBoard, changeBoard, deleteBoard } from "../../Functions/Manager"

const BoardList = () => {
    const { navigate } = useNavigation()
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [editingBoard, setEditingBoard] = useState(null)
    const [boards, setBoards] = useState([])
    const [first, setFirst] = useState(true)

    useEffect(() => {
        getBoards().then((boards) => {
            setBoards(boards)
            setFirst(false)
        })
    }, [first])

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
                    onError={() => {
                        this.setState({ uri: "https://m.media-amazon.com/images/I/81HhgSlTD1L.jpg" })
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
