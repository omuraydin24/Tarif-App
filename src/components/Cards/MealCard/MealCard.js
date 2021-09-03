import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './MealCard.style';

const DetailCard = ({ product, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: product.strMealThumb }} />
                <View style={styles.body_container}>
                    <View style={styles.title_bar}></View>
                    <Text  numberOfLines={1} style={styles.title}>{product.strMeal}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default DetailCard;