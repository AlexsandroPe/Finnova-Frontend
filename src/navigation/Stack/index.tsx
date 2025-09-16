import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/Login';
import RegisterUser from '../../screens/RegisterUser';
import { propsStackRoutes } from '../interfaces';

const {Navigator, Screen} = createNativeStackNavigator<propsStackRoutes>();

const StackRoutes = () => {
    return (
            <Navigator initialRouteName='Login'>
                <Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
                <Screen name='Register' component={RegisterUser} options={{headerShown: false}}/>
                <Screen name='BottomTabs' component={RegisterUser} options={{headerShown: false}}/>
            </Navigator>
    )
}

export default StackRoutes;
