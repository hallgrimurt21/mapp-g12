import React from "react"
import { TextInput, SafeAreaView } from "react-native"
import Modal from "../../Modal"
import styles from "./styles"

const AddCardModal = ({ isOpen, closeModal, onModalClose }) => {
    const [name, onChangeName] = React.useState("Name")
    const [description, onChangeDescription] = React.useState(
        "Description(optional)",
    )

    const handleClose = () => {
        onModalClose(name, description)
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
            </SafeAreaView>
        </Modal>
    )
}

export default AddCardModal
