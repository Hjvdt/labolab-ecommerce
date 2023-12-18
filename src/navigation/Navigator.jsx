import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Header from "../components/Header";

import CategoriesScreen from '../screens/CategoriesScreen'
import ProductsByCategoryScreen from '../screens/ProductsByCategoryScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="C A T E G O R I A S"
                screenOptions={
                    ({ navigation, route }) => ({
                        header: () => <Header title={route.name} navigation={navigation} />
                    })
                }>
                <Stack.Screen
                    name="C A T E G O R I A S"
                    component={CategoriesScreen}
                />
                <Stack.Screen
                    name="products"
                    component={ProductsByCategoryScreen}
                    options={{ title: 'Productos' }}
                />
                <Stack.Screen
                    name="D E T A L L E"
                    component={ProductDetailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator
