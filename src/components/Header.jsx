import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../global/colors'

const logo = require('../../assets/logoVdt4.png');

const Header = ({ title, navigation }) => {
    return (
        
        <View style={styles.headerContainer}>
            {
                navigation.canGoBack()
                    ?
                    <TouchableOpacity onPress={navigation.goBack}>
                        <AntDesign name="caretleft" size={20} color="white" />
                    </TouchableOpacity>
                    :
                    <View></View>
            }
            <Image source={logo} style={styles.logo} />
            <Text style={styles.headerTitle}>{title}</Text>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    headerTitle: {
        color: colors.htitle,
        fontFamily: 'Karla-Bold',
        fontSize: 20,
    },
    logo: {
        width: 90, 
        height: 90, 
        marginTop: 20,
        marginRight: 95,
    },
})