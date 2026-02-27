// Pantalla de autenticación.
// Consume API externa y guarda el token localmente.
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { style_01 } from '../styles/style_01';

const Login = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async () => {
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password
      });

      const token = response.data.token;

      await AsyncStorage.setItem('userToken', token);
      await AsyncStorage.setItem('username', username);

      navigation.navigate('Products');

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style_01.container}>
      <Text style={style_01.title}>Fake Store Login</Text>

      <TextInput
        style={style_01.input}
        placeholder="Username"
        onChangeText={setUsername}
      />

      <TextInput
        style={style_01.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />

      <TouchableOpacity style={style_01.button} onPress={loginUser}>
        <Text style={style_01.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;