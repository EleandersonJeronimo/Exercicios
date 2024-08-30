import { Text } from "react-native";
import { useEffect, useState } from "react";

export const Timer = () => {
    const [time, setTime] = useState(0)

    useEffect(() => {
        const tot = setInterval(() => setTime(s => s + 1), 1000)
        return() => clearInterval(tot)
    }, [])

    return(
        <Text>{time}</Text>
    )
}