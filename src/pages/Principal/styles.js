import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: "#FFF",
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
    containerBotao: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    botao: {
        backgroundColor: "#5771FB",
        paddingVertical: 15,
        marginTop: 50,
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
    },
    botaoTexto: {
        fontSize: 16,
        color: "#FFF",
    },
    modalContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundColor: 'rgba(0, 0, 0, 0.40)'
    },
    modalTexto: {
        backgroundColor: "#FFF",
        color: "#C2C0C0",
        paddingTop: 10,
        paddingHorizontal: 20,
        fontSize: 14,
    },
    modalIputTexto: {
        backgroundColor: "#FFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
    },
    modalTextoError: {
        backgroundColor: "#FF0000",
        color: "#000",
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 14,
    },
});