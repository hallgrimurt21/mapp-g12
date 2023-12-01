import React from "react"
import {
    TextInput,
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
} from "react-native"
import Modal from "../../Modal"
import styles from "./styles"
import { colors } from "../../../styles/colors"
import { shadows } from "../../../styles/shadows"
import { Picker } from '@react-native-picker/picker';

const AddListModal = ({ isOpen, closeModal, onModalClose }) => {
    const [name, onChangeName] = React.useState("")
    const [color, onChangeColor] = React.useState("")
    const [colorName, setColorName] = React.useState("");
    const [isPickerVisible, setPickerVisible] = React.useState(false)
    const titleStyle = [styles.title, shadows.smallShadow]
    const modalStyle = [styles.modal, shadows.smallShadow]
    const buttonStyle = [styles.Button, shadows.smallShadow]
    const inputStyle = [styles.input, shadows.smallShadow]

    const handleClose = () => {
        if (name === "" || color === "") {
            onChangeName("")
            onChangeColor("")
            closeModal()
        } else {
            onModalClose(name, color)
            closeModal()
            onChangeName("") // clear the name input
            onChangeColor("") // clear the color input
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
                        placeholderTextColor={colors.grey}
                    />
                    <TouchableOpacity onPress={() => setPickerVisible(true)}>
                        <Text style={inputStyle}>{colorName || "color" }</Text>
                    </TouchableOpacity>
                    {isPickerVisible && (
                        <Picker
                            selectedValue={color}
                            onValueChange={(itemValue, itemIndex) => {
                                onChangeColor(itemValue);
                                setColorName(Object.keys(colors)[itemIndex]);
                                setPickerVisible(false);
                            }}
                            
                        >
                            {Object.keys(colors).map((key) => (
                                <Picker.Item label={key} value={colors[key]} key={key} />
                            ))}
                        </Picker>
                    )}
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
