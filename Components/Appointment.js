import React from 'react'
import { StyleSheet, Text ,ScrollView, Alert} from 'react-native'
 import {Item,Label,Input, Button, View} from 'native-base';
import firebase from'../database/firebase';
import {useEffect, useState } from 'react';
import SignaturePad from 'react-native-signature-pad'
import HTML from "react-native-render-html";
import { render } from 'react-dom';
import * as Progress from 'react-native-progress';
import Award from '../assets/Moto.svg';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';


function Appoinment(){

   /// [isSoulSold,setIsSoulSold]=useState(false);

  const [sign,setSign]=useState('');


const [people,setPeople]= useState({ 
   firstName:"",
   lastName:"",
 })

 // la funcion handle chnage text sirve para guardar los cambios que se cogen del ionput
const handleChangeText= (name,value)=>{
//en este set state agrega los cambios solo delos campos en los que hacen cambios
setPeople({...people,[name]:value})

}

function signaturePadChange(base64DataUrl) {
 setSign(base64DataUrl)
}

function signaturePadError(error) {
  console.error(error);
}
const  save= async()=> {
  if(people.firstName === "" || people.lastName === "" ) {
    alert("Not all fields in the form are populated.")
   } else {

await firebase.db.collection('people').add({
  firstName:people.firstName,
  lastName:people.lastName,
  //signature:sign



})

alert("save")

  }
}
return(
    <ScrollView style={styles.container1} >
 
  
<View style={styles.container}>
<Label > Fist Name</Label>
<TextInput
placeholder="First Name"
onChangeText={(value)=>handleChangeText("firstName",value)}
style={{marginLeft: 25}}
/>
</View>
 
<View style={styles.container}>
<Label style={{marginLeft: 15}}> Last Name</Label>
<TextInput
placeholder="Last Name"
onChangeText={(value)=>handleChangeText("lastName",value)}
style={{marginLeft: 25}}
/>
</View>
      <View style={styles.container} >
            <Label style={styles.signatureLabel}>Signature</Label>
              <SignaturePad
                onError={(error) => signaturePadError(error)}
                onChange={(sig) => signaturePadChange(sig)}
                style={styles.signaturePad}

                />
            </View>
            </ScrollView >
    );
  }



export default Appoinment

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
   alignItems:'center',
    paddingTop: Constants.statusBarHeight,  
    backgroundColor: 'red',
  },

  button: {
    margin: 10,
    color:'#333333',
  },
 
  container1: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,  
    backgroundColor: 'black',
  }
});
    
    

