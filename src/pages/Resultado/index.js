import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

export default function Resultado() {

    let [fontsLoaded] = useFonts({
        'Audiowide-Regular': require('../../../assets/fonts/Audiowide-Regular.ttf'),
    });

    const navigation = useNavigation();
    const route = useRoute();

    const conversao = route.params.conversao;


    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <SafeAreaView>
                <View style={styles.container}>

                    <View style={styles.containerLogo}>
                        <Text style={[styles.logo, { fontFamily: 'Audiowide-Regular' }]}>
                            Bin2Dec
                        </Text>
                    </View>

                    <View style={styles.containerResultado}>
                        <Text style={[styles.resultadoTexto, { fontFamily: 'Audiowide-Regular' }]}>
                            {conversao.numeroBin} (bin)
                        </Text>
                    </View>

                    <View  style={styles.containerResultado}>
                        <Text style={[styles.resultadoTexto, { fontFamily: 'Audiowide-Regular' }]}>
                            {conversao.numeroDec} (dec)
                        </Text>
                    </View>

                </View>
            </SafeAreaView>
        );
    };
}