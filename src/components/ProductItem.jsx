import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { colors } from '../global/colors'
import { useDispatch } from 'react-redux'
import { setProductIdSelected, setProductSelected } from '../features/shopSlice'

const ProductItem = ({ product, navigation }) => {
    const dispatch = useDispatch()
    return (
        <TouchableOpacity onPress={() => {
            dispatch(setProductIdSelected(product.id))
            dispatch(setProductSelected(product.id))
            navigation.navigate("DETALLE", product.id)
        }
        } style={styles.containerProductItem}>
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