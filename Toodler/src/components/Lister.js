import React from "react"
import { View, StyleSheet, ScrollView, Button } from "react-native"
import data from "../resources/data.json"
import List from "./List"
import offWhite from "../styles/colors"

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
                <Button style={styles.newbie} title="New List" />
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
