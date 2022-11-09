import React from "react";
import { View, StyleSheet } from 'react-native';
import axios from "axios";
import { UsuarioContexto } from "../contextos/UsuarioContexto";
import MyInput from "../componentes/MyInput";
import MyButton from "../componentes/MyButton";
import { Button } from "@react-native-material/core";


const Login = ({navigation}) => {

    const [login, alteraLogin]= React.useState('')
    const [senha, alteraSenha]= React.useState('')
    
        const [usuario,alteraUsuario] = React.useContext(UsuarioContexto)

        const autentica = () => {

            const usuario ={
                usuario:login,
                senha:senha
            }

            axios.post("http://10.60.46.31:3001/funcionarios/autentica", usuario)
            .then(res=>{

                if (res.data == 0){
                    alert("Usuario ou senha incorreto ")
                    return
                }

                const usuario_encontrado = res.data[0]
                alteraUsuario(usuario_encontrado)
                navigation.navigate('Mesa');

            })
            .catch(res=>console.log(res))
        }

        const BotaoTelaCadastroPressionado = () => {
            navigation.navigate('Cadastro');
        }
    

        const BotaoTelaEntrarPressionado = () => {
            navigation.navigate('Mesa');
        }
    

    return ( 
        <View style={e.container}>
            <MyInput label='Login' variant='outlined' onChangeText={alteraLogin} placeholder='Nome de usuario'/>
            <MyInput  label='Senha' variant='outlined' onChangeText={alteraSenha} placeholder='Digete sua senha' />
            <MyButton title='Entrar' onPress={()=>autentica()}  />
            <MyButton title='Cadastrar' onPress={BotaoTelaCadastroPressionado} />
        </View>
     );
}

const e=StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        backgroundColor: '#F8F8F8',
    },
})
 
export default Login;