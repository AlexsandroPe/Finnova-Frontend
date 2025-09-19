import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Account from "../../screens/Account";
import { BottomTabsParamList } from "../interfaces";

const {Navigator, Screen} = createBottomTabNavigator<BottomTabsParamList>();


export default function BottomTabsRoutes() {
    return (
        <Navigator initialRouteName="Home"> 
            <Screen name="Home" component={Home}/>
            <Screen name="Account" component={Account}/>
        </Navigator>
    )
}