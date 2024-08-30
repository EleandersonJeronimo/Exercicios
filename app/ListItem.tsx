// 3) import { View, Text } from "react-native";

// export const ListItem = ( {children} ) =>{
//     return(
//         <View>
//             <Text>{children}</Text>
//         </View>
//     )
// }

import React from "react";
import { View, Text } from "react-native";
import CheckBox from "@react-native-community/checkbox";

type ListItemProps = {
    index: number;
    chore: string;
    done: boolean;
    onToggle: () => void;
};

export const ListItem = ({ index, chore, done, onToggle }: ListItemProps) => {
    return (
        <View>
            <CheckBox value={done} onValueChange={onToggle} />
            <Text>
                {index} - {chore}
            </Text>
        </View>
    );
};


