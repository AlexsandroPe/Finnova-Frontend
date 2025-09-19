import {Pressable, PressableProps, Text} from "react-native"

type ButtonProps = PressableProps & {
    title: string;
    variant: string;
    onPress: () => void;
}     
const Button = ({title, onPress, variant}:ButtonProps) => {
    return (
        <Pressable style={{borderWidth: 1}}>
            <Text>{title}</Text>
        </Pressable>
    )
}