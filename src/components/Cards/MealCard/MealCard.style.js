import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        minWidth: 300,
        height: 200,
        borderWidth: 1,
        borderColor: '#bdbdbd',
        backgroundColor: 'white',
        margin: 8,
        borderRadius: 15,
        backgroundColor: 'red',
        overflow: 'hidden',

    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 15,


    },
    body_container: {
        backgroundColor: 'red',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',

    },
    title_bar: {

        height: 35,
        backgroundColor: 'black',
        opacity: 0.45,
        width: '100%',
        position: 'absolute',
    },
    title: {
        //width: '80%',
        height: 37,
        flexGrow: 0,
        fontSize: 27,
        alignSelf: 'flex-end',
        position: 'absolute',
        paddingHorizontal: 10,
        margin: 20,
        textAlign: 'right',
        color: 'white',
        fontWeight: 'bold',

    },

});