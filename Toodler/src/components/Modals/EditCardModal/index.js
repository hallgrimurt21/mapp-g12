import React from "react"
import {
    TextInput,
    SafeAreaView,
    Pressable,
    Text,
    View,
    TouchableOpacity,
} from "react-native"
import Modal from "../../Modal"
import styles from "./styles"
import { grey } from "../../../styles/colors"
import { shadows } from "../../../styles/shadows"

const EditCardModal = ({ isOpen, closeModal }) => {
    // const [name, onChangeName] = React.useState(Card.name)
    // const [description, onChangeDescription] = React.useState(Card.description)
    const titleStyle = [styles.title, shadows.smallShadow]
    const modalStyle = [styles.modal, shadows.smallShadow]
    const buttonStyle = [styles.Button, shadows.smallShadow]
    const inputStyle = [styles.input, shadows.smallShadow]

    const handleClose = () => {
        closeModal()
    }
    return (
        <Modal isOpen={isOpen} closeModal={handleClose}>
            <SafeAreaView style={titleStyle}>
                <Text style={styles.titleText}>New Task</Text>
            </SafeAreaView>
        </Modal>
    )
}

export default EditCardModal
