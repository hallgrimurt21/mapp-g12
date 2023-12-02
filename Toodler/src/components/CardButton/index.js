import React, { useState, useEffect, useRef } from "react"
import Card from "../Card"
import { View, Text, Animated, Pressable } from "react-native"
import {
    changeTask,
    get1Task,
    deleteTask,
    getTasks,
} from "../../Functions/Manager"
import EditCardModal from "../Modals/EditCardModal"

function CardButton({ info, onDelete }) {
    const [cardInfo, setCardInfo] = useState(info)
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        setCardInfo(info)
    }, [info])

    const handlePress = () => {
        const updatedInfo = { ...cardInfo, isFinished: !cardInfo.isFinished }
        changeTask(updatedInfo).then(() => {
            get1Task(updatedInfo.id).then((task) => {
                console.log(task)
            })
            setCardInfo(updatedInfo)
        })
    }
    const handleLongPress = () => {
        setModalVisible(true)
    }

    const closeModal = (name, description, deleted) => {
        if (deleted == true) {
            deleteTask(cardInfo.id).then(() => {
                onDelete(info.id)
            })
        } else {
            const updatedInfo = {
                ...cardInfo,
                name: name,
                description: description,
            }
            changeTask(updatedInfo).then(() => {
                get1Task(updatedInfo.id).then((task) => {
                    console.log(task)
                })
                setCardInfo(updatedInfo)
            })
        }

        setModalVisible(false)
    }

    return (
        <Pressable
            onPress={handlePress}
            onLongPress={handleLongPress}
            style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
        >
            <Card info={cardInfo} />
            <EditCardModal
                card={cardInfo}
                onModalClose={closeModal}
                closeModal={() => setModalVisible(false)}
                isOpen={modalVisible}
            />
        </Pressable>
    )
}

export default CardButton
