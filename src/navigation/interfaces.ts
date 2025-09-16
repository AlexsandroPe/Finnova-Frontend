import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs'
export type propsStackRoutes = {
    Login: undefined;
    Register: undefined;
    BottomTabs: undefined;
}
export type propsBottomTabsRoutes = {
    Home: undefined;
    Account: undefined;
}

export type PropsStackSCreenApp = NativeStackScreenProps<propsStackRoutes>
export type PropsBottomSCreenApp = BottomTabScreenProps<propsBottomTabsRoutes>