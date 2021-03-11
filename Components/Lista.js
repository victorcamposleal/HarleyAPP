import React from 'react'
import { StyleSheet, Text, View,AsyncStorage } from 'react-native'
import {useEffect, useState } from 'react';
import Inicio from '../inicio';
import Body from '../Body';
import Footer from '../Footer';


function Lista (props){
   
    const [count,setCount]= useState(2);
    const [tareas,setTareas]= useState([]);
    const [texto,setTexto]=useState('');
    const[isLoading,setIsloading]=useState(true);
    
    //compoenent didMount es un compoenen te que se ejecuta una vez que se ha ejecutado nuestro metodo en este caso se ejecuta el render y todo y despues el compoennte didmount
    // pero como estamos utilizando react hooks se utiliza el useeffect tenemos que ponerle los brakets para que solo funcione una vez en el mount y en el unmount
    
    useEffect(() => {
      recuperarEnCel();
    },[])
    
    
    
    //ejecutaremos la funcion recuperar en el telfono para ver la lista sea lo primero que vean los clientes
    
    
    
    function muestra(value) {
    console.log(value);
    setTexto(value);
      
    }
    // parametros >flecha>cuerpo
    addHomework= ()=>{
      //setTareas(tareas.push(tarea))
      //or con el spare operator
      const nuevasTareas=[...tareas,{texto:texto,key:Date.now()}]
      //le pasamos la tareas ala memoria
      guardarEnCel(nuevasTareas)
      //le pasamaos la tareas al estado
      setTareas(nuevasTareas);
      setTexto('');
      console.log(tareas.length);
    }
    
    function contador(){
      setCount(count+1)
    }
    function restart(){
      
      setCount(count-1)
    }
    //hacemos la funcion de eliminar de la lista con un filter y le pasamos el el key del objeto que queremos agregar
    function eliminarTarea(id) {
      const nuevasTareas=tareas.filter((tarea=>{
    
    return tarea.key !==id
    
      }));
    
      guardarEnCel(nuevasTareas)
      setTareas(nuevasTareas)
      
    }
    
    function guardarEnCel(tareas) {
      //async storage sirve para guaradar informacion en el dispositivo le damos un nombre un valor esto con set items al momento de guardar
      AsyncStorage.setItem('@AppHarley:tares',JSON.stringify(tareas))
      .then((valor)=>
       console.log(valor))
      .catch((error)=>{
         console.log(error);
       })
    
      
    }
    
    
    function recuperarEnCel() {
      //async storage sirve para guaradar informacion en el dispositivo le damos un nombre un valor esto con get items sirve para recuperar el elemento guardado
      AsyncStorage.getItem('@AppHarley:tares')
      .then((valor)=>{console.log(valor);
        //antes de que se cargen las tareas hay que mostrarle al usuriao el loading
        setIsloading(false)
        //mandamos a llamar las tareas que tenemos en memoria para poder renderizarlas
        if(valor!==null){
        const nuevasHomes=JSON.parse(valor);
        setTareas(nuevasHomes)
        }
      
      })
      .catch((error)=>{console.log(error);
        setIsloading(false)})
    
      
    }
  





















   
    return (
        <View style={styles.container}>
        <Inicio name="Harley" count={count} cambiarTexto={muestra}  text={texto} agregar={addHomework} />
        {/* pasamos la funcion de l eliminarTarea mediante props */}
        <Body tareas={tareas} eliminar={eliminarTarea} isLoading={isLoading}/>
       <Footer contador={contador} guardar={guardarEnCel} recuperar={recuperarEnCel}/>
       </View>
    )
}

export default Lista

const styles = StyleSheet.create({
 
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"papayawhip"
        
        }
        

})
