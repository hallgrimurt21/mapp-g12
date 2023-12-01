import React, { useRef, useEffect } from "react"
import { Animated, Pressable } from "react-native"
import Card from "../Card"

function CardButton({ info }) {
    return (
        <Pressable>
            <Card info={info} />
        </Pressable>
    )
}

export default CardButton
