import React from 'react'
import { StyleSheet, Text, View, Button, ActivityIndicatorBase } from 'react-native';
import {Agenda} from 'react-native-calendars'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useEffect, useState } from 'react';
import{ Card,Avatar} from'react-native-paper';

//naviagte push añade mas vistas al screen las va añadiendo al stack las va creado minetras navegas
 


const timeToString=(time)=> {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };



function Perfil({navigation}){
const [items,setItems]=useState({});

const   loadItems=(day)=> {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
     items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
        items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
    setItems(newItems);
    }, 1000);
  };

  const renderItem=(item)=>{
return(<TouchableOpacity style={{marginRight:10,marginTop:17}}>
    <Card>
<Card.content>
    
    <View
    style={{flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'}}>
        <Text>
{item.name}
        </Text>

    </View>
    
    </Card.content>



    </Card>
    </TouchableOpacity>)


  }
    return (
        <View style={styles.container}>
          <Agenda

      items={items}
        loadItemsForMonth={loadItems}
        selected={'2017-05-16'}
        renderItem={renderItem}
      />
           
        </View>
    )
}

export default Perfil

const styles = StyleSheet.create({
container:{
    flex:1,
}
 
})
