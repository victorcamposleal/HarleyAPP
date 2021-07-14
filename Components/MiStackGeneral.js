import React from 'react'
import{ Card,Avatar} from'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text, View,Button } from 'react-native'
import { createStackNavigator  } from '@react-navigation/stack'
import {useEffect, useState } from 'react';
import Publicacion from"./Publicacion";
import Perfil from"./Perfil";
import Comentarios from"./Comentarios";
import Lista from "./Lista";
import Novedades from "./Novedades";
import Noticias from"./Noticias";
import Cita from "./Cita";
import Appointment from"./Appointment";
import Pagina from './Pagina';
import eventos from'./eventos';
import SVG, {Use,Image, SvgUri} from "react-native-svg";
import Award from '../assets/harley-cycles.svg';


const Stack=createStackNavigator();
function Home({navigation}) {
  const [post,setPost]=useState([]);
  useEffect(() => {


    fetch('http://harley.maremagnocomunicacion.com/wp-json/wp/v2/posts/?per_page20')
    .then((response) => response.json())
    .then((json) => {
      setPost(json)

    })
    .catch((error) => console.error(error))
  },[])

console.log(post)


    return(


        <View style= {styles.menu} >
             

    <Text style= {styles.titulo}> Harley APP (cantabria) </Text>
   
      <View  style={styles.botons}>
      <Button  style={styles.boton}
    title="Novedades"
    color='#fa6600'
    onPress={()=>{navigation.push('Novedades')}}
    
    />
    </View>
    <View  style={styles.botons}>
<Button  
style={styles.boton}
    title="Noticias"
    color='#fa6600'
    onPress={()=>{navigation.push('Noticias',{post:post})}}
    
    />
 </View>
<View  style={styles.botons}> 
<Button  style={styles.boton}
    title="Página"
    color='#fa6600'
    onPress={()=>{navigation.push('Pagina')}}
    
    />
     </View>

    
<View  style={styles.botons}> 
<Button  style={styles.boton}
    title="Eventos"
    color='#fa6600'
    onPress={()=>{navigation.push('eventos')}}
    
    />
     </View>



  {/*
     <TouchableOpacity style={{marginRight:10,marginTop:17}} onPress={()=>{navigation.push('eventos')}}>
     <View
    style={{flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'}}>

<Card>
        <Text>
          Eventos
        </Text>
        </Card>
    </View>
    
    
     </TouchableOpacity>
    
    <TouchableOpacity style={{marginRight:10,marginTop:17}} onPress={()=>{navigation.push('eventos')}}>
    <Card>
<Card.content>
    
    <View
    style={{flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'}}>
        <Text>
          Eventos
        </Text>

    </View>
    
    </Card.content>



    </Card>
    </TouchableOpacity> */}



    
<Award
width={200}
height={200}
style={styles.img}

/>








 


</View> 

    )
}
function Search({navigation}) {



  const [post,setPost]=useState([]);
  useEffect(() => {


    fetch('http://harley.maremagnocomunicacion.com/wp-json/wp/v2/posts/?per_page20')
    .then((response) => response.json())
    .then((json) => {
      setPost(json)

    })
    .catch((error) => console.error(error))
  },[])
    return(


        <View style= {styles.menu} >
   <Noticias post={post}/>
    </View>

    )
}

