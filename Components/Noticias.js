
import React from 'react'
import { StyleSheet, Text, View,FlatList,Button , Imag, ScrollView, useWindowDimensions, ActivityIndicator} from 'react-native'
import {useEffect, useState } from 'react';
import {WebView} from 'react-native-webview';
import HTML from "react-native-render-html";
import { render } from 'react-dom';
import * as Progress from 'react-native-progress';
import Award from '../assets/Moto.svg';



const Noticias = (props) => {
const [post,setPost]=useState([]);
const[isLoading,setIsloading]=useState(true);
console.log(post)
useEffect(() => {

if(post.length===0){

  fetch('http://harley.maremagnocomunicacion.com/wp-json/wp/v2/posts/?per_page20')
  .then((response) => response.json())
  .then((json) => {
    setPost(json)
    setIsloading(false)
  })
  .catch((error) => console.error(error))
}else{setIsloading(false)}
},[])
  

const renderItem=({item}) => {
        
  if (item.categories[0]===78) { return (
      
      <View style={{ flex: 1 , margin:20, borderBottomColor:'black', borderWidth:1}}>



 <Text>{item.title.rendered}</Text>
        <HTML source={{ html: item.content.rendered }}  />    
      
  </View>
)}}; 
  // to inject javascript in to the app
  //const javascript='window.alert()this is javascript'
    //to use a local html
    //const locaLFile=require('../assets/fetch.html')

    return (

      <View>
{
            // aqui estamo haciuendo una condcional si loading es verdadero entonces se sale el simbolo

            
            isLoading &&
            <View style={[styles.container, styles.horizontal]}>

            <ActivityIndicator
            size="large"
            color="#fa6600"/>
                
<Award
width={200}
height={200}
style={[styles.container,styles.img]}

/>
            </View>
        }

 
     
      
     <FlatList
      
      data={post}
      renderItem={renderItem}

   keyExtractor={(item, index) => index}
      />    
         
            
  
     

      
     

            </View>
    )
}

export default Noticias
const styles = StyleSheet.create({
container:{

  backgroundColor: '#CCCCCC',
 
  width: '100%',
  height:'100%',

 
  justifyContent:'center'
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
text: {
  fontSize: 30,
  fontWeight: '400',
  color: '#080808'
},
text2:{
fontSize:10,
padding:10

},
horizontal: {
  flexDirection: "row",
  justifyContent: "space-around",
  padding: 10,

},
img:{
overflow:'visible',
position:'absolute',
marginTop:350,
marginRight:400,
paddingRight:0,
}
})
