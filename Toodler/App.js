import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { StatusBar } from "expo-status-bar"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Card from "./src/components/card/Card"
import data from "./src/resources/data.json"
import { storeData, getX } from "./src/resources/storage"
import { useEffect } from "react"

export default function App() {
    useEffect(() => {
        storeData(data)
    }, [])

    getX("tasks").then((res) => console.log(res))

    return (
        <View style={styles.container}>
            {data.tasks.map((task, index) => (
                <Card
                    name={task.name}
                    description={task.description}
                    key={index}
                    id={task.id}
                    boardId={task.boardId}
                    isFinished={task.isFinished}
                />
            ))}
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FEFCFF",
        alignItems: "center",
        justifyContent: "center",
    },
})
