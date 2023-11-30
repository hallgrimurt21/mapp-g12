import React from "react"
import NativeModal from "react-native-modal"
import { View, Text } from "react-native"
import styles from "./styles"

const Modal = ({ isOpen, closeModal}) => (
    <NativeModal
        isVisible={isOpen}
        onBackButtonPress={closeModal}
        onBackdropPress={closeModal}
        style={styles.modal}
        animationOut={"fadeOut"}>
        <View style={styles.body}>
            <Text>Hello World</Text>
        </View>
    </NativeModal>
)

export default Modal
