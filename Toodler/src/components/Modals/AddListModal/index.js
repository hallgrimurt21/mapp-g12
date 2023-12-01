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
import grey from "../../../styles/colors"
import { shadows } from "../../../styles/shadows"

const AddListModal = ({ isOpen, closeModal, onModalClose }) => {
    const [name, onChangeName] = React.useState("")
    const [Color, onChangeColor] = React.useState("")
    const titleStyle = [styles.title, shadows.smallShadow]
    const modalStyle = [styles.modal, shadows.smallShadow]
    const buttonStyle = [styles.Button, shadows.smallShadow]
    const inputStyle = [styles.input, shadows.smallShadow]

    const handleClose = () => {
        if (name === "") {
            onChangeName("")
            onChangeColor("")
            closeModal()
        } else {
            onModalClose(name, Color)
            closeModal()
            onChangeName("") // clear the name input
            onChangeColor("") // clear the Color input
        }
    }
    return (
        <Modal isOpen={isOpen} closeModal={handleClose}>
            <SafeAreaView style={titleStyle}>
                <Text style={styles.titleText}>New List</Text>
            </SafeAreaView>
            <SafeAreaView style={modalStyle}>
                <View style={styles.insider}>
                    <TextInput
                        style={inputStyle}
                        onChangeText={onChangeName}
                        placeholder={"Name"}
                        placeholderTextColor={grey}
                    />
                    <TextInput
                        style={inputStyle}
                        onChangeText={onChangeColor}
                        placeholder={"Color(optional)"}
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

export default AddListModal
