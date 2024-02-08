import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Card from './Card'
import { colors } from '../global/colors'
import { Feather } from '@expo/vector-icons';


const CartItem = ({ item, onRemoveItem }) => {
    const handleRemoveItem = () => {
        onRemoveItem(item.id)
    }
    return (
        <Card style={styles.cartItemContainer}>
            <Image
                style={styles.imageCartItem}
                resizeMode='cover'
                source={{ uri: item.image }}
            />
            <View >
                <Text style={styles.cartTitle}>{item.title}</Text>
                <Text style={styles.cartLightText}>{item.brand}</Text>
                <Text style={styles.cartLightText}>${item.price} c/u</Text>
                <Text style={styles.cartQuantity}>Cantidad: {item.quantity} c/u</Text>
                <Text style={styles.cartTotalPrice}>
                    Cantidad: {item.quantity}, Total: ${item.price * item.quantity}
                </Text>
            </View>
            <TouchableOpacity style={styles.trashCart} onPress={handleRemoveItem}>
                <Feather name="trash" size={24} color="black" />
            </TouchableOpacity>
        </Card>
    )
}

export default CartItem

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },

    cartContenContainer: {
        flexDirection: 'row',
    },
    imageCartItem: {
        height: 10,
        width: 10,
        marginRight: 1,
    },
    trashCart: {
        marginLeft: 'auto',
    },
    cartTitle: {
        fontFamily: 'PlayfairDisplay-Bold',
        textTransform: 'capitalize',
        fontSize: 20
    },
    cartLightText: {
        fontFamily: 'PlayfairDisplay-regular',
        textTransform: 'capitalize',
        fontSize: 15,
    },
    cartQuantity: {
        textTransform: 'capitalize',
        fontSize: 14,
        color: colors.greyLabel,
    },
    cartTotalPrice: {
        fontFamily: 'PlayfairDisplay-Bold',
        textTransform: 'capitalize',
        fontSize: 16,
        color: colors.primary,
    }
})