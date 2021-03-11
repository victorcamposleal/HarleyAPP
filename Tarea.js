import React from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
//importamos lo iconos de expo estos ya existen estas librerias
import {Ionicons} from '@expo/vector-icons';
function Tarea(props) {
const{item,eliminar}=props

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{item.texto}</Text>
            {/* para que elemnto icons pueda ser interactivo le vamos a añadir un elemento que se llama touchable opacity que es una funciionalidad mas de react native para que no se ejecute automaticamente lo tenemos que poner dentro una funcion flecha*/}
            <TouchableOpacity onPress={()=>{eliminar(item.key)}}>
            <Ionicons
            name="md-trash"
            size={24}
            color="gray"/>
            </TouchableOpacity>
        </View>
    )
}

export default Tarea

const styles = StyleSheet.create({

container:{
flex:1,
flexDirection:'row',
justifyContent:'space-between',
paddingHorizontal:16,
backgroundColor:'#af86cc'

},
texto:{
    fontSize:24,
}


})
