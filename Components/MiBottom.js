import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MiStackGeneral from './MiStackGeneral';
import ProfileDrawer from './PorfileDrawer';
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
        <Tab.Navigator styles={styles.Menu}>
        <Tab.Screen options={({...args})=>{

//ponemos una logica para esconder el menu, los args son los argumentos que  tiene home
if(args.route.state){
// si dentro de la ruta de home ya hay elementos entonces entra en la siguiente ruta
//no esconveninte ocultar esta tab bar en el desarrollo
if(args.route.state.routes[args.route.state.routes.length-1].name==='Comentarios'){
    return{tabBarVisible:false}
}

}return{tabBarVisible:true}


        }} name="Home"  styles={styles.Menu} >
           {(props)=><MiStackGeneral  {...props} nombreInicial="Inicio"/>}
           
            </Tab.Screen>
        <Tab.Screen name="Search" >
            {(props)=><MiStackGeneral{...props} nombreInicial="Look"/>}
            
            </Tab.Screen>
        <Tab.Screen name="Add" component={Add}/ >

        <Tab.Screen name="Follow" component={MiStackGeneral}/ >
        <Tab.Screen name="Profile" component={ProfileDrawer}/ >
            </Tab.Navigator>
    )
}

export default MiBottom

const styles = StyleSheet.create({
 Menu:{
backgroundColor:'#fa6600',
fontWeight:"200",


 }
})
