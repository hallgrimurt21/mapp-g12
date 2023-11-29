import React from "react"
import { FlatList, Text, View, StyleSheet, ScrollView } from "react-native"
import data from "../resources/data.json"
import Card from "./card/Card"
import List from "./List"

export default function Lister({ board }) {
    const lists = data.lists.filter((list) => list.boardId === board.id)
    return (
        <><Text style={styles.title}>{board.name}</Text>
        <ScrollView style={styles.lister} horizontal={true} pagingEnabled>

            {lists.map((list) => (
                <List key={list.id} list={list} />
            ))}
        </ScrollView></>
    )
}

const styles = StyleSheet.create({
    carder: {
        flexDirection: "column",
    },
    texas: {
        fontSize: 20,
        alignSelf: "center",
    },
    lister: {
        width: "100%",
        marginHorizontal: 20,
        flexDirection: "row",
    },
    title: {
        backgroundColor: "gold",
        fontSize: 28,
        alignSelf: "stretch" ,
        fontWeight: "bold",
        color: "navy",
    },
})
