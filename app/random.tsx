import { Text, View, Button } from "react-native";
import { useState } from "react";

export const Random = () => {
    const[num, setNum] = useState<number>()

    const sort = () => {
        const index = Math.floor(Math.random() * 101)
        setNum(index)
    }

    return(
        <View>
            <Text>{num}</Text>
            <Button title="Sortear" onPress={sort}
            />
        </View>
    )
}

// 6)import { Text, View, Button } from "react-native";
// import { useState } from "react";

// type RandomItemProps = {
//     items: string[];
// }

// export const Random = ( {items} : RandomItemProps) => {
//     const[num, setNum] = useState<string>('')

//     const sort = () => {
//         const index = Math.floor(Math.random() * items.length);
//         setNum(items[index]);
//     }

//     return(
//         <View>
//             <Text>{num}</Text>
//             <Button title="Sortear" onPress={sort}
//             />
//         </View>
//     )
// }