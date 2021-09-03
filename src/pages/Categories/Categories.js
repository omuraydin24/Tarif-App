import React from 'react'
import { View, Text, FlatList } from 'react-native';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import CategoryCard from '../../components//Cards/CategoryCard';
import useFetch from '../../hooks/useFetch';
import { API_CATEGORY } from '../../APIs'

const Categories = ({ navigation }) => {
    const { loading, data, error } = useFetch(`${API_CATEGORY}`); //https://themealdb.com/api/json/v1/1/categories.php

    const handleCategories = strCategory => {
        navigation.navigate('MealsPage', { strCategory });
    };

    const renderProduct = ({ item }) => (
        <CategoryCard product={item} onSelect={() => handleCategories(item.strCategory)} />
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
            <FlatList keyExtractor={data => data.idCategory} data={data.categories} renderItem={renderProduct} />
            <Text> asd </Text>
        </View>
    );
};

export default Categories;

