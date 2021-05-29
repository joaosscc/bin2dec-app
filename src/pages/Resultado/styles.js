import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    containerLogo: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
    },
    logo: {
        marginTop: 50,
        fontSize: 60,
    },
    containerResultado: {
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
    },
    resultadoTexto: {
        padding: 15,
        borderColor: '#000000',
        borderWidth: 3,
        fontSize: 25,
    }
});