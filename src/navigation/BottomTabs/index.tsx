import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Account from "../../screens/Account";
import { propsBottomTabsRoutes } from "../interfaces";

const {Navigator, Screen} = createBottomTabNavigator<propsBottomTabsRoutes>();


export default function BottomTabsRoutes() {
    return (
        <Navigator> 
            <Screen name="Home" component={Home}/>
            <Screen name="Account" component={Account}/>
        </Navigator>
    )
}