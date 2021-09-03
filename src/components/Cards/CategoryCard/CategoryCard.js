import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './CategoryCard.style';

const RecipeCard = ({ product, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: product.strCategoryThumb }} />
                <View style={styles.body_container}>
                    <View style={styles.title_bar}></View>
                    <Text style={styles.title}>{product.strCategory}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default RecipeCard;