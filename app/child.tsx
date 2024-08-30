import { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

type ChildProps = {
    setText: (value : string) => void
}

export const Child = ({setText} : ChildProps) => {
    const [inputValue, setInputValue] = useState('')
    return(
        <View>
            <TextInput placeholder="Digite algo" onChange={(e) => setInputValue(e.target.value)}/> <br />

            <Button title="Teste" onPress={() => setText(inputValue)}/>
        </View>


    )
}