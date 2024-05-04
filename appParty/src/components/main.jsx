import React from "react";
import { Text, Vierw, View } from "react-native";
import Constants from 'expo-constants'

const Main = () => {
    return(
        <Vierw style={{
            marginTop: Constants.statusBarHeight,
            flexGrow: 1
        }}>
            <Text>Rate Repository Application</Text>
        </Vierw>
    )
}
export default Main