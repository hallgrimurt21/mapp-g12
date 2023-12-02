import React, { useState, useEffect } from "react"
import { TextInput, SafeAreaView, TouchableOpacity, Text } from "react-native"
import Modal from "../../Modal"
import styles from "./styles"
import { shadows } from "../../../styles/shadows"

const EditBoardModal = ({ isOpen, closeModal, onModalClose, board }) => {
    const initialState = { name: "", description: "", photo: "" }
    const [form, setForm] = useState(initialState)
    const [deleted, setDeleted] = useState(false)
    const [error, setError] = useState("")
    const titleStyle = [styles.title, shadows.smallShadow]
    const modalStyle = [styles.modal, shadows.smallShadow]
    const buttonStyle = [styles.Button, shadows.smallShadow]
    const inputStyle = [styles.input, shadows.smallShadow]
    const loadBoard = () => {
        setForm({
            name: board.name,
            description: board.description || "",
            photo: board.thumbnailPhoto,
        })
    }
    useEffect(() => {
        if (deleted) {
            handleCloseReturn()
        }
    }, [deleted])
    useEffect(() => {
        if (board) {
            loadBoard()
        }
    }, [board])
    const handleChange = (field, value) => {
        setForm(prevState => ({ ...prevState, [field]: value }))
    }

    const handleCloseReturn = () => {
        if ((!form.name.trim() || !form.photo.trim()) && !deleted) {
            setError("Fill in name and photo")
            return
        }
        onModalClose(form.name, form.description, form.photo, deleted)
        closeModal()
        setForm(initialState)
        setDeleted(false)
        setError("")
    }
    const handleClose = () => {
        closeModal()
        loadBoard()
        setError("")
    }
    return (
        <Modal isOpen={isOpen} closeModal={handleClose}>
            <SafeAreaView style={titleStyle}>
                <Text style={styles.titleText}>Edit Board</Text>
            </SafeAreaView>
            <SafeAreaView style={modalStyle}>
                <TextInput
                    style={inputStyle}
                    onChangeText={(text) => handleChange("name", text)}
                    placeholder="Name"
                    placeholderTextColor={"grey"}
                    value={form.name}
                />
                <TextInput
                    style={inputStyle}
                    onChangeText={(text) => handleChange("description", text)}
                    placeholder="Description(optional)"
                    placeholderTextColor={"grey"}
                    value={form.description}
                />
                <TextInput
                    style={inputStyle}
                    onChangeText={(text) => handleChange("photo", text)}
                    placeholder="Photo"
                    placeholderTextColor={"grey"}
                    value={form.photo}
                />
                <TouchableOpacity
                    style={buttonStyle} activeOpacity={0.5}
                    onPress={handleCloseReturn}>
                    <Text>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={buttonStyle} activeOpacity={0.5}
                    onPress={() => {
                        setDeleted(true)
                    }}>
                    <Text>Delete</Text>
                </TouchableOpacity>
                {error && <Text style={{ color: "red" }}>{error}</Text>}
            </SafeAreaView>
        </Modal>
    )
}

export default EditBoardModal
