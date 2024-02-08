import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";

import CategoriesScreen from '../screens/CategoriesScreen'
import ProductsByCategoryScreen from '../screens/ProductsByCategoryScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="CATEGORIAS"
            screenOptions={
                ({ navigation, route }) => ({
                    header: () => <Header title={route.name} navigation={navigation} />
                })
            }>
            <Stack.Screen
                name="CATEGORIAS"
                component={CategoriesScreen}
            />
            <Stack.Screen
                name="products"
                component={ProductsByCategoryScreen}
                options={{ title: 'Productos' }}
            />
            <Stack.Screen
                name="DETALLE"
                component={ProductDetailScreen}
            />
        </Stack.Navigator>
    )
}

export default ShopNavigator
