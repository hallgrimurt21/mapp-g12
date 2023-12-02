import React, { useState, useEffect } from "react"
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
    const [deleted, setDeleted] = useState(false)
    const titleStyle = [styles.title, shadows.smallShadow]
    const modalStyle = [styles.modal, shadows.smallShadow]
    const buttonStyle = [styles.Button, shadows.smallShadow]
    const inputStyle = [styles.input, shadows.smallShadow]

    const handleClose = () => {
        if (name === "") {
            onModalClose(name, description, deleted)
            onChangeName("")
            onChangeDescription("")
            closeModal()
        } else {
            onModalClose(name, description, deleted)
            closeModal()
            onChangeName("") // clear the name input
            onChangeDescription("") // clear the description input
        }
    }

    useEffect(() => {
        if (deleted) {
            handleClose()
        }
    }, [deleted])
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
                    <View style={styles.buttonPart}>
                        <TouchableOpacity
                            style={buttonStyle}
                            activeOpacity={0.5}
                            onPress={handleClose}
                        >
                            <Text>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            activeOpacity={0.5}
                            onPress={() => setDeleted(true)}
                        >
                            <Text style={styles.deleteText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    )
}

export default EditCardModal
