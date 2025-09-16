import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native";
import { PropsBottomSCreenApp} from "../../navigation/interfaces";



type servicesProps = PropsBottomSCreenApp & {
    name: string; 
    icon: string; 
    route: string; 
}

export default function AccountService({name, icon, route}: servicesProps) {

    const {navigation} = useNavigation<servicesProps>();
    return (
        <Pressable onPress={() => navigation.navigate('Account')}>
            <Text>{name}</Text>
        </Pressable> 
    )
}