import React from 'react'
import { useState } from 'react';
import { StyleSheet,View,Text,useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, useTheme, TextInput } from 'react-native-paper';
import { handleSignUp } from '../firebase/handleSignUp'
import { handleLogin } from '../firebase/handleSignUp'

import Navigation from '../Navigation/Navigation'

const Login = () => {
  const {navigate} = useNavigation();
  const { height, width } = useWindowDimensions();
  const theme = useTheme();
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  
  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
       if (!isLogged) {
          handleSignUp(enteredEmail, enteredPassword, Navigation.navigate)
       } else {
        handleSignUp(enteredEmail, enteredPassword, Navigation.navigate)
    }

  }

  const styles = StyleSheet.create({
    screen: {
      backgroundColor: 'red',
      flex: 1,
      alignItems:'center',
    }
  });

  return (
    <View style={styles.screen}>
      <View>
        <Text>E-mail</Text>
        <TextInput
          onChangeText={updateInputValueHandler.bind(this, 'email')}
          value={enteredEmail}
          placeholder = "Tu wpisz e-mail firmowy"
        />
        <Text>Hasło</Text>
        <TextInput
          onChangeText={updateInputValueHandler.bind(this, 'password')}
          secure
          value={enteredPassword}
          placeholder = "Minimum 8 znaków"
        />
        <Button mode="text">Nie pamiętam hasła</Button>
        <View>
          <Button onPress={submitHandler}>
            {isLogged ? 'Zaloguj się' : 'Zarejestruj się'}
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Login