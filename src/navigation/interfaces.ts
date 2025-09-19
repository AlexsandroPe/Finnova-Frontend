
import { NavigatorScreenParams } from "@react-navigation/native";

export type BottomTabsParamList = {
    Home: undefined;
    Account: undefined;
}

export type StackParamList = {
    Login: undefined; 
    Register: undefined;
    BottomTabs: NavigatorScreenParams<BottomTabsParamList>;
}



