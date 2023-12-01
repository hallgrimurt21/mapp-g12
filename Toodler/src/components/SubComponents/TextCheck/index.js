import { View, Text } from "react-native"
import React, { useEffect, useState } from "react"
import Checkbox from "expo-checkbox"
import styles from "./styles"
import { getX, changeX, get1X } from "../../../Functions/storage"
import { changeTask } from "../../../Functions/Manager"

function TextCheck({ info }) {
    const [isChecked, setChecked] = useState(info.isFinished)
    const [taskInfo, setTaskInfo] = useState(info)

    ////////////////update info in component
    useEffect(() => {
        setTaskInfo(info)
    }, [info])

    ////////////////update the task's isFinished value in storage
    useEffect(() => {
        info.isFinished = isChecked
        changeTask(info)
    }, [isChecked])

    /////////////////////////////////
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{taskInfo.name}</Text>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                onPress={() => setChecked(!isChecked)}
                textStyle={{ marginLeft: 8 }}
                size={10} // Adjust the size to control the border width indirectly
            />
        </View>
    )
}

export default TextCheck
