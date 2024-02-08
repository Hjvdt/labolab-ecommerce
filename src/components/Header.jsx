import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { colors } from '../global/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';
import { deleteSession } from '../db';
import salir from '../../assets/img/salir.png';
import logo from '../../assets/logoVdt4.png';


const Header = ({ title, navigation }) => {
    const email = useSelector(state => state.authReducer.user)
    const localId = useSelector(state => state.authReducer.localId)
    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(logout())
        deleteSession(localId)
    }

    return (
        <View style={styles.headerContainer}>
            <LinearGradient
                colors={[colors.sombra, colors.primary,]}
                style={styles.background}
                end={{ x: 0.5, y: 0.7 }}
            />
            {
                navigation.canGoBack()
                    ?
                    <TouchableOpacity onPress={navigation.goBack}>
                        <FontAwesome name="hand-o-left" size={24} color="white" />
                    </TouchableOpacity>
                    :
                    <View></View>
            }
            <TouchableOpacity onPress={navigation.CategoriesScreen}>
                <Image source={logo} style={styles.logo}  />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{title}</Text>
            {
                email
                &&
                <TouchableOpacity onPress={onLogout}>
                    <Image source={salir} style={styles.iconSalir}  />
                </TouchableOpacity>
            }
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 30,
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    headerTitle: {
        color: colors.htitle,
        fontFamily: 'PlayfairDisplay-Bold',
        fontSize: 20,
    },
    logo: {
        width: 90,
        height: 90,
        marginTop: 20,
        marginRight: 95,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 100,
    },
    iconSalir: {
        width: 30,
        height: 30,
        resizeMode: "contain",
        marginLeft: 20,
    },
})