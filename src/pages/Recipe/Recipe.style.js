import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#bdbdbd',
        backgroundColor: 'white',
        margin: 8,
        borderRadius: 10,

    },
    image: {
        width: 100,
        minHeight: 80,
        resizeMode: 'contain',
        borderRadius: 40,
        marginLeft: 8,

    },
    body_container: {
        padding: 5,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        flex: 1,
    },
    price: {
        textAlign: 'right',
        fontSize: 16,
    },

});