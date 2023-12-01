import React, { useState } from "react"
import {
    TextInput,
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
} from "react-native"
import Modal from "../../Modal"
import styles from "./styles"
import { grey } from "../../../styles/colors"
import { shadows } from "../../../styles/shadows"

const EditCardModal = ({ card, isOpen, closeModal, onModalClose }) => {
    const [name, onChangeName] = useState(card.name)
    const [description, onChangeDescription] = useState(card.description)
    const titleStyle = [styles.title, shadows.smallShadow]
    const modalStyle = [styles.modal, shadows.smallShadow]
    const buttonStyle = [styles.Button, shadows.smallShadow]
    const inputStyle = [styles.input, shadows.smallShadow]

    const handleClose = () => {
        if (name === "") {
            onChangeName("")
            onChangeDescription("")
            closeModal()
        } else {
            onModalClose(name, description)
            closeModal()
            onChangeName("") // clear the name input
            onChangeDescription("") // clear the description input
        }
    }
    return (
        <Modal isOpen={isOpen} closeModal={handleClose}>
            <SafeAreaView style={titleStyle}>
                <Text style={styles.titleText}>Edit Task</Text>
            </SafeAreaView>
            <SafeAreaView style={modalStyle}>
                <View style={styles.insider}>
                    <TextInput
                        style={inputStyle}
                        onChangeText={onChangeName}
                        placeholder={card.name}
                        placeholderTextColor={grey}
                    />
                    <TextInput
                        style={inputStyle}
                        onChangeText={onChangeDescription}
                        placeholder={
                            card.description
                                ? card.description
                                : "Description (optional)"
                        }
                        placeholderTextColor={grey}
                    />
                    <TouchableOpacity
                        style={buttonStyle}
                        activeOpacity={0.5}
                        onPress={handleClose}
                    >
                        <Text>Save</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Modal>
    )
}

export default EditCardModal
