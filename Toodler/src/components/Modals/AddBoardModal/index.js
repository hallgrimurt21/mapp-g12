import React from "react"
import { TextInput, SafeAreaView } from "react-native"
import Modal from "../../Modal"
import styles from "./styles"

const AddBoardModal = ({ isOpen, closeModal }) => {
    const [name, onChangeName] = React.useState("Name")
    const [description, onChangeDescription] = React.useState(
        "Description(optional)",
    )
    const [photo, onChangePhoto] = React.useState("Photo")
    return (
        <Modal isOpen={isOpen} closeModal={closeModal} title="Add">
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
            </SafeAreaView>
        </Modal>
    )
}

export default AddBoardModal
