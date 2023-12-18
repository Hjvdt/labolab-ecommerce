import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { colors } from '../global/colors'

const ProductItem = ({ product, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("D E T A L L E", product.id)} style={styles.containerProductItem}>
            <Text style={styles.productTitle}>{product.title}</Text>
            <Image
                style={styles.productImage}
                resizeMode='cover'
                source={{ uri: product.images }}
            />
        </TouchableOpacity>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    containerProductItem: {
        flexDirection: 'row',
        backgroundColor: colors.cards,
        justifyContent: 'space-between',
        padding: 10,
        margin: 10,
    },
    productTitle: {},
    productImage: {
        width: 60,
        height: 60,
    }
})