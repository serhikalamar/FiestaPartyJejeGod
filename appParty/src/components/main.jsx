import React from "react";
import { Text,  View } from "react-native";
import Constants from 'expo-constants'

const Main = () => {
    return(
        <View style={{
            marginTop: Constants.statusBarHeight,
            flexGrow: 1
        }}>
            <Text>Rate Repository Application</Text>
        </View>
    )
}
export default Main
