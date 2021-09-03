import React from 'react'
import { View, Text, FlatList } from 'react-native';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import MealCard from '../../components/Cards/MealCard';
import useFetch from '../../hooks/useFetch';
import { API_MEALS } from '../../APIs'

const Meals = ({ route, navigation }) => {
    const { strCategory } = route.params;
    const { loading, data, error } = useFetch(`${API_MEALS}=${strCategory}`);



    const handleMealSelection = (idMeal) => {
        navigation.navigate('RecipePage', { idMeal });
    };

    const renderProduct = ({ item }) => (
        <MealCard product={item} onSelect={() => handleMealSelection(item.idMeal)} />
    );

    if (loading) {
        return <Loading />
    }

    if (error) {
        console.log(error);
        return <Error />;
    }

    return (
        <View style={{ backgroundColor: '#fcc46f' }}>
            <FlatList keyExtractor={data => data.idMeal} data={data.meals} renderItem={renderProduct} />
            <Text> asd </Text>
        </View>
    );
};

export default Meals;

