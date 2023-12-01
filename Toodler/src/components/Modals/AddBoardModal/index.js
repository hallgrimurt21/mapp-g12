import React from "react"
import { TextInput, SafeAreaView, Button } from "react-native"
import Modal from "../../Modal"
import styles from "./styles"

const AddBoardModal = ({ isOpen, closeModal, onModalClose }) => {
    const [name, onChangeName] = React.useState("Name")
    const [description, onChangeDescription] = React.useState(
        "Description(optional)",
    )
    const [photo, onChangePhoto] = React.useState("thumbnail photo")
    const handleClose = () => {
        closeModal()
    }
    const handleCloseReturn = () => {
        onModalClose(name, description, photo)
        closeModal()
    }
    return (
        <Modal isOpen={isOpen} closeModal={handleClose} title="Add">
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
                    onPress= {handleCloseReturn} title = "Accept"></Button>
            </SafeAreaView>
        </Modal>
    )
}

export default AddBoardModal
