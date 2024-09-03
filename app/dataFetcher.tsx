import React, { useState, useEffect } from "react";
import { View, Image, Button, StyleSheet } from "react-native";

export function DataFetcher() {
    const [imagem, setImagem] = useState<string>();

    const fetchImagem = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((resp) => resp.json())
            .then((obj) => {
                setImagem(obj.message);
            });
    };

    useEffect(() => {
        fetchImagem();
    }, []);

    return (
        <View style={styles.container}>
            {imagem && <Image source={{ uri: imagem }} style={styles.image} />}
            <Button title="Mudar Imagem" onPress={fetchImagem} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
});