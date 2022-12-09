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
  const [isLogged, setIsLogged] = useState(true);

  
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
      flex: 1,
      alignItems:'center',
    },
    input: {
      borderColor: theme.colors.gray,
      color: theme.colors.gray
    },
    text: {
      color: theme.colors.gray
    },
    textButton: {
      textDecoration: 'underline',
      fontSize: 10
    },
    button: {
      borderRadius: 5
    }
  });

  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.text}>E-mail</Text>
        <TextInput
        style={styles.input}
         mode="outlined"
          onChangeText={updateInputValueHandler.bind(this, 'email')}
          value={enteredEmail}
          placeholder = "Tu wpisz e-mail firmowy"
        />
        <Text style={styles.text}>Hasło</Text>
        <TextInput
          mode="outlined"
          style={styles.input}
          onChangeText={updateInputValueHandler.bind(this, 'password')}
          secure
          value={enteredPassword}
          placeholder = "Minimum 8 znaków"
        />
        <View style={styles.textButton}>
        <Button textColor={theme.colors.gray} style={styles.textButton} mode="text">Nie pamiętam hasła</Button>
        </View>
        <View>
          <Button buttonColor={theme.colors.primary} textColor={theme.colors.background} onPress={submitHandler} style={styles.button}>
            {isLogged ? 'ZALOGUJ' : 'ZAREJESTRUJ'}
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Login