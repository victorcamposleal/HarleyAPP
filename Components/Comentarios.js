import React from 'react'
import { StyleSheet, Text, View,Button,FlatList } from 'react-native';
import {useEffect, useState } from 'react';
//naviagte push añade mas vistas al screen las va añadiendo al stack las va creado minetras navegas
 function Comentarios({navigation}){

    const [post,setPost]=useState([]);



    fetch('http://harley.maremagnocomunicacion.com/wp-json/wp/v2/posts')
      .then((response) => response.json())
      .then((json) => {
        setPost(json)
      })
      .catch((error) => console.error(error))
    
    return (
        <View style={styles.container}>
{/* 
<FlatList
            data={post}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id}, {item.date}</Text>
            )}
          /> */}

            <Text>aqui va el tgexto que tu quieras</Text>
            <Button title="Perfil"
            onPress={()=>{navigation.push("Perfil")}}/>
        </View>
    )
}

export default Comentarios

const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"red"

}

})
