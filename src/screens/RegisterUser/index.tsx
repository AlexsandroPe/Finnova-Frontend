
import { Text, View } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'

const RegisterUser = () => {
    return (
        <SafeAreaView style={{paddingHorizontal: 16}}>
            <View>
                <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center"}}>register user screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default RegisterUser;