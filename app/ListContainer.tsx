import { View } from "react-native";
import { ListItem } from "./ListItem";

type Grade = {
    nome: string;
    sigla: string;
}

const materias : Grade[] = [
    {nome: 'Banco de dados', sigla: 'XPAD01'},
    {nome: 'Grafos', sigla: 'SMAC03'},
    {nome: 'Engenharia economica', sigla: 'IEPG10'}
]
export const ListContainer = () =>{
    return(
        <View>
            {materias.map((materia, index) => (
                <ListItem key={index}>{`${index}: ${materia.nome}`}</ListItem>
            ))}
        </View>
    )
}