export default function MiStackGeneral({nombreInicial}) {
  
//header mode significa que es como se veel acambio de vista de un lado a otro en el movil
   
    return (
        <Stack.Navigator initialRouteName={nombreInicial}>
            <Stack.Screen name="Publicacion" component={Publicacion}
         options={{
           headerStyle: {
             backgroundColor: '#fa6600', //Set Header color
           },
           headerTintColor: '#fff', //Set Header text color
           headerTitleStyle: {
             fontWeight: 'bold', //Set Header text style
           },
         }}
       
       
            
            />
            <Stack.Screen name="Comentarios" component={Comentarios}
               options={{
                headerStyle: {
                  backgroundColor: '#fa6600', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                  fontWeight: 'bold', //Set Header text style
                },
              }}/>
            <Stack.Screen name="Perfil" component={Perfil}
            
            
            
            
            
            options={{
              headerStyle: {
                backgroundColor: '#fa6600', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          
          
               
               />
            <Stack.Screen name="Lista" component={Lista}   options={{
           headerStyle: {
             backgroundColor: '#fa6600', //Set Header color
           },
           headerTintColor: '#fff', //Set Header text color
           headerTitleStyle: {
             fontWeight: 'bold', //Set Header text style
           },
         }}
       
       
            
            />
            <Stack.Screen name="Novedades" component={Novedades}   options={{
           headerStyle: {
             backgroundColor: '#fa6600', //Set Header color
           },
           headerTintColor: '#fff', //Set Header text color
           headerTitleStyle: {
             fontWeight: 'bold', //Set Header text style
           },
         }}
       
       
            
            />
            <Stack.Screen name="Inicio" component={Home}   options={{
           headerStyle: {
             backgroundColor: '#fa6600', //Set Header color
           },
           headerTintColor: '#fff', //Set Header text color
           headerTitleStyle: {
             fontWeight: 'bold', //Set Header text style
           },
         }}
       
       
            
            />
            <Stack.Screen name="Look" component={Search}   options={{
           headerStyle: {
             backgroundColor: '#fa6600', //Set Header color
           },
           headerTintColor: '#fff', //Set Header text color
           headerTitleStyle: {
             fontWeight: 'bold', //Set Header text style
           },
         }}
       
       
            
            />
            <Stack.Screen name="Noticias" component={Noticias} options={{
           headerStyle: {
             backgroundColor: '#fa6600', //Set Header color
           },
           headerTintColor: '#fff', //Set Header text color
           headerTitleStyle: {
             fontWeight: 'bold', //Set Header text style
           },
         }}
       >
     
    
      </Stack.Screen>



    
            <Stack.Screen name="Pagina" component={Pagina}   options={{
           headerStyle: {
             backgroundColor: '#fa6600', //Set Header color
           },
           headerTintColor: '#fff', //Set Header text color
           headerTitleStyle: {
             fontWeight: 'bold', //Set Header text style
           },
         }}
       
       
            
            />
       <Stack.Screen name="Cita" component={Cita}   options={{
           headerStyle: {
             backgroundColor: '#fa6600', //Set Header color
           },
           headerTintColor: '#fff', //Set Header text color
           headerTitleStyle: {
             fontWeight: 'bold', //Set Header text style
           },
         }}
       
       
            
            />

<Stack.Screen name="Appointment" component={Appointment}   options={{
           headerStyle: {
             backgroundColor: '#fa6600', //Set Header color
           },
           headerTintColor: '#fff', //Set Header text color
           headerTitleStyle: {
             fontWeight: 'bold', //Set Header text style
           },
         }}
       
       
            
            />
 <Stack.Screen name="eventos" component={eventos}   options={{
           headerStyle: {
             backgroundColor: '#fa6600', //Set Header color
           },
           headerTintColor: '#fff', //Set Header text color
           headerTitleStyle: {
             fontWeight: 'bold', //Set Header text style
           },
         }}
       
       
            
            />






 </Stack.Navigator>
       
       

    )
}


const styles = StyleSheet.create({
    boton:{
     backgroundColor:'#fa6600',
     padding:10,
     marginBottom:10
    },
    botons:{
      backgroundColor:'#fa6600',
      padding:10,
      marginBottom:10,
      alignItems: 'stretch'
     },
    itemContainer: {
      marginHorizontal: 10,
      height: 60,
      backgroundColor: 'white',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 2,
      elevation: 3,
      justifyContent: 'center',
      paddingHorizontal: 30,
      marginBottom: 12
    },
    titulo: {
      fontSize: 30,
      fontWeight: '400',
      color: 'white',
      textAlign:'center',
      alignItems:'center',
      justifyContent:'center',
      marginBottom:10
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      menu:{
backgroundColor:'black',
flex:1,
padding:20,
alignItems:'stretch'

      },
      img:{
        marginHorizontal:100
      }
    })
    