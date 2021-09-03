import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  image: {
    width: '100%',
    height: 270,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  container: {
    marginHorizontal: 5,
  },
  line: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginVertical: 5,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'darkred'
  },

  area: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'darkred',
  },
  recipe: {
    fontWeight: 'bold',
  },
  button: {
    margin: 15,
    borderRadius: 10,
    backgroundColor: 'red',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
   },
   button_text: {
     color: 'white',
     fontWeight: 'bold',
     fontSize: 17,
   }

});