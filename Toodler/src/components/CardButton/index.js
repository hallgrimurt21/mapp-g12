import React, { useState, useEffect, useRef } from "react"
import Card from "../Card"
import { Pressable } from "react-native"
import { changeTask, get1Task, deleteTask } from "../../Functions/Manager"
import EditCardModal from "../Modals/EditCardModal"

function CardButton({ info, onDelete }) {
    const [cardInfo, setCardInfo] = useState(info)
    const [modalVisible, setModalVisible] = useState(false)

    ////// updating card info on change ///////
    useEffect(() => {
        setCardInfo(info)
    }, [info])

    ///////// For on press checking
    const handlePress = () => {
        const updatedInfo = { ...cardInfo, isFinished: !cardInfo.isFinished }
        changeTask(updatedInfo).then(() => {
            get1Task(updatedInfo.id).then((task) => {
                console.log(task)
            })
            setCardInfo(updatedInfo)
        })
    }
    //////// For on long press editing
    const handleLongPress = () => {
        setModalVisible(true)
    }

    ///////// For closing + updating / Deleting a card /////////
    const closeModal = (name, description, deleted) => {
        /////// Deleting a card ///////
        if (deleted == true) {
            deleteTask(cardInfo.id).then(() => {
                onDelete(info.id)
            })
            /////// Updating a card ///////
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
