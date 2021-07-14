import React from 'react'
import { createIconSetFromIcoMoon, FontAwesome } from '@expo/vector-icons'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MiStackGeneral from './MiStackGeneral';
import ProfileDrawer from './PorfileDrawer';
import Appointment from'./Appointment';
import Tienda from "./Tienda";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import Cita from "./Cita";
import Form from "./Form";

//import Icon from 'react-native-vector-icons/FontAwesome'
import Award from '../assets/Store.svg';

//para poder eusar el bttom tab tenemps que crear la constamnte de bottom tab
const Tab =createBottomTabNavigator();

 //creamos los componentes dentro de esta mismo como no los utilizaremos

function Add(params) {
    return(


        <View   styles={styles.Menu}>
    <Text>Add  </Text>
    </View>

    )
}
function Profile(params) {
    return(


        <View  styles={styles.Menu} >
    <Text> Profile </Text>
    </View>

    )
}
function Follow(params) {
    return(


        <View  styles={styles.Menu} >
    <Text> Follow  </Text>
    </View>

    )
}

// cada unio de los elementos del bottom tendra la propiedad de renderizar el stack general
// promedio de props de search y Home estamos mandando a que la primera pagina que se ahbara cuando den click sea el componente de Home y no el stack general
// dentro dfe las opciones del tab podemos ocultar lo con options={tabBarvisiblle:false}
function MiBottom({navigation}){
    return (
        <Tab.Navigator
     
        tabBarOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: 'white',
            activeBackgroundColor: '#c4461c',
            inactiveBackgroundColor: '#fa6600',
                style: {
                      backgroundColor: '#fa6600',
                      paddingBottom: 3,
                      
                },
                labelStyle: {
                    fontSize: 20,
                  },
                  tabStyle: {
                    fontSize: 10,
                  },
         }}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        >
        <Tab.Screen options={({...args})=>{

//ponemos una logica para esconder el menu, los args son los argumentos que  tiene home
if(args.route.state){
// si dentro de la ruta de home ya hay elementos entonces entra en la siguiente ruta
//no esconveninte ocultar esta tab bar en el desarrollo
if(args.route.state.routes[args.route.state.routes.length-1].name==='Comentarios'){
    return{tabBarVisible:false}
}

}return{tabBarVisible:true}


        }} name="Inicio"  styles={styles.Menu} 
        
        
        >
           {(props)=> <MiStackGeneral  {...props} nombreInicial="Inicio"/>}
           
            </Tab.Screen>
        <Tab.Screen name="Search" >
            {(props)=><MiStackGeneral{...props} nombreInicial="Look"/>}
            
            </Tab.Screen>


        <Tab.Screen name="Tienda" 
        component={Tienda}
   
   
        
        
         
        / >

       
        <Tab.Screen name="Taller" component={Appointment}/ >
            </Tab.Navigator>
    )
}

export default MiBottom

const styles = StyleSheet.create({

Menu:{
    backgroundColor:'#fa6600',
    color:'black',
    fontSize:20
}


})
