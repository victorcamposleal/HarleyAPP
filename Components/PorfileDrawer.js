import React from 'react';
import { StyleSheet, TextInput,Text, View,Button } from 'react-native';
import { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();



function InicioDrawer(params) {
    return(


        <View >
    <Text>InicioDrawer </Text>
    </View>

    )
}
function LookDrawer (params) {
    return(


        <View >
    <Text> LookDrawer </Text>
    </View>

    )
}

function ProfileDrawer(props) {
  const { count,cambiarTexto,agregar,text ,name}=props;
      return (
      
     <Drawer.Navigator>

<Drawer.Screen name="InicioDrawer" component= {InicioDrawer}/>
<Drawer.Screen name="LookDrawer" component= {LookDrawer}/>

     </Drawer.Navigator>
 
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
  export default ProfileDrawer 