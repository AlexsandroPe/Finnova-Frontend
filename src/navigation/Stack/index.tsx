import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/login';
import RegisterUser from '../../screens/RegisterUser';
import HomeScreen from '../../screens/home';

const {Navigator, Screen} = createNativeStackNavigator();

const StackRoutes = () => {
    return (
            <Navigator initialRouteName='Login'>
                <Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
                <Screen name='Register' component={RegisterUser} options={{headerShown: false}}/>
                <Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
            </Navigator>
    )
}

export default StackRoutes;
