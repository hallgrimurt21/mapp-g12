import React, { useState } from "react";
import { TextInput, SafeAreaView, Button, TouchableOpacity, Text, View } from "react-native";
import Modal from "../../Modal";
import styles from "./styles";
import { Picker } from '@react-native-picker/picker';
import { colors } from "../../../styles/colors";
import { shadows } from "../../../styles/shadows";

const EditListModal = ({ isOpen, closeModal, onModalClose, list }) => {
  const [name, setName] = useState(list.name);
  const [color, setColor] = useState(list.color);
  const [isPickerVisible, setPickerVisible] = useState(false);
  const inputStyle = [styles.input, shadows.smallShadow];
  const [colorName, setColorName] = useState("");

  const handleClose = () => {
    onModalClose(name, color);
    closeModal();
    setName(""); // Clear the name input
    setColor(""); // Clear the color input
  };

  return (
    <Modal isOpen={isOpen} closeModal={handleClose} title="Edit">
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          placeholder={list.name}
          placeholderTextColor={colors.grey}
          value={name}
        />
        <TouchableOpacity onPress={() => setPickerVisible(true)}>
          <Text style={inputStyle}>{colorName || "Color"}</Text>
        </TouchableOpacity>
        {isPickerVisible && (
          <Picker
            selectedValue={color}
            onValueChange={setColor}
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
      </SafeAreaView>
    </Modal>
  );
};

export default EditListModal;