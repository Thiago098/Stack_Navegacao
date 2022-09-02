import { useNavigation } from '@react-navigation/core';
import React from 'react'

import { StyleSheet, Text, View, Button } from 'react-native';




export default function Home(){

const navigation = useNavigation();

function paginaDetalhes(){
navigation.navigate('Detalhes')

}


return(

    <View>

    <Text> Essa é a página inicial </Text>

    <Button title = 'Ir para detalhes' onPress = {paginaDetalhes}/>

    </View>


);
}

