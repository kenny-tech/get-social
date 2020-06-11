import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },  
    authContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#08457e'
    },
    textInput : {
        width: 250, 
        marginVertical: 10, 
        padding: 5, 
        color: 'white', 
        borderColor: 'white', 
        borderBottomWidth: 1,
    },
    button: {
        width: 250, 
        backgroundColor: '#808080', 
        paddingVertical: 10, 
        paddingHorizontal: 20, 
        borderRadius: 5,
    },
    logoText: {
        fontSize: 28,
        color: 'white',
        paddingBottom: 5
    },
    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#808080', 
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    textStyle: {
        color: 'white',
        fontSize: 16,
    },
});