import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../global/colors'

const Header = ({ title }) => {
    return (
        <View style={styles.headerContainer}>
            <Icon name="home" size={25} color={colors.htitle} style={styles.homeIcon} />
            <Icon name="shopping-cart" size={25} color={colors.htitle} style={styles.cartIcon} />
            <Text style={styles.headerTitle}>{title}</Text>
            
        </View>
    )
}


export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    headerTitle: {
        color: colors.htitle,
        fontFamily: 'Karla-Bold'
    },
    homeIcon: {
        position: 'absolute',
        left: 20,
    },
    cartIcon: {
        marginLeft: 290,
    },
})