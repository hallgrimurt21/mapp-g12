import { StyleSheet } from "react-native"
import React from "react"
import { deviceWidth, deviceHeight } from "../../styles/deviceWidth"
import { white, black } from "../../styles/colors"

const styles = StyleSheet.create({
    container: {
        alignSelf: "flex",
        width: deviceWidth * 0.95, // 95% of the device width
        maxWidth: 450, // max width of 500
        borderRadius: 5,
        marginLeft: Math.min(deviceWidth * 0.025, 10),
        marginRight: Math.min(deviceWidth * 0.025, 10),
        marginTop: 10,
        overflow: "hidden",
    },
    text: {
        color: black,
        fontSize: 20,
        fontWeight: "bold",
        flexDirection: "row",
        alignContent: "center",
        padding: 5,
    },
    adder: {
        backgroundColor: white,
        marginTop: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    titler: {
        backgroundColor: white,
        alignSelf: "flex-start",
        marginBottom: 3,
        borderRadius: 2,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 0,
    },
    butRad: {
        borderRadius: 5,
    },
    carder: {
        flexDirection: "column",
        maxHeight: deviceHeight * 0.68,
    },
})

export default styles