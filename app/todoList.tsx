import React, { useState } from "react";
import { View } from "react-native";
import { ListItem } from "./ListItem";
import { NewChore } from "./newChore";

type Chore = {
    name: string;
    done: boolean;
};

const initialChores: Chore[] = [
    { name: "Do the dishes", done: false },
    { name: "Study React", done: true },
    { name: "Walk the dog", done: false },
];

export function TodoList() {
    const [chores, setChores] = useState<Chore[]>(initialChores);

    const handleCheckboxChange = (index: number) => {
        const updatedChores = [...chores];
        updatedChores[index].done = !updatedChores[index].done;
        setChores(updatedChores);
    };

    const appendChore = (newChoreName: string) => {
        const newChore = { name: newChoreName, done: false };
        setChores([...chores, newChore]);
    };

    return (
        <View>
            <NewChore onAdd={appendChore} />
            {chores.map((chore, index) => (
                <ListItem
                    key={index}
                    index={index}
                    chore={chore.name}
                    done={chore.done}
                    onToggle={() => handleCheckboxChange(index)}
                />
            ))}
        </View>
    );
}