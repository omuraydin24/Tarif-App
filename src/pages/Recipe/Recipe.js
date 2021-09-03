import React from 'react';
import { View, FlatList } from 'react-native';

import styles from './Recipe.style';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import RecipeCard from '../../components/Cards/RecipeCard';
import { API_RECIPE } from '../../APIs'


const Recipe = ({ route }) => {
    const { idMeal } = route.params;
    const { loading, error, data } = useFetch(`${API_RECIPE}=${idMeal}`);

    const renderProduct = ({ item }) => <RecipeCard product={item} />

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />;
    }


    return (
        <View style={styles.container}>
            <FlatList
                data={data.meals}
                keyExtractor={(item) => item.idMeal}
                renderItem={renderProduct}
            />
        </View>
    )
}

export default Recipe;