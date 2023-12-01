import React, { useRef, useEffect, useState } from "react"
import { Animated, Pressable } from "react-native"
import Card from "../Card"
import { changeTask, get1Task } from "../../Functions/Manager"

function CardButton({ info }) {
    const [card, setCard] = useState(Info)
    const fadeAnim = useRef(new Animated.Value(1)).current

    const handlePressIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 0.5,
            duration: 50,
            useNativeDriver: true,
        }).start()
    }
    return (
        <Pressable>
            <Card info={card} />
        </Pressable>
    )
}

export default CardButton
