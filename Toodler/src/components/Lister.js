import React from "react"
import { View, StyleSheet, ScrollView, Button } from "react-native"
import data from "../resources/data.json"
import List from "./List"
import { offWhite, white } from "../styles/colors"
import { deviceWidth } from "../styles/deviceWidth"

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
            <View>
                <View style={styles.newList}>
                    <Button style={styles.newbie} title="New List" />
                </View>
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
        marginHorizontal: 0,
        flexDirection: "row",
    },
    newList: {
        marginTop: 0,
        flexDirection: "column",
        alignSelf: "center",
        alignContent: "center",
        backgroundColor: white,
        width: deviceWidth * 0.95,
        marginBottom: 10,
        borderRadius: 5,
    },
    newListDad: {
        alignSelf: "stretch",
        width: deviceWidth,
    },
})
