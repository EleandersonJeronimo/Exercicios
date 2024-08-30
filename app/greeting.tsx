import { Text, View, StyleSheet } from "react-native";

type GreetingType = {
    name: string;
    age: number;
}

export const Greeting2 = (prop : GreetingType) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Nome: {prop.name} - Idade: {prop.age}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f8ff"
    },
    text: {
        color: "#ff4500",
        fontSize: 24,
        fontWeight: "bold"
    }
})