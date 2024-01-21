import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Card from './Card'
import { Feather } from '@expo/vector-icons';
import { colors } from '../global/colors';

const OrderItem = ({ order, total }) => {
    return (
        <Card style={styles.cartItemContainer}>
            <View style={styles.itemContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.createdAt}>
                        Creada el {new Date(order.createdAt).toLocaleString()}
                    </Text>
                    <Text style={styles.total}>Total: ${total}</Text>
                </View>
                <TouchableOpacity style={styles.searchIcon} onPress={null}>
                    <Feather name="search" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </Card>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    itemContainer: {
        backgroundColor: colors.sombra,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
        borderRadius: 10,
    },
    textContainer: {
        flexDirection: 'column',
    },
    searchIcon: {
        marginLeft: 'auto',
    },
    createdAt: {
        fontFamily: 'Karla-regular',
        marginBottom: 5,
    },
    total: {
        fontFamily: 'Karla-Bold',
        fontSize: 14,
    }
})