import { StyleSheet, Dimensions } from "react-native"
import React from "react"
import { white } from "../../styles/colors"
import { deviceWidth } from "../../styles/deviceWidth"

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

export default styles
