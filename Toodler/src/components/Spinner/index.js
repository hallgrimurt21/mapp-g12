import React from "react";
import { ActivityIndicator, View } from "react-native";
import styles from "./styles";

const Spinner = () => {

    return (
        <View style={styles.Spinner}>
            <ActivityIndicator size="large" color="Black" />
        </View>
    )
}

export default Spinner