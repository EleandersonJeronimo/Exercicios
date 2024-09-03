import { Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export const LoginForm = () => {
    const [usuario, setUsuario] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    const Alert = () => {
        alert(`Seu nome é ${usuario} e sua senha é ${senha}`)
    }

    return(
        <View>
            <TextInput
                placeholder="Digite seu nome"
                onChangeText={(text) => setUsuario(text)}
            />

            <TextInput
                placeholder="Digite sua senha"
                secureTextEntry={true}
                onChangeText={(text) => setSenha(text)}
            />
            

            <Button title="Revelar" onPress={Alert}/>
        </View>
    )
}