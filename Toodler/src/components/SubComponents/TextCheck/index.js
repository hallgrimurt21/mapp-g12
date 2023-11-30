import { View, Text } from "react-native"
import React, { useEffect, useState } from "react"
import Checkbox from "expo-checkbox"
import styles from "./styles"
import { getX, changeX, get1X } from "../../Functions/storage"

function TextCheck({ info }) {
    const [isChecked, setChecked] = useState(info.isFinished)
    ////////////////update the task's isFinished value in storage
    useEffect(() => {
        info.isFinished = isChecked
        getX("tasks").then((tasks) => {
            tasks[info.id] = info
            changeX("tasks", info.id, info)
        })
    }, [isChecked])

    ////////////////check if the isFinished value is updated
    // useEffect(() => {
    //     get1X("tasks", info.id).then((task) => {
    //         console.log(task)
    //     })
    // }, [isChecked])

    /////////////////////////////////
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{info.name}</Text>
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
