import React, { useState, useEffect, useRef } from "react"
import Card from "../Card"
import { View, Text, Animated, Pressable } from "react-native"
import { changeTask, get1Task } from "../../Functions/Manager"

function CardButton({ info }) {
    const [cardInfo, setCardInfo] = useState(info)

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
