import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { useForm } from 'react-hook-form';
import { DateInput } from 'react-native-date-input';
import dayjs from 'dayjs';
 
// You can import from local files
import Input from './Input';
import Form from './Form';
import validation from './validation';
import Hero from './Hero';

type FormData = {
  name: string;
  email: string;
  password: any;
};



function Cita({navigation}){
  const { handleSubmit, register, setValue, errors } = useForm<FormData>();
  const [date, setDate] = useState('');
  let dateInput = null;
 
  const handleChange = (date) => {
    setDate(date);
  };
 
  const focus = () => {
    if (!dateInput) {
      return;
    }
 
    dateInput.focus();
  };
  const onSubmit = (data: FormData) => {
    Alert.alert('data', JSON.stringify(data));
  };

  return (
    <ScrollView style={styles.container1} >
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}>
      <Hero />
      <View style={styles.formContainer}>
        <Form {...{ register, setValue, validation, errors }}>
          <Input name="name" label="Name " />
          <Input name="email" label="Email" />
          <DateInput
   
      dateFormat={'DD/MM/YYYY'}
      defaultValue={new Date(dayjs().subtract(5, 'year').format('DD/MM/YYYY'))}
      defaultDate={new Date(dayjs().subtract(5, 'year'))}
      minimumDate={new Date(dayjs().subtract(10, 'year'))}
      maximumDate={new Date()}
      handleChange={handleChange}
      onRef={(input) => (dateInput = input)}
    />
          <Button title="Reserva" onPress={handleSubmit(onSubmit)} />
        </Form>
      </View>
    </KeyboardAwareScrollView>
    </ScrollView >
  );
};
export default Cita
const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: Constants.statusBarHeight,  
    backgroundColor: '',
  },
  formContainer: {
    padding: 8,
    flex: 1,
  
  },
  button: {
    backgroundColor: 'red',
  },
  container1: {
    flex: 1,
  
    paddingTop: Constants.statusBarHeight,  
    backgroundColor: 'black',
  }
});
