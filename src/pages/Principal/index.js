import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Modal, TextInput } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import api from '../../services/api';

export default function Principal() {

    let [fontsLoaded] = useFonts({
        'Audiowide-Regular': require('../../../assets/fonts/Audiowide-Regular.ttf'),
    });

    const navigation = useNavigation();

    const [modalVisivel, setModalVisivel] = useState(false);
    const [numeroBin, setNumeroBin] = useState('');
    const [flagError1, setFlagError1] = useState(false);
    const [flagError2, setFlagError2] = useState(false);

    function abreModal() {
        setModalVisivel(true);
    }

    async function bin2DecApi() {

        if (numeroBin == '') {
            setFlagError1(true);
            setFlagError2(false);
            return '1'
        }
        else {
            const response = await api.get('bin2dec/' + numeroBin);

            if (response.data.dec == "not calculated") {
                setFlagError2(true);
                setFlagError1(false);
                return response.data.erro
            }

            navigation.reset({
                index: 0,
                routes: [{ name: 'Principal' }],
            })

            const conversao = {
               numeroBin: numeroBin,
               numeroDec: response.data.dec
            }

            navigation.navigate('Resultado', { conversao });
        }

    }

    function converterNumero() {
        bin2DecApi()
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.containerLogo}>
                    <Text style={[styles.logo, { fontFamily: 'Audiowide-Regular' }]}>
                        Bin2Dec
                    </Text>
                </View>

                <View style={styles.containerBotao}>
                    <TouchableOpacity style={styles.botao} onPress={() => abreModal()}>
                        <Text style={[styles.botaoTexto, { fontFamily: 'Audiowide-Regular' }]}>
                            Inserir Número
                        </Text>
                    </TouchableOpacity>
                </View>

                <Modal
                    onChangeText={(texto) => set(texto)}
                    animationType="slide"
                    transparent={true}
                    visible={modalVisivel}
                    onRequestClose={() => {
                        setModalVisivel(!modalVisivel);
                    }}
                >

                    <View style={styles.modalContainer}>


                        {flagError1 &&
                            <Text style={[styles.modalTextoError, { fontFamily: 'Audiowide-Regular' }]}>
                                O campo não foi preenchido.
                            </Text>
                        }

                        {flagError2 &&
                            <Text style={[styles.modalTextoError, { fontFamily: 'Audiowide-Regular' }]}>
                                Informe um número válido.
                            </Text>
                        }

                        <Text style={[styles.modalTexto, { fontFamily: 'Audiowide-Regular' }]}>
                            Número Binário
                        </Text>

                        <TextInput
                            onChangeText={(texto) => setNumeroBin(texto)}
                            value={numeroBin}
                            autoFocus={true}
                            maxLength={8}
                            keyboardType={"number-pad"}
                            style={[styles.modalIputTexto, { fontFamily: 'Audiowide-Regular' }]}
                        />
                        <TouchableOpacity style={[styles.botao, { width: "100%", marginTop: 0, }]} onPress={() => converterNumero()}>
                            <Text style={[styles.botaoTexto, { fontFamily: 'Audiowide-Regular' }]}>
                                Converter Número
                            </Text>
                        </TouchableOpacity>
                    </View>

                </Modal>

            </SafeAreaView>
        );
    }

};