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
            <InicioPantalla/>
            
        </View>
        
    )
}
export default Main
