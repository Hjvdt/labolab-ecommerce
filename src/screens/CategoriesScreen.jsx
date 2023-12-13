import {View, Text, StyleSheet, FlatList} from 'react-native'
import Header from '../components/Header'
import categories_data from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem'

const CategoriesScreen = ({onSelectCategoryEvent}) => {

    const renderCategoryItem = ({item}) => (
        <CategoryItem category={item} onSelectCategoryEvent={onSelectCategoryEvent} />
    )

    return(
        <>
        <Header title="C A T E G O R I A S" />
        <FlatList
            data={categories_data}
            renderItem={renderCategoryItem}
            keyExtractor={item=>item}
        />
        </>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
})
