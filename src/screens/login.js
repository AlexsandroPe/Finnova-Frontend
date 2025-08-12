import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api/api.js';

export default function LoginScreen({ navigation }) {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const formatCpf = (value) => {
    let inputCpf = value.replace(/\D/g, '');
    inputCpf = inputCpf.slice(0, 11);

  if (inputCpf.length > 9) {
    inputCpf = inputCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
  } 
  else if (inputCpf.length > 6) {
    inputCpf = inputCpf.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
  } 
  else if (inputCpf.length > 3) {
    inputCpf = inputCpf.replace(/(\d{3})(\d{1,3})/, '$1.$2');
  }

    return inputCpf;
  };

  const handleCpfChange = (inputCpf) => {
    const formattedCpf = formatCpf(inputCpf);
    setCpf(formattedCpf);
  };

  const handleLogin = async () => {
    try {
      const cpfOnlyNumbers = cpf.replace(/\D/g, '');
      console.log(cpfOnlyNumbers);
      console.log(password);
      const response = await api.post('/auth/login', { cpf: cpfOnlyNumbers, password });
      console.log('Login successful:', response.data);
      navigation.navigate('Home');
    } catch (error) {
      console.log('Login failed:', error.response?.data || error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/FinnovaLogoBL.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Bem-vindo</Text>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={handleCpfChange}
        keyboardType="numeric"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.iconContaineter} 
          onPress={() => setShowPassword(!showPassword)}>
          <Icon
            name={showPassword ? 'visibility' : 'visibility-off'}
            size={24}
            color="#888"
          />
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 80, alignItems: 'center', flex: 1 },
  image: { width: 200, height: 200, resizeMode: 'contain',  },
  title: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 40 },
  input: { borderWidth: 1, padding: 12, marginBottom: 12, borderRadius: 8, width: '100%' },
  button: { backgroundColor: '#133776', padding: 16, borderRadius: 8, width: '100%' },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
  link: { marginTop: 16, color: '#133776', textAlign: 'center' },
  passwordContainer: { width: '100%', position: 'relative', marginBottom: 12, justifyContent: 'center' },
  iconContaineter: { position: 'absolute', right: 10, top: '50%', transform: [{translateY: -18}] }
});

//LogoColors: '#131965' '#0bb9d9', '#133776', '#0986b0', '#0f5d8e'