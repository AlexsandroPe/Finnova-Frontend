import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native";



type servicesProps = {
    name: string; 
    icon: string; 
    route: string; 
}

export default function AccountService({name, icon, route}: servicesProps) {

    // const {navigation} = useNavigation();
    return (
        <Pressable>
            
            <Text>{name}</Text>
        </Pressable>
    )
}