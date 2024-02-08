import { FlatList, Modal, StyleSheet, View, Text, Pressable, Image } from 'react-native'
import OrderItem from '../components/OrderItem'
import { useGetOrdersQuery } from '../services/shopService'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import vacio from '../../assets/img/vacio.png'

const OrdersScreen = () => {
  const localId = useSelector(state => state.authReducer.localId)
  const { data, isLoading, error } = useGetOrdersQuery(localId)
  const [orderData, setOrderData] = useState([])
  const [orderIdSelected, setOrderIdSelected] = useState("")
  const [orderSelected, setOrderSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    if (data) {
      const orderData = Object.values(data)
      setOrderData(orderData)
    }
  }, [data, isLoading])

  useEffect(() => {
    console.log(orderIdSelected)
    const orderSelected = orderData.find(order => order.orderId === orderIdSelected)
    setOrderSelected(orderSelected)
  }, [orderIdSelected])

  console.log(orderSelected)

  const renderOrderItem = ({ item }) => {
    return (
      <OrderItem order={item} setOrderId={setOrderIdSelected} setModalVisible={setModalVisible} />
    )
  }

  return (

    <View>
      {orderData.length === 0 ? (
        <View>
          <Text style={styles.emptyVacio}>No hay órdenes por aqui!</Text>
          <Image source={vacio} style={styles.vacio} resizeMode='contain' />
        </View>)
        :
        (<FlatList
          data={orderData}
          renderItem={renderOrderItem}
        />)}
      <Modal visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Total: ${orderSelected?.total}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>

  )
}

export default OrdersScreen

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  vacio: {
    width: '85%',
    marginLeft: 20,
  },
  emptyVacio: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    marginTop: 50,
    marginLeft: 50,
  },
});