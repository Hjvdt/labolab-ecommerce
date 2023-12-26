import { Text, StyleSheet, TouchableOpacity } from "react-native"
import Card from './Card'
import { colors } from '../global/colors'

const CategoryItem = ({ category, navigation }) => {
    return (
        <TouchableOpacity onPress={()=>navigation.navigate("products",{category})}>
            <Card style={styles.cardContainer} elevation={5}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </TouchableOpacity>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.cards,
        padding: 20,
        margin: 10,
        borderRadius: 10,
        
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 15
    }
})