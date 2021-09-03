import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { useDispatch } from 'react-redux';


import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Recipe from './pages/Recipe';


const Stack = createStackNavigator();


const Router = () => {

  // const dispatch = useDispatch()

  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen  name="Categories" component={Categories}
          options={{
            title: 'Categories',
            headerStyle: { backgroundColor: 'white' }, headerTitleStyle: { fontSize: 25 },
            headerTintColor: '#fcc46f', headerTitleAlign: 'center'
            
          }}
          
        />
        <Stack.Screen name="MealsPage" component={Meals}
          options={{
            title: 'Meals',
            headerStyle: { backgroundColor: 'white' }, headerTitleStyle: { fontSize: 25 },
            headerTintColor: '#fcc46f', headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="RecipePage" component={Recipe}
          options={{
            title: 'Recipe',
            headerStyle: { backgroundColor: 'white' }, headerTitleStyle: { fontSize: 25 },
            headerTintColor: '#fcc46f', headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;