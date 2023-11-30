import React from "react"
import { Text } from "react-native"
import Modal from "../Modal"
import styles from "./styles"

const EditModal = ({
    isOpen,
    closeModal,
}) => (
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title="Edit">
        <Text>Hello World</Text>
    </Modal>
)

export default EditModal
