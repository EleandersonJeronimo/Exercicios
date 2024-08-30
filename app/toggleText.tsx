import { Text, View, Button } from "react-native";
import { useState } from "react";

export const ToggleText = () => {
    const [Text1, setText1] = useState(true);

    const handleToggle = () => {
        setText1(!Text1)
    };

    return(
        <View>
            <Text>{Text1 ? 'Santos' : 'Real Madrid'}</Text>
            <Button title="Mudar texto" onPress={handleToggle}/>
        </View>
    )
}