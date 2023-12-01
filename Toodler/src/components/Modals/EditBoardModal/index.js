import React, { useState, useEffect } from "react"
import { TextInput, SafeAreaView, Button } from "react-native"
import Modal from "../../Modal"
import styles from "./styles"

const EditBoardModal = ({ isOpen, closeModal, onModalClose, board }) => {
    const [name, onChangeName] = useState("name")
    const [description, onChangeDescription] = useState("description")
    const [photo, onChangePhoto] = useState("thumbnail photo")
    const [deleted, setDeleted] = useState(false)
    useEffect(() => {
        if (board) {
            onChangeName(board.name)
            if (board.description) {
                onChangeDescription(board.description)
            }
            onChangePhoto(board.thumbnailPhoto)
        }
    }, [board])
    const handleClose = () => {
        closeModal()
    }
    const handleCloseReturn = () => {
        console.log(deleted)
        onModalClose(name, description, photo, deleted)
        closeModal()
    }
    return (
        <Modal isOpen={isOpen} closeModal={handleClose} title="Edit">
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeName}
                    value={name}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeDescription}
                    value={description}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePhoto}
                    value={photo}
                />
                <Button
                    style={styles.input}
                    title="Accept"
                    onPress={handleCloseReturn}
                />
                <Button
                    style={styles.input}
                    title="Delete"
                    onPress={() => {
                        setDeleted(true)
                        handleCloseReturn()
                    }}
                />
            </SafeAreaView>
        </Modal>
    )
}

export default EditBoardModal
