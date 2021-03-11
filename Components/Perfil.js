import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
//naviagte push añade mas vistas al screen las va añadiendo al stack las va creado minetras navegas
 function Perfil({navigation}){
    return (
        <View style={styles.container}>
            <Text>Perfils</Text>
            <Button title="publicaciones"
            onPress={()=>{navigation.push("Publicacion")}
            }/>
        </View>
    )
}

export default Perfil

const styles = StyleSheet.create({
 
})
