import React from "react"
import {
    FlatList,
    Text,
    View,
    StyleSheet,
    ScrollView,
    Button,
} from "react-native"
import data from "../resources/data.json"
import Card from "./card/Card"
import List from "./List"
import { handleAddTask } from "../views/Main/index"

export default function Lister({ board }) {
    const lists = data.lists.filter((list) => list.boardId === board.id)
    return (
        <>
            <>
                <ScrollView
                    style={styles.lister}
                    horizontal={true}
                    pagingEnabled
                >
                    {lists.map((list) => (
                        <List key={list.id} list={list} />
                    ))}
                </ScrollView>
            </>
            <View style={styles.newList}>
                <Button title="New List" onPress={handleAddTask} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    carder: {
        flexDirection: "column",
    },
    texas: {
        fontSize: 20,
    },
    lister: {
        width: "100%",
        marginHorizontal: 20,
        flexDirection: "row",
    },
    newList: {
        flexDirection: "column",
        alignSelf: "stretch",
        alignContent: "center",
    },
})
