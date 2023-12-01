import React, { useState, useEffect } from "react"
import { TextInput, SafeAreaView, Button } from "react-native"
import Modal from "../../Modal"
import styles from "./styles"

const EditBoardModal = ({ isOpen, closeModal, onModalClose, board }) => {
    const [name, onChangeName] = useState("")
    const [description, onChangeDescription] = useState("")
    const [photo, onChangePhoto] = useState("")
    const [deleted, setDeleted] = useState(false)
    useEffect(() => {
        if (deleted) {
            setDeleted(false)
            handleCloseReturn()
        }
    }, [deleted])
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
        onModalClose(name, description, photo, deleted)
        closeModal()
    }
    return (
        <Modal isOpen={isOpen} closeModal={handleClose} title="Edit">
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeName}
                    placeholder=""
                    value={name}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeDescription}
                    placeholder="Description"
                    value={description}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePhoto}
                    placeholder="Thumnmail Photo"
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
                    }}
                />
            </SafeAreaView>
        </Modal>
    )
}

export default EditBoardModal
