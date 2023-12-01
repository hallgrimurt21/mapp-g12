import { Animated, Text } from "react-native"
import React, { useRef, useEffect, useState } from "react"
import { shadows } from "../../styles/shadows"
import styles from "./styles"
import DescButton from "../SubComponents/DescButton"
import TextCheck from "../SubComponents/TextCheck"

function Card({ info }) {
    const [cardInfo, setCardInfo] = useState(info)
    const fadeAnim = useRef(new Animated.Value(0)).current // Initial value for opacity: 0

    useEffect(() => {
        setCardInfo(info)
    }, [info])

    useEffect(() => {
        Animated.spring(fadeAnim, {
            toValue: 1,
            duration: 1000, // Adjust this value to change the speed
            useNativeDriver: true,
        }).start()
    }, [fadeAnim])

    return (
        <Animated.View
            style={[
                styles.innerContainer,
                shadows.smallShadow,
                { opacity: fadeAnim },
            ]}
        >
            <TextCheck style={styles.texCe} info={cardInfo} />
            <Text style={styles.description}>{cardInfo.description}</Text>
        </Animated.View>
    )
}

export default Card
