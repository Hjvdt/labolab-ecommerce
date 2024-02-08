import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import ProfileNavigator from "./ProfileNavigator"
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator";
import { colors } from "../global/colors";
import { Entypo, AntDesign, FontAwesome,FontAwesome5, Fontisto, MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()


const TabNavigator = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <Tab.Screen
                name="ShopStack"
                component={ShopNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Fontisto name="shopping-store" size={24} color="white" />
                    )
                }}
            />
            <Tab.Screen
                name="CartStack"
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons name="add-shopping-cart" size={24} color="white" />
                    )
                }}
            />
            <Tab.Screen
                name="OrderStack"
                component={OrdersNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5 name="clipboard-list" size={24} color="white" />
                    )
                }}
            />
            <Tab.Screen
                name="ProfileStack"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="user-circle-o" size={24} color="white" />
                    )
                }}
            />
        </Tab.Navigator>

    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.primary,
        shadowColor: "#ccc",
        elevation: 1,
        position: "absolute",
        left: 25,
        right: 25,
        bottom: 5,
        height: 40,
        borderRadius: 20,
    }
})