import React from 'react';
import { StyleSheet, TextInput,Text, View,Button } from 'react-native';
import { useEffect, useState } from 'react';



function Inicio(props) {
  const { count,cambiarTexto,agregar,text ,name}=props;
      return (
      
          <View style={styles.box1}>
            <TextInput
            style={styles.texto}
            onChangeText={cambiarTexto}
            placeholder="Write your tasks.."
            onSubmitEditing={agregar}
            value={text}
            />
        </View>
          
 
      );
    }
    
    const styles = StyleSheet.create({
 
      box1:{
        flex: 1 /*ahora esta divido en 33.33%*/,
        backgroundColor:'#00ff00',
        width:"100%",
        justifyContent:"center",
        alignItems:'center',
        fontSize:46},
        texto:{
          fontSize:24,
        }
    
   
    });
  export default Inicio    