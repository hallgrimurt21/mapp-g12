import { StyleSheet } from "react-native"
import react from "react"

export const shadows = StyleSheet.create({
    smallShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -1,
        },
        shadowOpacity: 0.25,
    },
    smallUnder: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
    },
    mediumShadow: {
        borderWidth: 1,
        borderColor: "#000",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.25)",
    },
})
