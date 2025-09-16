import {Pressable, PressableProps, Text} from "react-native"

type ButtonProps = PressableProps & {
    title: string;
    variant: string;
    onPress: () => void;
}     
const Button = ({title, onPress, variant}:ButtonProps) => {
    return (
        <Pressable>
            <Text>{title}</Text>
        </Pressable>
    )
}