import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/shopService';
import { useDispatch } from 'react-redux'
import { removeItem, clearCart } from '../features/cartSlice'
import cart from '../../assets/img/cart.png'

const CartScreen = ({ navigation }) => {

  const localId = useSelector(state => state.authReducer.localId)
  const dispatch = useDispatch()
  const onRemoveItem = (id) => { dispatch(removeItem({ id })) }
  const cartItems = useSelector(state => state.cartReducer.items)
  const total = useSelector(state => state.cartReducer.total)
  const [triggerPost, result] = usePostOrderMutation()

  const confirmCart = () => {
    const createdAt = Date.now()
    const orderId = Math.ceil(Math.random(1, 10) * 9000)
    const orderData = { total, cartItems, localId: localId, createdAt: createdAt, orderId: orderId }

    triggerPost({ total, cartItems, localId: localId, createdAt: createdAt, orderId: orderId })
      .then(() => {
        dispatch(clearCart({}));
        navigation.navigate('OrderStack', { screen: 'orders' })
      })
  }

  const renderCartItem = ({ item }) => (
    <CartItem item={item} onRemoveItem={onRemoveItem} />
  )

  return (
    <View style={styles.cartContainer}>
      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyCartText}>Su carrito esta vacío</Text>
          <Image source={cart} style={styles.cart} resizeMode='contain' />
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={item => item.id}
          />
          <View style={styles.cartConfirm}>
            <Text style={styles.totalPrice}>TOTAL: $ {total.toFixed(2)}</Text>
            <TouchableOpacity style={styles.confirmButton} onPress={confirmCart}>
              <Text style={styles.textConfirm}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
  emptyCart: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    width: '50%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.textLight,
    marginVertical: 50,
  },
  cartConfirm: {
    marginBottom: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  totalPrice: {
    fontSize: 16,
    fontFamily: 'PlayfairDisplay-Bold',
    marginTop: 40,
  },
  confirmButton: {
    backgroundColor: colors.cards,
    padding: 10,
    borderRadius: 10,
    marginTop: 40,
  },
  textConfirm: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 16,
    color: colors.texto,
  }
})