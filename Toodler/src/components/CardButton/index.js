import React, { useState, useEffect } from "react"
import Card from "../Card"
import { Pressable } from "react-native"
import { changeTask, get1Task } from "../../Functions/Manager"

function CardButton({ info }) {
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

    return (
        <Pressable
            onPress={handlePress}
            style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
        >
            <Card info={cardInfo} />
        </Pressable>
    )
}

export default CardButton
