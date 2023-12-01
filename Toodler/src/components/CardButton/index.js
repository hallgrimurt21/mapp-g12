import React, { useRef, useEffect, useState } from "react"
import { Animated, Pressable } from "react-native"
import Card from "../Card"
import { changeTask } from "../../Functions/Manager"

function CardButton({ info: initialInfo }) {
    const [info, setInfo] = useState(initialInfo)
    const fadeAnim = useRef(new Animated.Value(1)).current

    const handlePressIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 0.5,
            duration: 200,
            useNativeDriver: true,
        }).start()
    }

    const handlePressOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start()
        setInfo((prevInfo) => {
            const updatedInfo = {
                ...prevInfo,
                isFinished: !prevInfo.isFinished,
            }
            changeTask(updatedInfo)
            return updatedInfo
        })
    }

    return (
        <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
            <Animated.View style={{ opacity: fadeAnim }}>
                <Card info={info} />
            </Animated.View>
        </Pressable>
    )
}

export default CardButton
