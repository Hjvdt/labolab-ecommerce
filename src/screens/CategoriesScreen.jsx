import {View, Text, StyleSheet, FlatList} from 'react-native'
import CategoryItem from '../components/CategoryItem'
import { useSelector } from 'react-redux'
import { useGetCategoriesQuery } from '../services/shopService'

const CategoriesScreen = ({navigation}) => {
    const {data, isLoading, error} = useGetCategoriesQuery()
    
    const renderCategoryItem = ({item}) => (
        <CategoryItem category={item} navigation={navigation} />
    )

    return(
        <>
        <FlatList
            data={data}
            renderItem={renderCategoryItem}
            keyExtractor={item=>item}
        />
        </>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    categories:{
        marginBottom:90,
    }
})
