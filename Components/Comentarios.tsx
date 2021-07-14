import React from 'react'
import{addDays,format} from'date-fns'
import { StyleSheet, Text, View,Button,FlatList,SafeAreaView } from 'react-native';
import {useEffect, useState } from 'react';
import{Agenda} from 'react-native-calendars';
//naviagte push añade mas vistas al screen las va añadiendo al stack las va creado minetras navegas
type Item={
  name:string;
  cookies:boolean;
  } 

  type Post={
id:number;
title:string;
body:string;
userId:number;

  }
function Comentarios({navigation}){
const [items,setItems]=useState<{[key: string]:Post[]}>({});


useEffect(()=>{


  const getData =async()=>{

    const response= await fetch('https://jsonplaceholder.typicode.com/posts',);
    const data:Post[] =await response.json();
    const mappedData= data.map((post,index)=>{
const date=addDays(new Date(),index);

return{

  ...post,
  date:format(date,'yyyy-MM-dd'),
}


    })
    const reduced= mappedData.reduce((acc:{[key: string]:Post[]},currentItem)=>{
const{date,...coolItem}=currentItem;

acc[date]=[coolItem];

return acc;

    }
    ,{})
    setItems(reduced);
  }

getData()

},[])
const renderItem=(item:Item)=>{
return(
  <View style={styles.itemContainer}>
    <Text>
      {item.name}
    </Text>
    <Text>{item.cookies?'1':'2'}</Text>
    
    
    </View>
)

};

const [post,setPost]=useState([]);



    fetch('http://harley.maremagnocomunicacion.com/wp-json/wp/v2/posts')
      .then((response) => response.json())
      .then((json) => {
        setPost(json)
      })
      .catch((error) => console.error(error))
    
    return (
        <SafeAreaView style={styles.safe}>


          <Agenda items={items} renderItem={renderItem}/>
{/* 
<FlatList
            data={post}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id}, {item.date}</Text>
            )}
          /> */}

            
        </SafeAreaView>
    )
}

export default Comentarios

const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"red"

},
itemContainer:{
backgroundColor:'white',
margin:5,


},
safe:{
flex:1,
}

})
