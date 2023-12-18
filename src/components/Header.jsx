import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../global/colors'

const Header = ({ title, navigation }) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={navigation.goBack}>
                <AntDesign name="caretleft" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigation.popToTop}>
                <AntDesign name="home" size={24} color="white" />
            </TouchableOpacity>
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
    }
})