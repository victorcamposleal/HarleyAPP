import React from 'react'
import { StyleSheet,View, Text, TextInput, FlatList, ActivityIndicator } from 'react-native'
import Tarea from './Tarea'

function Body(props) {
const { tareas, eliminar,isLoading}=props;

/*const Item=(elemento)=>{console.log(elemento)
    <Text>{elemento.item}</Text>}
    
    en reac se utiliza el flatlist para imprimir en lugar del map o el for
    */

    /*const renderItem=({item})=>{console.log(elemento)
    <Text>{item.texto}</Text>}*/



    
    return (
        <View style={styles.box2} >


             {
            // aqui estamo haciuendo una condcional si loading es verdadero entonces se sale el simbolo
            isLoading &&
            <ActivityIndicator
            size="large"
            color="grey"/>
        }
 
<FlatList
data={tareas}
renderItem={({item})=>{return<Tarea item={item} eliminar={eliminar}/>}}/> 
        </View>
    )
}
 
const styles= StyleSheet.create({

box2:{

    flex: 1 /*ahora esta divido en 33.33%*/,
    backgroundColor:"#007CC7",
    width:"100%",
    justifyContent:"center",



},
texto:{
    paddingHorizontal:16,
    fontSize:24
}

})
export default Body