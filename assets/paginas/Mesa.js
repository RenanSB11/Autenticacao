import React from "react";
import {Button, Text, TextInput } from '@react-native-material/core';
import { View, StyleSheet } from "react-native";
import { UsuarioContexto } from "../contextos/UsuarioContexto";

const Mesa = ({navigation}) => {

    const [usuario,alteraUsuario] = React.useContext(UsuarioContexto)
    console.log (usuario)
    return ( 
        <View>
            <Text>Selecionar Mesa </Text>
            <TextInput label="Numero da Mesa"/>
            <Button style={e.botao} title="Continuar" /> 
        </View>
     );
}

const e=StyleSheet.create({
    botao:{
        borderRadius: 22,
        padding: 5,
        fontSize: 16,
        marginTop: 20,
        backgroundColor: '#F2A922',
        color: "#000"
    }
})
 
export default Mesa;