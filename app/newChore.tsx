import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";

type NewChoreProps = {
    onAdd: (newChore: string) => void;
};

export function NewChore({ onAdd }: NewChoreProps) {
    const [newChore, setNewChore] = useState("");

    const handleAddChore = () => {
        if (newChore !== "") {
            onAdd(newChore);
            setNewChore(""); // Limpa o campo após adicionar a tarefa
        }
    };

    return (
        <View>
            <TextInput 
                value={newChore} 
                onChangeText={(text) => setNewChore(text)} 
                placeholder="Nova tarefa" 
            />
            <Button title="Adicionar" onPress={handleAddChore} />
        </View>
    );
}


