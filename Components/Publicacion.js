import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
// por propos le pasamos la funcion de navigation que es una fuincion de react para poder navegar
 function Publicacion( {navigation}){



    
    return (
        <View style={styles.container}>
            <Text>{`Pùblicacion ${Date.now().toString()}`}</Text>
            <Button title="perfil"
            onPress={()=>{navigation.push("Perfil")}
            }/>
            <Button title="lista"
            onPress={()=>{navigation.navigate("Lista")}
            }/>
                <Button title="Comentarios"
            onPress={()=>{navigation.navigate("Comentarios")}
            }/>
              <Button title="Novedades"
            onPress={()=>{navigation.navigate("Novedades")}
            }/>
              <Button title="Cita"
            onPress={()=>{navigation.navigate("Cita")}
            }/>
        </View>
    )
}

export default Publicacion

const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"green"

}

})
