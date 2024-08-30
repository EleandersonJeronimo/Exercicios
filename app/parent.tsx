import { Text, View } from "react-native";
import { useState } from "react";
import { Child } from "./child";

export const Parent = () => {
    const [text, setText] = useState<string>('Nada');

    return(
        <View>
            <Text>{text}</Text>
            <Child setText={setText} />
        </View>
    )
}