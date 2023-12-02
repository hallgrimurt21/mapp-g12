import React, { useEffect, useState } from "react"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, ImageBackground, View } from "react-native"
import EditBoardModal from "../Modals/EditBoardModal"
import AddBoardModal from "../Modals/AddBoardModal"
import { getBoards, addBoard, changeBoard, deleteBoard } from "../../Functions/Manager"
import { deviceHeight } from "../../styles/deviceWidth"

const BoardList = () => {
    const { navigate } = useNavigation()

    /// Modal states ///
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    /// Board/s states  ///
    const [editingBoard, setEditingBoard] = useState(null)
    const [boards, setBoards] = useState([])

    /// Screen states  ///
    const [screenHeight, setScreenHeight] = useState(deviceHeight)
    const [refresh, setRefresh] = useState(true)

    /// Get boards when screen refreshes///
    useEffect(() => {
        getBoards().then((boards) => {
            setBoards(boards)
            setRefresh(false)
            if (boards.length > 3) {
                setScreenHeight((deviceHeight * 0.25) * boards.length + 150)
            } else {
                setScreenHeight(deviceHeight)
            }
        })
    }, [refresh])

    /// Writing to storage functions ///
    function addBoardAndGetBoards(board) {
        addBoard(board).then(() => {
            setRefresh(true)
        })
    }
    function editBoardAndGetBoards(board) {
        changeBoard(board).then(() => {
            setRefresh(true)
        })
    }
    function deleteBoardAndGetBoards(id) {
        deleteBoard(id).then(() => {
            setRefresh(true)
        })
    }

    return (
        <View style={[styles.container, { height: screenHeight }]}>
            {boards.map((board) => (
                <TouchableOpacity
                    key={board.id}
                    style={styles.clickable}
                    onPress={() => {
                        navigate("Board", { id: board.id })
                    }}
                    onLongPress={() => {
                        /// Open Edit Board Modal ///
                        setIsEditModalOpen(true)
                        setEditingBoard(board)
                    }}
                >
                    <ImageBackground
                        source={{ uri: board.thumbnailPhoto }}
                        defaultSource={require("../../resources/Images/Image_not_available.png")}
                        style={styles.image}
                    >
                        <View style={styles.imageText}>
                            <Text style={styles.text}>{board.name}</Text>
                            {board.description && <Text style={styles.description}>{board.description}</Text>}
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            ))}

            {/* Add Board*/}
            <TouchableOpacity
                onPress={() => {
                    // Open Add Board Modal ///
                    setIsAddModalOpen(true)
                }}
            >
                <Text style={styles.add}>+</Text>
            </TouchableOpacity>
            <EditBoardModal
                isOpen={isEditModalOpen}
                closeModal={() => setIsEditModalOpen(false)}
                board={editingBoard}
                onModalClose={(name, description, photo, deleted) => {
                    /// Edit or delete board ///
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
                    /// Adds new board ///
                    addBoardAndGetBoards({
                        name,
                        description,
                        thumbnailPhoto: photo,
                    })
                }}
            />
        </View>
    )
}

export default BoardList
