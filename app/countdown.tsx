import { View, Text, Button } from "react-native";
import { useState, useEffect } from "react";

export const Countdown = () => {
    const [cont, setCont] = useState(10);

    useEffect(() => {
        console.log('O valor foi decrementado');
    }, [cont]);

    return(
        <View>
            <Text>{cont}</Text>
            <Button title="Decrementar" onPress={() => setCont(cont - 1)}
            />
        </View>
    )
}