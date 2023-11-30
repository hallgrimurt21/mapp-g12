import React from "react"
import {
    TextInput,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
} from "react-native"
import Modal from "../../Modal"
import styles from "./styles"
import { shadows } from "../../../styles/shadows"

const AddBoardModal = ({ isOpen, closeModal }) => {
    const [name, onChangeName] = React.useState("Name")
    const [description, onChangeDescription] = React.useState(
        "Description(optional)",
    )
    const [photo, onChangePhoto] = React.useState("Photo")
    const titleStyle = [styles.title, shadows.smallShadow]
    const modalStyle = [styles.modal, shadows.smallShadow]
    const buttonStyle = [styles.Button, shadows.smallShadow]
    const inputStyle = [styles.input, shadows.smallShadow]

    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <SafeAreaView style={titleStyle}>
                <Text style={styles.titleText}>New Board</Text>
            </SafeAreaView>
            <SafeAreaView style={modalStyle}>
                <View style={styles.insider}>
                    <TextInput
                        style={inputStyle}
                        onChangeText={onChangeName}
                        value={name}
                    />
                    <TextInput
                        style={inputStyle}
                        onChangeText={onChangeDescription}
                        value={description}
                    />
                    <TextInput
                        style={inputStyle}
                        onChangeText={onChangePhoto}
                        value={photo}
                    />
                    <TouchableOpacity style={buttonStyle} activeOpacity={0.5}>
                        <Text>Save</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Modal>
    )
}

export default AddBoardModal
