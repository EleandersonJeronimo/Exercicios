import { useMousePosition } from './useMousePosition';
import { View, Text } from 'react-native';

export const MousePositionComponent = () => {
    const { x, y } = useMousePosition();

    return(
        <View>
            <Text>Posição do mouse: </Text>
            <Text>X: {x}, Y: {y}</Text>
        </View>
    )
}