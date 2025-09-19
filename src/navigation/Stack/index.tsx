import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/Login';
import RegisterUser from '../../screens/RegisterUser';
import BottomTabsRoutes from '../BottomTabs';
import { StackParamList } from "../interfaces"

const {Navigator, Screen} = createNativeStackNavigator<StackParamList>();

const StackRoutes = () => {
    return (
            <Navigator initialRouteName='Login'>
                <Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
                <Screen name='Register' component={RegisterUser} options={{headerShown: false}}/>
                <Screen name='BottomTabs' component={BottomTabsRoutes} options={{headerShown: false}}/>
            </Navigator>
    )
}

export default StackRoutes;
