import React from "react";

import { StatusBar, Text, View, Image, StyleSheet, ImageBackground, Platform, Dimensions } from "react-native";
import { useFonts } from 'expo-font';

const image = require('../../images/fondo.jpg');

// yoha - Este calculo sirve para obtener la altura de la pantalla sin la barra de navegación
const screenHeight = Dimensions.get('screen').height;
const navbarHeight = screenHeight - StatusBar.currentHeight;

export const InicioPantalla = () => {

    // yoha - Añado la fuente de Apple mediante expo-fonts
    let [fontsLoaded] = useFonts({
        'SF Pro': require('../../assets/fonts/SF-Pro-Display-Regular.otf'),
    });


    return (
        <ImageBackground source={image} style={stylesInicio.imageBackground}>
            <View style={stylesInicio.container}>
                <View style={stylesInicio.section}>
                    <View style={stylesInicio.textColumn}>
                        <Text style={stylesInicio.text}>Research</Text>
                        <Text style={stylesInicio.text}>Rave</Text>
                    </View>
                    <Image style={stylesInicio.logo} source={require('../../images/quagmire.jpeg')} />
                </View>

                <View style={stylesInicio.section}>
                    <Text>v0.0.1</Text>
                    <View style={stylesInicio.textColumn}>
                        <Text style={stylesInicio.titulo}>Festia</Text>
                        <Text style={stylesInicio.text}>més que una app</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

const stylesInicio = StyleSheet.create({
    imageBackground:{
        width: '100%',
        height: Platform.OS === 'android' ? navbarHeight : '100vh',
    },
    container: {
        width: '100%',
        height: Platform.OS === 'android' ? navbarHeight : '100vh',
        display: 'flex',
        justifyContent: 'space-between',
        padding: 16,
    },
    section: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'space-between',
        flexDirection: 'row',
    },
    textColumn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'space-between',
        gap: 10,
    },
    titulo: {
        fontSize: 40,
        fontFamily: 'SF Pro',
        lineHeight: 40, 
    },
    text: {
        fontSize: 20,
        fontFamily: 'SF Pro',
        lineHeight: 20, 
    },
    logo: {
        width: 100,
        height: 100,
    },
});

