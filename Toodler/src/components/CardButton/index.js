import React, { useState, useEffect } from "react"
import Card from "../Card"
import { Pressable } from "react-native"
import { changeTask, get1Task } from "../../Functions/Manager"
import { EditCardModal } from "../Modals/EditCardModal"

function CardButton({ info }) {
    const [cardInfo, setCardInfo] = useState(info)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)

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
    return (
        <Pressable
            onPress={handlePress}
            onLongPress={handleLongPress}
            style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
        >
            <Card info={cardInfo} />
            {/* <EditCardModal
                isOpen={isEditModalOpen}
                closeModal={() => setIsEditModalOpen(false)}
            /> */}
        </Pressable>
    )
}

export default CardButton
