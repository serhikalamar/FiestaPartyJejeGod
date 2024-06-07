import React from "react";

import { StatusBar, Text, View, Image, StyleSheet} from "react-native";

const stylesInicio = StyleSheet.create({
    container: {
        backgroundColor: 'blue',

    },
    titulo: {
        fontSize: 40,
    },
});

export const InicioPantalla = () => {
    return( 
        <View style ={stylesInicio.container}>
            <Text>v0.0.1</Text>
            <Text style={stylesInicio.titulo}>Festia</Text>
            <Text>mes que una app</Text>
            <Image source={{url:'appParty/images/fondo.svg'}}/>
        </View>
    )
}

