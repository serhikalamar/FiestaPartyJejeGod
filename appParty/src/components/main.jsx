import React from "react";
import { Text,  View } from "react-native";
import Constants from 'expo-constants'
import { InicioPantalla } from "./inicio.jsx";
import { InicioSesion } from "./inicioSesion.jsx";

const Main = () => {
    return(
        <View style={{
            marginTop: Constants.statusBarHeight,
            flexGrow: 1
        }}>
            <Text>Nigga XD</Text>
            <InicioPantalla/>
            <InicioSesion />
        </View>
        
    )
}
export default Main
