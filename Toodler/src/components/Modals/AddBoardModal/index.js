import React, { useEffect, useState } from "react"
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

const AddBoardModal = ({ isOpen, closeModal, onModalClose }) => {
    const initialState = { name: "", description: "", photo: "" }
    const [form, setForm] = useState(initialState)

    const handleChange = (field, value) => {
        setForm(prevState => ({ ...prevState, [field]: value }))
    }
    const titleStyle = [styles.title, shadows.smallShadow]
    const modalStyle = [styles.modal, shadows.smallShadow]
    const buttonStyle = [styles.Button, shadows.smallShadow]
    const inputStyle = [styles.input, shadows.smallShadow]
    const handleClose = () => {
        onModalClose(form.name, form.description, form.photo)
        closeModal()
        setForm(initialState)
    }
    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <SafeAreaView style={titleStyle}>
                <Text style={styles.titleText}>New Board</Text>
            </SafeAreaView>
            <SafeAreaView style={modalStyle}>
                <View style={styles.insider}>
                    <TextInput
                        style={inputStyle}
                        onChangeText={(text) => handleChange("name", text)}
                        value={form.name}
                        placeholder="Name"
                        placeholderTextColor={"grey"}
                    />
                    <TextInput
                        style={inputStyle}
                        onChangeText={(text) => handleChange("description", text)}
                        value={form.description}
                        placeholder="Description(optional)"
                        placeholderTextColor={"grey"}
                    />
                    <TextInput
                        style={inputStyle}
                        onChangeText={(text) => handleChange("photo", text)}
                        value={form.photo}
                        placeholder="Photo"
                        placeholderTextColor={"grey"}
                    />
                    <TouchableOpacity style={buttonStyle} activeOpacity={0.5} onPress= {handleClose}>
                        <Text>Save</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Modal>
    )
}

export default AddBoardModal
