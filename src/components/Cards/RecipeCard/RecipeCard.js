import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';


import styles from './RecipeCard.style';


const RecipeCard = ({ product }) => {
    return (
        <View style={{ flex: 1 }} >
            <Image style={styles.image} source={{ uri: product.strMealThumb }} />
            <View style={styles.container}>
                <Text style={styles.header}>{product.strMeal}</Text>
                <Text style={styles.area}>{product.strArea}</Text>
                <View style={styles.line}>
                </View>
                <Text style={styles.recipe}>{product.strInstructions}</Text>
                <View >
                    <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL(`${product.strYoutube}`) }}>
                        <Text style={styles.button_text}>Watch on Youtube</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default RecipeCard;