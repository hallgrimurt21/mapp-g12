import React, { useState, useEffect } from "react"
import { TextInput, 
    SafeAreaView, 
    Button, 
    TouchableOpacity, 
    Text, 
    View 
} from "react-native"
import Modal from "../../Modal"
import styles from "./styles"
import { Picker } from '@react-native-picker/picker';
import { colors } from "../../../styles/colors"
import { shadows } from "../../../styles/shadows"

const EditListModal = ({ isOpen, closeModal, onModalClose, list }) => {
    const [name, onChangeName] = useState(list.name)
    const [color, onChangeColor] = useState(list.color)
    const [deleted, setDeleted] = useState(false)//?
    const [isPickerVisible, setPickerVisible] = useState(false)

    const inputStyle = [styles.input, shadows.smallShadow]
    const [colorName, setColorName] = useState("");

    const handleClose = () => {
        if (name === "") {
            onModalClose(name, color, deleted)
            onChangeName("")
            onChangeColor("")
            closeModal()
        } else {
            onModalClose(name, color, deleted)
            closeModal()
            onChangeName("") // clear the name input
            onChangeColor("") // clear the description input
        }
    }

    useEffect(() => {
        if (deleted) {
            handleClose()
        }
    }, [deleted])

    return (
        <Modal isOpen={isOpen} closeModal={handleClose} title="Edit">
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeName}
                    placeholder="List Name"
                    placeholderTextColor={colors.grey}
                    value={name}
                />
                <TouchableOpacity onPress={() => setPickerVisible(true)}>
                    <Text style={inputStyle}>{colorName || "Color"}</Text>
                </TouchableOpacity>
                {isPickerVisible && (
                    <Picker
                        selectedValue={color}
                        onValueChange={onChangeColor}
                    >
                        {Object.keys(colors).map((key) => (
                            <Picker.Item label={key} value={colors[key]} key={key} />
                        ))}
                    </Picker>
                )}
                <Button
                    style={styles.input}
                    title="Accept"
                    onPress={handleClose}
                />
                <Button
                    style={styles.input}
                    title="Delete"
                    onPress={() => {
                        setDeleted(true)
                    }}
                />
            </SafeAreaView>

        </Modal>
    )
}

export default EditListModal
