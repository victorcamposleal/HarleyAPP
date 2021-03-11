
import React from 'react'
import { StyleSheet, Text, View,FlatList,Button , Imag, ScrollView, useWindowDimensions,ActivityIndicator} from 'react-native'
import {useEffect, useState } from 'react';
import {WebView} from 'react-native-webview';
import Award from '../assets/Moto.svg';
import HTML from "react-native-render-html";
import { render } from 'react-dom';
import * as Progress from 'react-native-progress';
//import * as Progress from 'react-native-progress';
//import * as Progress from 'expo-progress';
import ProgressBar from 'react-native-progress/Bar';
const Pagina = ({navigation}) => {


  const[isLoading,setIsloading]=useState(true);

  setTimeout(() => {setIsloading(false)}, 1000)
  
return (
 
        <View style={styles.container} >
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

    <WebView
         // source={locaLFile}
         // source={{uri:'file:///android_asset/fetch.html' }}
          //injectedJavascriptBeforeConetentLoaded={javascript}
          //incject html inline 
         //source={{html:'<h1>this is inline html its normal html</h1>'}}
         source={{uri:'https://cantabriaharleydavidson.com' }}
          /> 
      
      
         <Button title="Home"
            onPress={()=>{navigation.push("Home")}}/>
        
        
        </View>
    )
}

export default Pagina
function Novedad(props) {
  const{ text}=props;
  return(


   
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




              {/*   //<Text style={styles.text}> {text.title.rendered} </Text>*/}
              <WebView source={{html:`<div> {text.content.rendered} </div>`}} />
                     {/* <Text style={styles.text}> {text.content.rendered} </Text>*/}
                
               
            </View>

  )
}
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


img:{
  overflow:'visible',
  position:'absolute',
  marginTop:350,
  marginRight:400,
  paddingRight:0,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  
  }
})
