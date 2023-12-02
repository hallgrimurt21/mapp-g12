import React, { useState, useEffect } from "react"
import { TextInput, SafeAreaView, Button, TouchableOpacity, Text } from "react-native"
import Modal from "../../Modal"
import styles from "./styles"
import { Picker } from '@react-native-picker/picker';
import { colors } from "../../../styles/colors"
import { shadows } from "../../../styles/shadows"

const EditListModal = ({ isOpen, closeModal, onModalClose, list }) => {
    const [name, setName] = useState("")
    const [color, setColor] = useState("")
    const [deleted, setDeleted] = useState(false)//?
    const [isPickerVisible, setPickerVisible] = useState(false)
    const inputStyle = [styles.input, shadows.smallShadow]
    const [colorName, setColorName] = useState("");
    const onChangeName = (text) => {
        setName(text);
      };
    const onChangeColor = (value) => {
        setColor(value);
        setColorName(Object.keys(colors)[Object.values(colors).indexOf(value)]);
      };

    useEffect(() => {
        if (deleted) {
            setDeleted(false)
            handleCloseReturn()
        }
    }, [deleted])

    useEffect(() => {
        if (list) {
            onChangeName(list.name)
            onChangeColor(list.color)
        }
    }, [list])

    const handleClose = () => {
        setName("");
        setColor("");
        closeModal();
      };

      const handleCloseReturn = () => {
        if (deleted) {
          onModalClose(name, color, deleted);
        } else {
        if (name && color) {
          onModalClose(name, color);
        }
        setName("");
        setColor("");
        closeModal();}
      };

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
                    onPress={() => handleCloseReturn(name, color)}
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
