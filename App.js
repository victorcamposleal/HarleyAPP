/* eslint-disable */
import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text, View,Button, AsyncStorage} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MiStackGeneral from './Components/MiStackGeneral'
import MiBottom from  './Components/MiBottom';
import Noticias from"./Components/Noticias";

import {useEffect, useState } from 'react';
import Inicio from './inicio';
import Body from './Body';
import Footer from './Footer';

export default function App() {

  const [post,setPost]=useState([]);
  useEffect(() => {


    fetch('http://harley.maremagnocomunicacion.com/wp-json/wp/v2/posts/?per_page20')
    .then((response) => response.json())
    .then((json) => {
      setPost(json)

    })
    .catch((error) => console.error(error))
  },[])
// // const [count,setCount]= useState(2);
// // const [tareas,setTareas]= useState([]);
// // const [texto,setTexto]=useState('');
// // const[isLoading,setIsloading]=useState(true);

// // //compoenent didMount es un compoenen te que se ejecuta una vez que se ha ejecutado nuestro metodo en este caso se ejecuta el render y todo y despues el compoennte didmount
// // // pero como estamos utilizando react hooks se utiliza el useeffect tenemos que ponerle los brakets para que solo funcione una vez en el mount y en el unmount

// // useEffect(() => {
// //   recuperarEnCel();
// // },[])



// // //ejecutaremos la funcion recuperar en el telfono para ver la lista sea lo primero que vean los clientes



// // function muestra(value) {
// // console.log(value);
// // setTexto(value);
  
// // }
// // // parametros >flecha>cuerpo
// // addHomework= ()=>{
// //   //setTareas(tareas.push(tarea)) 
// //   //or con el spare operator
// //   const nuevasTareas=[...tareas,{texto:texto,key:Date.now()}]
// //   //le pasamos la tareas ala memoria
// //   guardarEnCel(nuevasTareas)
// //   //le pasamaos la tareas al estado
// //   setTareas(nuevasTareas);
// //   setTexto('');
// //   console.log(tareas.length);
// // }

// // function contador(){
// //   setCount(count+1)
// // }
// // function restart(){
  
// //   setCount(count-1)
// // }
// // //hacemos la funcion de eliminar de la lista con un filter y le pasamos el el key del objeto que queremos agregar
// // function eliminarTarea(id) {
// //   const nuevasTareas=tareas.filter((tarea=>{

// // return tarea.key !==id

// //   }));

// //   guardarEnCel(nuevasTareas)
// //   setTareas(nuevasTareas)
  
// // }

// // function guardarEnCel(tareas) {
// //   //async storage sirve para guaradar informacion en el dispositivo le damos un nombre un valor esto con set items al momento de guardar
// //   AsyncStorage.setItem('@AppHarley:tares',JSON.stringify(tareas))
// //   .then((valor)=>
// //    console.log(valor))
// //   .catch((error)=>{
// //      console.log(error);
// //    })

  
// // }


// // function recuperarEnCel() {
// //   //async storage sirve para guaradar informacion en el dispositivo le damos un nombre un valor esto con get items sirve para recuperar el elemento guardado
// //   AsyncStorage.getItem('@AppHarley:tares')
// //   .then((valor)=>{console.log(valor);
// //     //antes de que se cargen las tareas hay que mostrarle al usuriao el loading
// //     setIsloading(false)
// //     //mandamos a llamar las tareas que tenemos en memoria para poder renderizarlas
// //     if(valor!==null){
// //     const nuevasHomes=JSON.parse(valor);
// //     setTareas(nuevasHomes)
// //     }
  
// //   })
// //   .catch((error)=>{console.log(error);
// //     setIsloading(false)})

  
// // }
  return (

    <NavigationContainer>
<MiBottom />

      </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
  